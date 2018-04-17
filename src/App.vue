<template>
  <div id="app">
    <steps :stepIndex="1">
      <step title="企业息" notify="啊啊啊啊啊啊啊啊啊啊啊啊啊"></step>
      <step title="法人2313息" icon="icon-thumb_down"></step>
      <step title="授权人信息" icon="icon-thumb_down"></step>
    </steps>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
