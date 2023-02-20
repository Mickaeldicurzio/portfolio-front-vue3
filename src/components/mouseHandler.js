import { ref, onMounted, onUnmounted } from "vue";

const useMouse = () => {
    const x = ref(0)
    const y = ref(0)

    const update = (event) => {
        x.value = event.pageX
        y.value = event.pageY

    }
}