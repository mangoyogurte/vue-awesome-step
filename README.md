# vue-awesome-step

> 基于Vue.js的步骤控件，适用于PC端和移动端 Step Controls Component Based On Vue.js

## Installation

npm i vue-awesome-step -save

## Usage

# example
import vueAwesomeStep from './lib/index.js'
Vue.use(vueAwesomeStep)

<template>
  <div id="app">
    <steps :step-index="nowStep">
      <step title="xxx" notify="xxx"></step>
      <step title="xxx" icon="step-icon-thumb_down"></step>
      <step title="xxx"></step>
    </steps>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nowStep: 2,
    }
  }
}
</script>

## API
