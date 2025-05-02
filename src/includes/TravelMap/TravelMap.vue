<template>

  <div class="TravelMap" v-if="countryCode && trips.length > 0">

    <!--MAP-->
    <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[middleTrips.location.lat, middleTrips.location.lon]"
    >

      <!--LAYER-->
      <l-tile-layer
          url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga"
      ></l-tile-layer>
      <!--      <l-control-layers/>-->

      <div v-for="(trip, key) in trips" :key="key" class="Trip">

        <!--MARKER -->
        <div class="TripMarker">
          <l-marker :lat-lng="[trip.location.lat, trip.location.lon]">

            <l-icon :icon-url="iconUrl" :icon-size="iconSize"/>

            <!--TOOLTIP -->
            <l-tooltip>
              <div class="TripMarker-popUp">
                <div class="TripMarker-popUpTitle">
                  <p>{{ trip.location.name }} - {{ trip.location.full_detail }}</p>
                </div>
                <br>

                <div class="TripMarker-weather">

                  <span><strong>{{ $t("aboutMeMessage.travels.weather") }}:</strong> {{
                      trip.weather_temperature
                    }}°</span>

                  <span class="TravelMap-weatherCondition">
                  <v-img :src="getWeatherIconUrl(trip.weather_condition)" class="TripMarker-weatherIcon"></v-img>
                </span>

                </div>

                <br>
                <br>

                <span><strong>Date:</strong>
                  {{
                    DateTime.fromMillis(trip.creation_time * 1000, {zone: trip.timezone_id}).toFormat("yyyy-MM-dd HH:mm:ss - ZZZZ")
                  }}
                </span>
                <br>
                <span><strong>Lat:</strong> {{ trip.location.lat }}</span><br>
                <span><strong>Long:</strong> {{ trip.location.lon }}</span>
              </div>
            </l-tooltip>

          </l-marker>
        </div>


      </div>

      <!--POLYLINE -->
      <l-polyline
          :lat-lngs="[
          this.tripsCoordinateList
        ]"
          color="rgba(255,255,255, 1)"
          :weight="2"
          :opacity="1"
          :stroke="true"
          :smoothFactor="2"
          :dash-array="[15, 15]"

      ></l-polyline>

    </l-map>

  </div>
</template>
<script>

import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  // LControlLayers,
  LTooltip,
  LPolyline,

} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "@/assets/images/marker.svg";
import {DateTime} from 'luxon';
import './TravelMap.scss'

export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    // LControlLayers,
    LTooltip,
    LPolyline,
  },

  setup() {
    return {
      markerIcon,
    };
  },

  data() {
    return {
      zoom: 4.5,
      iconWidth: 30,
      iconHeight: 30,
      trips: [],
      tripsCoordinateList: [],
      middleTrips: []
    };
  },

  props: {
    countryCode: String,
    polarstepTrip: JSON,
    displayFullTrip: Boolean
  },

  computed: {
    DateTime() {
      return DateTime
    },
    iconUrl() {
      return this.markerIcon;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },

  methods: {
    getWeatherIconUrl (iconName) {
      return require('@/assets/images/weather/' + iconName + '.svg')
    }
  },

  mounted() {
    let allTrips = this.polarstepTrip.all_steps
    let trips = this.countryCode ? allTrips.filter(trip => trip.location.country_code === this.countryCode) : allTrips;
    trips.forEach(
        (trip) => {
          this.tripsCoordinateList.push([trip.location.lat, trip.location.lon])
        }
    )
    const middleIndex = Math.floor(trips.length / 2);
    this.middleTrips = trips[middleIndex];
    this.trips = trips
  },

};
</script>
