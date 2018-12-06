const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

describe('Button', () => {
    it('存在', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon', () => {
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
    })
    it('可以设置loading', () => {
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
    })
    it('icon默认在左边', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount(div)
        const svgNode = vm.$el.querySelector('svg')
        const { order } = getComputedStyle(svgNode)
        console.log(order)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('icon在右边', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right '
            }
        })
        vm.$mount(div)
        const svgNode = vm.$el.querySelector('svg')
        const { order } = getComputedStyle(svgNode)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击触发click', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                loading: true
            }
        })
        vm.$mount()
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })
})