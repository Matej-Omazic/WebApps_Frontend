<template>

  <div>
    <img src="@/assets/Gamepad.png" height="130px;" alt="logo" />
  <div class="container login mx-auto " style="width:500px; height:600px; border-color:gray; border-style:solid;">
 
    <form class="tekst" >
    <p class="text-center mb-2 mt-5" style="font-size:35px;">Sign in</p>
    <div style="max-width:400px;" class="mx-auto">

      <mdb-input label="Your email" type="email"/>
      <mdb-input label="Your password" type="password"/>
    </div>
    <div class="text-center">
      <router-link class="h-40 mb-4 mt-3 btn btn-info" style="width:375px;" to="/Home">Sign-in</router-link>
    </div>
    <br><br><br><br>
<h5 class="mx-auto" ><span >New to GameDB?</span></h5>

  </form>

 <router-link class="h-40 mt-4 btn btn-light" style="width:375px; " to="/Signup"> Your Account</router-link>
  </div>
  </div>


</template>

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