<template>

<div>

    <Navbar />


        <mdb-container class="mt-5">
        <mdb-card>
        <mdb-card-title class="mt-4 h2">Contact us</mdb-card-title>
        <mdb-card-body>
            <mdb-card-text
            class="pr-5 pl-5"
            mr-4
            ml-4
            >Do you have any questions? Please do not hesitate to contact us directly. Our team will get back to you within a matter of hours to help you.</mdb-card-text>
            <form class="needs-validation" novalidate @submit.prevent="add_contact">
            <mdb-row>
                <mdb-col md="8">
                <mdb-row>
                    <mdb-col>
                    <mdb-input
                        type="textarea"
                        label="Your message"
                        v-model="message"
                        required
                    />
                    </mdb-col>
                </mdb-row>
                </mdb-col>
                <mdb-col md="4">
                <mdb-row>
                    <mdb-col class="mt-4">
                    <mdb-icon icon="map-marker-alt" size="2x" />
                    <p> Pula, Croatia</p>
                    </mdb-col>
                </mdb-row>
                <mdb-row>
                    <mdb-col class="mt-4">
                    <mdb-icon icon="phone" size="2x" />
                    <p> + 099 567 6524</p>
                    </mdb-col>
                </mdb-row>
                <mdb-row>
                    <mdb-col class="mt-4">
                    <mdb-icon icon="envelope" size="2x" />
                    <p> gamedb@games.com</p>
                    </mdb-col>
                </mdb-row>
                </mdb-col>
            </mdb-row>
            <button
						type="submit"
						style="float:left;"
						class="btn btn-outline-primary comm"
						data-mdb-ripple-color="dark"
					>
						Comment
					</button>
            </form>
        </mdb-card-body>
        </mdb-card>
    </mdb-container>


    <Footer />


</div>
</template>



<script>

  import Navbar from '@/components/Layout/Navbar'
  import Footer from '@/components/Layout/Footer'
  import {  Service, Auth, Contact } from "@/services/index.js";
  import {
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol
  } from "mdbvue";

  export default {
      name: 'Contact',

    mounted () {
      window.scrollTo(0, 0)
    },
    components: {
      mdbContainer,
      mdbInput,
      mdbCard,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardBody,
      mdbCardText,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol,
      Navbar,
      Footer
    },
    data() {
      return {
          message: "",
          auth: Auth.state,

        
      };
    },
    methods: {
      submitForm(event) {
        event.target.classList.add("was-validated");
      },
      async add_contact() {
			let contact_object = {
				message: this.message,
				author: this.auth.userEmail,
			};
            let newlist = await Contact.add(contact_object);
			console.log("Spremljeni post", newlist.data);
      }
    }
  };
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>
