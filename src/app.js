import Vue from 'vue';

import Button from './button';
import ButtonGroup from './button-group'

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

Vue.component('y-button', Button);
Vue.component('y-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading: false
    }
});