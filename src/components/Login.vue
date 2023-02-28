<template>
    <div class="container form-container">
        <div> <h1>Login </h1> </div>
        <form>
            <div class="form-group">
                <label for="userName">User name</label>
                <input type="text" class="form-control" id="userName"  placeholder="Enter user name" v-model="userName">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            <div class="form-group">
                <button class="btn" @click="checkUser">login</button> 
            </div>
            <div class="forme-group">
                <router-link  tag="div" :to="{ path : '/register'}"><button class="btn">register</button></router-link>
            </div>
        </form>

    </div>
</template>
<script> 
    import { loginUser } from '../models/userModels'
    export default{
        name : 'Login',
        data(){
            return {
                userName :"",
                password :""
            }
        },
        methods:{
            async checkUser(){
                if( await loginUser(this.userName, this.password)) this.$router.replace({ name : 'home'})
            }
        }
    }

</script>
<style scoped>

</style>