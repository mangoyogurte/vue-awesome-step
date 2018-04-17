# vue-awesome-step

> 基于Vue.js的步骤控件，适用于PC端和移动端 Step Controls Component Based On Vue.js

## Installation
``` bash
npm i vue-awesome-step -save
```
## Usage
``` bash
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
      nowStep: 1,
    }
  }
}
</script>
```
## API

| Param        | Description    |  Type  |  Default  |
| :--------:  | :-----   | :----: | :----: |
| step-index        | The current step, The starting value is 0.      |   Number    |   -    |
| notify        | Displayed when the mouse hover      |   String    |   -    |
| icon        | Step icons     |   String    |   step-icon-check_circle    |
| simple        | Simple version     |   -    |   -    |
| direction        | Arrange direction     |   String    |   horizontal    |
