import Vue from 'vue';

import Button from './button';
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

Vue.component('y-button', Button);
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-input', Input)
Vue.component('y-row', Row)
Vue.component('y-col', Col)
new Vue({
    el: '#app',
    data: {
        loading: false,
        message: '1'
    }
});