<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-5  ">
      <div class="container-fluid  ">
          <a class="navbar-brand text-white fs-2" href="#">Control de Propinas</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav mx-5">
                  <a class="nav-link" href="#"> <router-link to="/"
                          class="list-style-none text-decoration-none fs-5 mx-2 text-white">Inicio</router-link></a>
                  <a class="nav-link" href="#"><router-link
                          class="list-style-none text-decoration-none fs-5 mx-2 text-white" to="/login"
                          v-if="show">Login</router-link></a>
                  <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
                          to="/crud" v-if="!show">Crud</router-link></a>
              </div>
          </div>
      </div>
  </nav>

  <div class="container-fluid">
      <div class="col">
          <div class="row">
              <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                  v-if="!datosclienteshow">
                  <h2 class="text-center ">Ingresar Datos del Cliente</h2>
                  <form action="" class="" @submit.prevent="agregarCliente()">
                      <div class="mx-1 mt-3">
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Nombre</label>
                              <input type="text" class="form-control" v-model="datoscliente.nombre">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Identificación</label>
                              <input type="text" class="form-control" v-model="datoscliente.identificacion">
                          </div>
                          <div class="d-flex justify-content-center">
                              <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                          </div>
                      </div>
                  </form>

              </div>
              <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                  v-if="!datosmeseroshow">
                  <h2 class="text-center ">Ingresar Datos del Mesero</h2>
                  <form action="" class="" @submit.prevent="agregarMesero()">
                      <div class="mx-1 mt-3">
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Nombre</label>
                              <input type="text" class="form-control" v-model="datosmeseros.nombre">
                          </div>
                          <div class="d-flex justify-content-center">
                              <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                          </div>
                      </div>
                  </form>

              </div>
              <div class="container-fluid bg-white w-25 border border-dark border-opacity-50 rounded"
                  v-if="!datospropinashow">
                  <h2 class="text-center ">Ingresar Datos de la Propina</h2>
                  <form action="" class="" @submit.prevent="agregardatopropina()">
                      <div class="mx-1 mt-3">
                          <div class="text-center">
                              <label for="" class="form-label fs-5">ID Mesero</label>
                              <input type="text" class="form-control" v-model="datopropinas.id_mesero">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">ID Cliente</label>
                              <input type="text" class="form-control" v-model="datopropinas.id_cliente">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Fecha</label>
                              <input type="text" class="form-control" v-model="datopropinas.fecha">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Hora</label>
                              <input type="text" class="form-control" v-model="datopropinas.hora">
                          </div>
                          <div class="text-center">
                              <label for="" class="form-label fs-5">Valor de la propina</label>
                              <input type="text" class="form-control" v-model="datopropinas.valor_propina">
                          </div>
                          <div class="d-flex justify-content-center">
                              <button class="btn btn-primary w-50 mb-5 mt-5 ">Enviar</button>
                          </div>
                      </div>
                  </form>

              </div>
          </div>
          <div class="row">
              <table class="table table-striped w-75 text-center">
                  <tr>
                      <th>id</th>
                      <th>Nombre</th>
                      <th>Identificacion</th>
                      <th>Acciones</th>

                  </tr>
                  <tr v-for="(item, index) in datocliente" :key="index">
                      <td>{{ item._id }}</td>
                      <td>{{ item.nombre }}</td>
                      <td>{{ item.identificacion }}</td>
                      <td>
                     
                          <!-- inicio cliente-->
                          <div>
                          <button type="button" class="opacity-25" disabled data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editarcliente(item._id)">
                            
                     </button>
                     <h1>Actualizar Datos</h1>
                    <form action="" class="" @submit.prevent="editarcliente(item._id)">

                        <input type="text" placeholder="Nombre" class="form-control"  v-model="datoscliente.nombre">
                        <input type="text"  placeholder="Identificacion"  class="form-control" v-model="datoscliente.identificacion">
         
                        <button class="btn btn-primary w-50 mb-5 mt-5 ">Guardar cambios</button>
                    </form>
            
                    </div>
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                      
                  
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close">
                                  
                                    </button>
                                </div>

                      
                               
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarcliente(datoscliente)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="datoscliente.nombre">

                              
                            </div>
                            
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Identificación</label>
                                <input type="text" class="form-control" v-model="datoscliente.identificacion">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                            </div>

                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Guardar cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>




                          <!-- end -->
                          <button class="btn btn-danger bg-danger" @click="eliminardatoscliente(item._id)">Eliminar</button>
                      </td>
                  </tr>
              </table>
              <table class="table table-striped w-75">
                  <tr>
                      <th>id</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                  </tr>
                  <tr v-for="(item, index) in datomesero" :key="index">
                      <td>{{ item._id }}</td>
                      <td>{{ item.nombre }}</td>
                      <td>
                          <!-- inicio mesero-->
                        
                          <div>
                              <button type="button" class="opacity-25" disabled data-bs-toggle="modal" data-bs-target="#exampleModal1" @click="editarmesero(item._id)">
                                                     
                                                   </button>

                                                   <h1>Actualizar Datos</h1>
                    <form action="" class="" @submit.prevent="editarmesero(item._id)">

                        <input  type="text" placeholder="Nombre" class="form-control"  v-model="datosmeseros.nombre">
         
                        <button class="btn btn-primary w-50 mb-5 mt-5 ">Guardar cambios</button>
                    </form>
                          </div>


                          <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarenbd(datosmeseros)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Nombre</label>
                                <input type="text" class="form-control" v-model="datosmeseros.nombre">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                            </div>
                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Guardar cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>




                          <!-- end next -->
                          <button class="btn btn-danger bg-danger" @click="eliminardatosmesero(item._id)">Eliminar</button>
                      </td>

                  </tr>
              </table>
              <table class="table table-striped w-75">
                  <tr>
                      <th>id</th>
                      <th>ID Cliente</th>
                      <th>ID Mesero</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Valor de propina</th>
                      <th>Acciones</th>

                  </tr>

                  <tr v-for="(item, index) in datopropina" :key="index">
                      <td>{{ item._id }}</td>
                      <td>{{ item.id_cliente }}</td>
                      <td>{{ item.id_mesero }}</td>
                      <td>{{ item.fecha }}</td>
                      <td>{{ item.hora }}</td>
                      <td>{{ item.valor_propina }}</td>
                      <td>
                        
                      <!-- inicio propina-->

                      <div>
                          <button type="button"  class="opacity-25" disabled  data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="editarpropina(item._id)">
                        
                                               </button>
                                               <h1>Actualizar Datos</h1>
                    <form action="" class="" @submit.prevent="editarpropina(item._id)">

                        <input  type="text" placeholder="ID Cliente" class="form-control"  v-model="datopropinas.id_cliente">
                        <input type="text"  placeholder="ID Mesero" class="form-control" v-model="datopropinas.id_mesero">
                        <input type="text"  placeholder="Fecha"  class="form-control" v-model="datopropinas.fecha">
                        <input type="text" placeholder="Hora" class="form-control" v-model="datopropinas.hora">
                        <input type="text" placeholder="Valor de la propina" class="form-control" v-model="datopropinas.valor_propina">
         
                        <button class="btn btn-primary w-50 mb-5 mt-5 ">Guardar cambios</button>
                    </form>                      

                      </div>
                          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="" class="" @submit.prevent="editarenbd(datopropinas)">
                        <div class="mx-1 mt-3">
                            <div class="text-center">
                                <label for="" class="form-label fs-5">ID Cliente</label>
                                <input type="text" class="form-control" v-model="datopropinas.id_cliente">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">ID Mesero</label>
                                <input type="text" class="form-control" v-model="datopropinas.id_mesero">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Fecha</label>
                                <input type="text" class="form-control" v-model="datopropinas.fecha">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Hora</label>
                                <input type="text" class="form-control" v-model="datopropinas.carrera">
                            </div>
                            <div class="text-center">
                                <label for="" class="form-label fs-5">Valor de propina</label>
                                <input type="text" class="form-control" v-model="datopropinas.valor_propina">
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-50 mb-5 mt-5 ">Editar</button>
                            </div>
                        </div>
                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Guardar cambios</button>
                                </div>
                            </div>
                        </div>
                    </div>




                          <!-- end next -->
                        
                         <button class="btn btn-danger bg-danger" @click="eliminardatospropina(item._id)">Eliminar</button></td>
                  </tr>

              </table>

          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
      return {
          datocliente: [],
          datomesero: [],
          datopropina: [],
          datoscliente: {
              nombre: '',
              identificacion: ''

          },
          datosmeseros: {
              nombre: ''

          },
          datopropinas: {
              id_cliente: '',
              id_mesero: '',
              fecha: '',
              hora: '',
              valor_propina: ''
          },
          datosclienteshow: false,
          datosmeseroshow: true,
          datospropinashow: true
      }
  },

  created() {
      this.mostrar()
  },

  methods: {

      mostrar() {
          axios.get('http://localhost:5000/cliente/')
              .then(resp => {
                  this.datocliente = resp.data.cliente
                  console.log(resp)
              }).catch((error)=>{console.log(error)})
          axios.get('http://localhost:5000/mesero/')
              .then(resp => {
                  this.datomesero = resp.data.mesero
                  console.log(resp)
              })
          axios.get('http://localhost:5000/propina/')
              .then(resp => {
                  this.datopropina = resp.data.propina
                  console.log(resp)
              }).catch(e=> {console.log(e)})
      },
      agregarCliente() {
          axios.post('http://localhost:5000/cliente/create', this.datoscliente)
              .then(resp => {
                  this.datocliente.push(resp.data.cliente)
              })
              .catch(e => {
                  console.log(e)
              })
              .finally(f=>{
                  this.datosclienteshow = true;
                  this.datosmeseroshow = false;
                  
                  this.datoscliente.nombre = "";
                  this.datoscliente.identificacion = ""
              })

      },
      agregarMesero() {

          axios.post('http://localhost:5000/mesero/create', this.datosmeseros)
              .then(resp => {
                  this.datomesero.push(resp.data.mesero)
              })
              .catch(e => {
                  console.log(e)
              })
          this.datosmeseroshow = true;
          this.datospropinashow = false;
      },
      agregardatopropina() {

          axios.post('http://localhost:5000/propina/create', this.datopropinas)
              .then(resp => {
                  this.datopropina.push(resp.data.propina)
              })
              .catch(e => {
                  console.log(e)
              })
              .finally(f=>{
                  this.datosclienteshow = false;
                  this.datospropinashow = true;
                  
                  this.datopropina.id_cliente = "";
                  this.datopropina.id_mesero = ""
                  this.datopropina.fecha = ""
                  this.datopropina.hora = ""
                  this.datopropina.valor_propina = ""
              })
     
      },
      eliminardatoscliente(_id){
          axios.delete(`http://localhost:5000/cliente/${ _id }`)
          .then(resp =>{
              const index = this.datocliente.findIndex(item => item._id === resp.data._id);
              this.datocliente.splice(index, 1)
          })
      },
      eliminardatosmesero(_id){
          axios.delete(`http://localhost:5000/mesero/${ _id }`)
          .then(resp =>{
              const index = this.datomesero.findIndex(item => item._id === resp.data._id);
              this.datomeserp.splice(index, 1)
          })
      },
      eliminardatospropina(_id){
          axios.delete(`http://localhost:5000/propina/${ _id }`)
          .then(resp =>{
              const index = this.datopropinafindIndex(item => item._id === resp.data._id);
              this.datopropina.splice(index, 1)
          })
      },
      editarcliente(_id){
        axios.put(`http://localhost:5000/cliente/${_id}`, this.datoscliente)
         .then(resp => {
          
                 console.log(resp)
            }).catch((error)=>{console.log(error)})



        },
       editarmesero(_id){
            axios.put(`http://localhost:5000/mesero/${_id}`,  this.datosmeseros)
            .then(resp => {
          
          console.log(resp)
     }).catch((error)=>{console.log(error)})

 },
       editarpropina(_id){
            axios.put(`http://localhost:5000/propina/${_id}`,  this.datopropinas)
            .then(resp => {
          
          console.log(resp)
     }).catch((error)=>{console.log(error)})

 },
  }
}
</script>

<style  scoped>
table { 
width: 750px; 
border-collapse: collapse; 
margin:50px auto;
}

/* Zebra striping */
tr:nth-of-type(odd) { 
background: #eee; 
}

th { 
background: #000000; 
color: white; 
font-weight: bold; 
}

td, th { 
padding: 10px; 
border: 1px solid #ccc; 
text-align: left; 
font-size: 18px;
}

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

table { 
    width: 100%; 
}

/* Force table to not be like tables anymore */
table, thead, tbody, th, td, tr { 
  display: block; 
}

/* Hide table headers (but not display: none;, for accessibility) */
thead tr { 
  position: absolute;
  top: -9999px;
  left: -9999px;
}

tr { border: 1px solid #ccc; }

td { 
  /* Behave  like a "row" */
  border: none;
  border-bottom: 1px solid #eee; 
  position: relative;
  padding-left: 50%; 
}

td:before { 
  /* Now like a table header */
  position: absolute;
  /* Top/left values mimic padding */
  top: 6px;
  left: 6px;
  width: 45%; 
  padding-right: 10px; 
  white-space: nowrap;
  /* Label the data */
  content: attr(data-column);

  color: #000;
  font-weight: bold;
}

}
</style>