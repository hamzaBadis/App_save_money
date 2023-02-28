<template>
    <h2>Register</h2>
        <form>
        <div class="form-group">
            <label for="userName">User name</label>
            <input type="text" class="form-control" id="userName"  placeholder="Enter user name" v-model="userName">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button class="btn btn-primary" @click="register">Register</button>
    </form>
</template>

<script>
    import { registerUser } from '../models/userModels';
    export default{
        name : 'Register',
        data(){
            return{
                userName : "",
                password : "" 
            }
        },
        methods:{
                async register(){
                    if( await registerUser(this.userName , this.password)) this.$router.replace({ name : 'home'})
                }
        }
    }

</script>