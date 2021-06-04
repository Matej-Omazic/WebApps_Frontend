<template>

  <div>
    <img src="@/assets/Gamepad.png"  alt="logo" style="float:center" />
  <div class="container login mx-auto " style="width:500px; height:600px; border-color:gray; border-style:solid;">
 
   <form novalidate @submit.prevent="register">
    <p class="text-center mb-2 mt-5" style="font-size:35px;">Create account</p>
    <div style="max-width:400px;" class="mx-auto">

       <mdb-input label="Username" v-model="username" type="text"/>
      <mdb-input label="Email" v-model="email" type="email"/>
      <mdb-input label="Pasword" v-model="password" type="password"/>
    </div>
    <div class="text-center">
      <button class="h-40 mt-3 btn btn-info" style="width:375px;" type="submit" >Create your account</button>
    </div>
    <br><br><br>
<h5 class="mx-auto" ><span >Already have an account?</span></h5>

  </form>

 <router-link class="h-40 mt-4 btn btn-light" style="width:375px; " to="/"> Sign-in</router-link>
  </div>
  </div>


</template>

<script>
import { Auth } from '@/services'

export default {
  name:'Signup',
  data(){
    return{
      email:'',
      username:'',
      password:''
    }
  },
  methods:{
    async register(){
      let succes = await Auth.register(
          this.email,
          this.username,
          this.password
        )
        console.log('Rezultat registracije', succes)
        this.$router.push({ name: 'Login' })
    }
  }
}

</script>

<style scoped>

h5 {
   width: 76%; 
   text-align: center; 
   border-bottom: 1px solid gray; 
   line-height: 0.05em;

} 

h5 span { 
    background:#fff; 
    padding:0 10px; 
}

</style>