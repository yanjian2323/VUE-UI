import Toast from './toast'

function createToast(Vue, message, propsOptions) {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
        propsData: propsOptions
    })
    vm.$slots.default = [message]
    // 只有$mount才会触发生命周期的钩子
    vm.$mount()
    document.body.appendChild(vm.$el)
    return vm
}

let currentToast = null

export default {
    install(Vue) {
        Vue.prototype.$toast = function (message, options) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast(Vue, message, options)
            currentToast.$on('close', () => {
               currentToast = null
            })
        }
    }
}