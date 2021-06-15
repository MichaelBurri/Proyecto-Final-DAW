<template>
    <div class="pagos" >
        <h1>PAGOS</h1>
        <div class="detalle">
            <h3>Detalles del pago</h3>
            <div v-if="plan==1">
                <p>{{planBas.co1}}</p>
                <p>{{planBas.co2}}</p>
                <hr>
                <p>{{planBas.co3}}</p>
            </div>
            <div v-if="plan==2">
                <p>{{planAvan.co1}}</p>
                <p>{{planAvan.co2}}</p>
                <hr>
                <p>{{planAvan.co3}}</p>
            </div>
            <router-link to="/builder">
            <Button v-if="plan==1" @click="pagarBasico">Pagar</Button>
            <Button v-if="plan==2" @click="pagarAvanzado">Pagar</Button></router-link>
        </div>
        
    </div>
</template>
<script>
import {db} from'../db.js';
import Firebase from '../db.js';
import Button from 'primevue/button';


export default {
    name:'pagos',
    props: {
        plan: String
    },
    mounted:function() {
    Firebase.auth.onAuthStateChanged( user => {
      if (user) {
        this.user.email=user.email
        this.bajar(user.email,'datos')
      }
    }) 
    },
    components:{
        'Button':Button
    },
    data(){
        return{
            coleccion:{},
            user: {
                email:''
            },
            planBas:               
                {co1:'Plan básico ............ 8.22€/mes',
                 co2:'IVA incluido............ 9.95€/mes',
                 co3:'Total................... 9.95€/mes'
                },
            planAvan:
                {co1:'Plan avanzado ............ 20.62€/mes',
                 co2:'IVA incluido.............. 24.95€/mes',
                 co3:'Total..................... 24.95€/mes'
                }
            
        }
    },
    methods:{
        pagarBasico(){
            this.coleccion.Datos.pagado=true;
            this.coleccion.Datos.plan='1'
            console.log('Pago basico')
            this.subir();
        },
        pagarAvanzado(){
            this.coleccion.Datos.pagado=true;
            this.coleccion.Datos.plan='2'
            console.log('Pago avanzado')
            this.subir();
            
        },
        bajar(coleccion,documento){
          var docRef=db.collection(coleccion).doc(documento);
          docRef.get().then((doc) => {
            if (doc.exists) {
              console.log("Datos pago:", doc.data().Datos);
              //carga los datos de la colección en la variable this.coleccion
              this.coleccion=doc.data();
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
            setTimeout(function () {
                window.location.reload()
                    console.log("done");
            }, 2000);
            
        }
    } 
}
</script>
<style scoped>
    .pagos{
        font-size: 1.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: 1rem;
        margin-right: 1rem;
    }
    .detalle{
        line-height: 5 px;
        padding: 50px;
        border: ridge;
    }
</style>