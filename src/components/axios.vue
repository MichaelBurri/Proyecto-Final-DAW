
<template>
    <div>
        <h1>axios</h1>
        <button @click="request">aqui: {{info}}</button>
        <button @click="request2">ALLA: {{info}}</button>
    </div>
</template>
<script lang="js">
import {db} from '../db.js';
import Firebase from '../db.js';
export default {
    data () {
    return {
      info: 'meh',
      datosPersonales:{
            first: "First",
            last: "último",
            born: 2015
      }
    }
  },
    methods: {
      request: function () {
        Firebase.crearColeccion("nanananana","Batman",this.datosPersonales)
      },
      request2: function () {
        var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
db.collection("data").doc("one").set(docData).then(() => {
    console.log("Document successfully written!");
});
      }
    } 
    

}
</script>


<style>

</style>