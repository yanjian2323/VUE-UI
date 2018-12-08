const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

describe("Input", () => {
    it("存在", () => {
        expect(Input).to.exist
    })
    describe("props", () => {
        let vm = null
        const Constructor = Vue.extend(Input)
        afterEach(() => {
            vm.$destroy()
        })
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: '123'
                }
            })
            vm.$mount()
            const inputNode = vm.$el.querySelector('input')
            expect(inputNode.value).to.be.eq('123')
        })
        it('接收disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            })
            vm.$mount()
            const inputNode = vm.$el.querySelector('input')
            expect(inputNode.disabled).to.be.eq(true)
        })
        it('接收readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            })
            vm.$mount()
            const inputNode = vm.$el.querySelector('input')
            expect(inputNode.readOnly).to.be.eq(true)
        })
        it('接收error', () => {
            vm = new Constructor({
                propsData: {
                    error: '发生了错误'
                }
            })
            vm.$mount()
            const errorNode = vm.$el.querySelector('.error-msg')
            const iconNode = vm.$el.querySelector('use')
            expect(errorNode.innerHTML).to.be.eq('发生了错误')
            expect(iconNode.getAttribute('xlink:href')).to.be.eq('#i-error')
        })
    })
    describe('Event', () => {
        it('支持change/input/focus/blur', () => {
            ['change','input','focus','blur'].forEach((eventName) => {
                const Constructor = Vue.extend(Input)
                const vm = new Constructor()
                vm.$mount()
                const cb = sinon.fake()
                vm.$on(eventName, cb)
                let event = new Event(eventName);
                Object.defineProperty(event, 'target', {
                        value:{
                            value: 'inputvalue'
                        }
                    }
                )
                const inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(cb).to.have.been.calledWith('inputvalue')
            })
        })
    })
})