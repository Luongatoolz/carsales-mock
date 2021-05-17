import 'bootstrap';
import '~/src/scss/index.scss';
import {SubscriberForm} from './subscriber-form';

(()=>{
    'use strict';
    const formEl = document.querySelector('#subscriber');
    new SubscriberForm(formEl);
})();