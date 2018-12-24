import Toast from './toast'
export default {
    install(Vue) {
        Vue.prototype.$toast = function(message, options) {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
            })
            vm.$slots.default = [message]
            // 只有$mount才会触发生命周期的钩子
            vm.$mount()
            document.body.appendChild(vm.$el)
        }
    }
}