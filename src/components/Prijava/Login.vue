<template>

  <div>
    
    <img src="@/assets/Gamepad.png" style="float:center" />
    
  <div class="container login mx-auto " style="width:500px; height:600px; border-color:gray; border-style:solid;">
 
    <form @submit.prevent="login" class="tekst" >
    <p class="text-center mb-2 mt-5" style="font-size:35px;">Sign in</p>
    <div style="max-width:400px;" class="mx-auto">

      <mdb-input label="Your email" v-model="email" type="email"/>
      <mdb-input label="Your password" v-model="password" type="password"/>
    </div>
    <div class="text-center">
     <button class="h-40 mb-4 mt-3 btn btn-info" type="submit" style="width:375px;" >Sign-in</button>
    </div>
    <br><br><br><br>
<h5 class="mx-auto" ><span >New to GameDB?</span></h5>

  </form>

 <button class="h-40 mt-4 btn btn-light" style="width:375px;"> Create your account</button>
  </div>
  </div>


</template>
<script>
import {Auth} from "@/services"

export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    async login(){
      try{
       let succes = await Auth.login(this.email, this.password)
        console.log('Rezultat prijave', succes)
        if (succes == true) {
         this.$router.replace({ name: 'Home' })
        }
      } catch (e){
        console.log(e)
      }
        
    },
    
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