<template>
  <Navigation />
  <router-view :key="$route.path"></router-view>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
}
}
</script>

<style>
  .btn{
      background-color : rgba(19, 97, 9, 0.61);
      font-weight : bold;
      color :  rgba(13, 13, 13, 0.8);
      letter-spacing: 0.05em;
      border-color : rgba(0, 0, 0, 0.1);
      border-radius : 1 em;
      width : 10ch;
  }
    .form-container{
        display : flex;
        justify-content : center;
        flex-direction : column;
        align-items : center;
        border: solid 1px rgba(78, 157, 225, 0.61);
        box-shadow: 0 4px 8px 0 rgba(78, 157, 225, 0.61), 0 6px 20px 0 rgba(78, 157, 225, 0.61);
        border-radius: 1em;
        width : 23em;
        height : 60vh;
        margin-top : 4vh;
    }
    form{
        display : flex;
        justify-content : center;
        flex-direction : column;
        align-items : center;
    }
    .form-group{
      margin : 0.5vh;
    }
</style>

