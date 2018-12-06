import Vue from 'vue';

import Button from './button';
import ButtonGroup from './button-group'

import chai from 'chai'
const expect = chai.expect

Vue.component('y-button', Button);
Vue.component('y-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading: false
    }
});

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    const useNode = vm.$el.querySelector('use')
    expect(useNode.getAttribute('xlink:href')).to.eq('#i-setting')
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            loading: true
        }
    })
    vm.$mount()
    const useNode = vm.$el.querySelector('use')
    expect(useNode.getAttribute('xlink:href')).to.eq('#i-loading')
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    const svgNode = vm.$el.querySelector('svg')
    const { order } = getComputedStyle(svgNode)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}