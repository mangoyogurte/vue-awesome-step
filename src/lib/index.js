import steps from './steps.vue';
import step from './step.vue';
import './common/css/index.css'

/* istanbul ignore next */
const install = function(Vue) {
    Vue.component(steps.name, steps);
    Vue.component(step.name, step);
}

const vueAwesomeStep = { steps, step, install }

if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(vueAwesomeStep); }


export default vueAwesomeStep

