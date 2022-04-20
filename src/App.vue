<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button v-on:click="goHome()">
    Home
  </button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { useSocketIo} from "./service/socket.js";
export default {
  data() {
    return {
      socket : null
    }
  },

  mounted() {
    this.socket = useSocketIo();
    //this.socket.emit("connect2");
    console.log("mounted");
    this.socket.on('my_response', msg => {
      console.log(msg);
      console.log("msg");
    })
  },

  methods: {
    goHome(){
      console.log(this.socket);
      this.socket.emit("my_event", { data : 'value'});
    }
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
  margin-top: 60px;
}
</style>
