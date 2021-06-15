<template>
    <div >             
        <!-- Si no está logueado, enlace a login -->
        <!-- 'Solo puedes acceder a este contenido si estás logueado, crea tu cuenta o inicia sesión aquí -->
        <div v-if="!user.loggedIn">
            <h2>¡Vaya! Parece que no has iniciado sesión.</h2>  
            <hr>
            <h2>Este contenido sólo está disponible para usuarios registrados.</h2>
            <h3> Puedes iniciar sesión o registrarte si no tienes una cuenta pulsando  <router-link to="/login"><u>aqui</u></router-link> </h3>      
        </div>

        <!-- Si está logueado, pero no ha seleccionado ningún plan, aparecen los planes disponibles -->
        <div v-if="user.loggedIn&&!user.paid" >
            <!-- <h1> {{coleccion.Basico.titulo}}</h1>
            <input type="text" v-model="coleccion.Basico.titulo"> -->
            <coPlanes/>
        </div>

        <!-- Si está logueado y además ha seleccionado y pagado un plan aparece la plantilla del plan elegido -->
        <div v-if="user.loggedIn&&user.paid">
            <h1>CONSTRUCTOR</h1>   
            <p> 
            <Button @click="editar">MODO EDITAR</Button>           
            <Button @click="subir">Guardar cambios</Button>
            </p>
            <div v-if="plan==1">
                <h2>PLAN BÁSICO</h2>
                <basicHome :coleccion=coleccion :edicion=edit />
            </div>
            <div v-if="plan==2">
                <TabMenu :model="numPaginas" />
                <div v-if="pagina==1">
                    <avanHome />
                </div>
                <div v-if="pagina==2">
                    <avanProducto />
                </div>
                <div v-if="pagina==3">
                    <avanAboutUs />
                </div>

            </div>
            
            
        </div>
        <br><br><br><br>
        <hr>
        <!-- Controles de debugging -->
        <div>
            <h3>Controles para profesores que no quieren registrarse o dar sus datos de pago (Interfiere con el funcionamiento habitual de la app)</h3>
            <Button @click="show">{{mensaje}}</Button>
            <br>
            <br>
            <div v-if="visible">
                <Button @click="isLoggedIn">{{loguear}}</Button>
                <Button @click="isPaid">{{pagar}}</Button>
                <Button @click="selectPlan">{{cambiarplan}}</Button>
                <Button @click="selectPage">{{cambiarpagina}}</Button>
            </div>
        </div>
        
    </div>
    
</template>
<script>
import basicHome from '@/components/Basico/basicHome.vue';
import avanHome from '@/components/Avanzado/avanHome.vue';
import avanProducto from '@/components/Avanzado/avanProducto.vue';
import avanAboutUs from '@/components/Avanzado/avanAboutUs.vue';
import coPlanes from '@/components/coPlanes.vue';

import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';

import {db} from'../db.js';
import Firebase from '../db.js';

export default {
    name:'coBuilder',
    data(){
        return{
            user: {
                loggedIn: false,
                paid:false,
                data: {},
                email:''
            },
            visible:false,
            edit: false,
            mensaje:'MOSTRAR CONTROLES',            
            plan:'',
            pagina:'1',
            coleccion:{},
            loguear:'Log in', pagar:'Pagar', cambiarplan:'Cambiar plan', cambiarpagina:'Cambiar página' ,
            numPaginas:[{label:'Página 1',command: ()=>{this.pagina=1}},{label:'Página 2',command: ()=>{this.pagina=2}},{label:'Página 3',command: ()=>{this.pagina=3}}]           
        }
    },
    mounted: function() {
    Firebase.auth.onAuthStateChanged( user => {
      if (user) {
        //establecer que el usuario está logueado y determinar su email
        this.user.loggedIn = true;
        this.user.data = user;
        this.user.email=user.email;
        this.loguear='Log out';
        //cargar la colección del usuario
        this.bajar(user.email,'datos')
      }
      else {
        this.user.loggedIn = false;
        this.user.data = {};
        this.loguear='Log in';
      }
    })
    

    },
    components:{
        basicHome,
        avanAboutUs,
        avanHome,
        avanProducto,
        coPlanes,
        'Button':Button,
        TabMenu
    },
    methods:{
        show(){
            this.visible=!this.visible;
            if(!this.visible){
                this.mensaje='MOSTRAR CONTROLES'
            }else{
                this.mensaje='OCULTAR CONTROLES'
            }
        },
        isLoggedIn(){
            this.user.loggedIn=!this.user.loggedIn;
            if (this.user.loggedIn) {
                this.loguear='Log out'
            }else{
                this.loguear='Log in'
            }
            return this.user.loggedIn;
        },
        isPaid(){
            this.user.paid=!this.user.paid;
            this.coleccion.Datos.pagado=this.user.paid;
            this.subir();
            return this.user.paid;
        },
        selectPlan(){
            if (this.plan==1) {
                this.plan=2
            }
            else {
                this.plan=1
            }
            return this.plan;
        },
        selectPage(){
            if (this.pagina==1) {
                this.pagina=2
            }else if(this.pagina==2){
                this.pagina=3
            }
            else{
                this.pagina=1
            }
            return this.pagina;
        },
        bajar(coleccion,documento){
          var docRef=db.collection(coleccion).doc(documento);
          docRef.get().then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              //carga los datos de la colección en la variable this.coleccion, y comprueba si ha pagado y qué plan ha seleccionado
              this.coleccion=doc.data();
              this.user.paid=doc.data().Datos.pagado
              this.plan=doc.data().Datos.plan
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
            }).catch((error) => {
            console.log("Error getting document:", error);
        });
        },
        subir(){
            Firebase.crearColeccion(this.user.email,'datos',this.coleccion)
        },
        editar(){
            this.edit=!this.edit;
        }
    }
}
</script>

<style scoped>
Button{
    margin: 7px;
}
</style>