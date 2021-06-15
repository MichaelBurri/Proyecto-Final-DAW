<template>
  <div class="contact">
    <h3>CONTACTO</h3>

    <hr>
    <form >
      <div class="p-fluid">
        <div class="p-field p-grid">
          <label for="firstname">Nombre</label>
          <InputText id="firstname" v-model="variables.nombre" type="text" placeholder="Nombre" />
        </div>
        <div class="p-field p-grid">
          <label for="lastname">Apellidos</label>
          <InputText id="lastname" v-model="variables.apellido" type="text" placeholder="Apellidos" />
        </div>  
        <div class="p-field p-grid">
          <label for="username">Correo electrónico</label>
          <InputText id="username" v-model="variables.emailContacto" type="text" placeholder="Email"/>
        </div>      
      </div>
      <div class="p-field ">
        <label for="username"></label>
        <Textarea v-model="variables.mensaje" :autoResize="true" rows="5" cols="30" placeholder="Escriba su mensaje aquí"/>
      </div>
      <Button @click="enviarContactForm" type="button" label="Enviar" />
    </form>    
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import emailjs from 'emailjs-com';

export default {
  name: 'coContact',
  data(){
    return{
      variables:{
        emailContacto:'',
        nombre:'',
        apellido:'',
        mensaje:'',
      }
    }
  },
  components:{
    'InputText':InputText,
    'Button':Button,
    'Textarea':Textarea
  },
  methods:{

    //'service_krywjhj', 'template_gj0cuqj', <FORM></FORM>, 'user_Pm5kZaM1uVck7Gqe3QWJQ'
    enviarContactForm: function(){
      emailjs.send('service_krywjhj', 'template_gj0cuqj', this.variables, 'user_Pm5kZaM1uVck7Gqe3QWJQ').then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Mensaje enviado con éxito");
    }, function(error) {
       console.log('FAILED...', error);
       alert("No se ha podido enviar su mensaje")
    });
    this.variables.emailContacto='';
    this.variables.nombre='';
    this.variables.apellido='';
    this.variables.mensaje='';

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact{
  display: flex;
  flex-direction: column;

}
form{
  max-width: 80vw;
  margin-left: 7.5vw;
}
</style>