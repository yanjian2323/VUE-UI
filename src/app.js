import Vue from 'vue';

import Button from './button';
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Tab from './tab'
import TabNav from './tab-nav'
import TabItem from './tab-item'
import TabContent from './tab-content'
import TabPanel from './tab-panel'
import Collapse from './collapse'
import CollapseItem from './collapsee-item'
import toastPlugin from './plugin'
Vue.use(toastPlugin)

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

Vue.component('y-button', Button);
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-input', Input)
Vue.component('y-row', Row)
Vue.component('y-col', Col)
Vue.component('y-layout', Layout)
Vue.component('y-header', Header)
Vue.component('y-content', Content)
Vue.component('y-footer', Footer)
Vue.component('y-sider', Sider)
Vue.component('y-tab', Tab)
Vue.component('y-tab-nav', TabNav)
Vue.component('y-tab-item', TabItem)
Vue.component('y-tab-content', TabContent)
Vue.component('y-tab-panel', TabPanel)
Vue.component('y-collapse', Collapse)
Vue.component('y-collapse-item', CollapseItem)
new Vue({
    el: '#app',
    data: {
        selectedItems: ['2']
    },
    methods: {
        showToast() {
           this.$toast('更新成功', {
               closeButton: {
                   buttonText: 'OK',
               }
           })
        }
    }
});