<template>
  <div id="app">
    <coHeader/>  
    <div>
      <router-view></router-view>
    </div>
    <coFooter/>
  </div>
  
</template>

<script>
import coHeader from './components/coHeader.vue';
import coFooter from './components/coFooter.vue';

export default {
  name: 'App',  
  components: {    
    coHeader,
    coFooter
  }
}
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightblue;
  padding: 60px;
  padding-left: 3%;
  padding-right: 3%;  
  min-height: 100vh;
}
</style>
