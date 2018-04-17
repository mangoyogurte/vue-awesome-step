<template>
  <div class="step-wrapper" :class="[!simple && 'step-' + direction,simple && 'step-simple']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'steps',
    data() {
      return {
        steps: []
      };
    },
    props: {
      stepIndex: {
        type: Number
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      simple: Boolean
    }
  }
</script>

<style>
  .step-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .step-wrapper.step-vertical{
    flex-direction: column;
    height: 160px;
  }
</style>
