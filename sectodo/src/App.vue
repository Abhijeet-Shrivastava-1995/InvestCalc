<template>
  <div>
     <!-- <img src="./assets/pic.png" style="height:200px">
    <task></task>
    
    -->
    <invest></invest>
  </div>
</template>

<script>
// import task from './components/task'
import invest from './components/invest'

export default {
  name: 'app',
  components: {
    // task
    invest
  }
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
</style>
