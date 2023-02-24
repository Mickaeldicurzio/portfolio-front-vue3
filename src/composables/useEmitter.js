import {getCurrentInstance} from 'vue'

function useEmitter() {
    return getCurrentInstance().appContext.config.globalProperties.emitter;
}

export { useEmitter }