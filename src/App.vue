<template>
  <v-app>
    <topNavBar @Logout = "getBadState"/>
    
    <router-view @userIn ="getGoodState"></router-view>
  </v-app>
</template>

<script>
  import topNavBar from '@/components/TopNavBar.vue'
  import { computed } from 'vue'

  export default{
    name: 'App',
    components:{
      topNavBar,
    },

    data(){
      return{
        log : false,
        user:{}
      }
    },

    provide(){
      return{
        log : computed(() => this.log),
        user : computed(() => this.user),
      }
      

    },
    
    methods:{
      getGoodState(data){
        this.log = true,
        this.user = data
        console.log("GoodState")
      },
      getBadState(){
        this.log = false,
        this.$router.push('/login')
        console.log("LOGUT")
      }
    }
    
    
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
