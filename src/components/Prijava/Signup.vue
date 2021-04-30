<template>

  <div>
    <img src="@/assets/Gamepad.png" height="130px;" alt="logo" />
  <div class="container login mx-auto " style="width:500px; height:600px; border-color:gray; border-style:solid;">
 
    <form class="tekst" >
    <p class="text-center mb-2 mt-5" style="font-size:35px;">Create account</p>
    <div style="max-width:400px;" class="mx-auto">

      <mdb-input label="Username" type="text"/>
      <mdb-input label="Email" type="email"/>
      <mdb-input label="Pasword" type="password"/>
    </div>
    <div class="text-center">
      <router-link class="h-40 mt-3 btn btn-info" style="width:375px; " to="/home">Create your account</router-link>
    </div>
    <br><br><br>
<h5 class="mx-auto" ><span >Already have an account?</span></h5>

  </form>

 <router-link class="h-40 mt-4 btn btn-light" style="width:375px; " to="/"> Sign-in</router-link>
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