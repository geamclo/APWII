<template>
    <nav class="navbar navbar-expand-lg bg-success mb-5  ">
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
            <a class="nav-link" href="#"><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
                to="/login" v-if="visibilidad">Login</router-link></a>
            <a class="nav-link "><router-link class="list-style-none text-decoration-none fs-5 mx-2 text-white"
                to="/crud" v-if="visibilidad">Crud</router-link></a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Inicio de sesión</h3>
                        <form @submit.prevent="ingresar()">
                            <div class="form-group mb-4">
                                <label for="text">Usuario</label>
                                <input required type="text" class="form-control" id="text" v-model="usuario.nombre">
                            </div>
                            <div class="form-group mb-4">
                                <label for="password">Contraseña</label>
                                <input required type="text" class="form-control" id="password" v-model="usuario.password">
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="rememberMe">
                                <label class="form-check-label" for="rememberMe">Recuérdame</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block mt-4">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>

<script>
import router from '@/router';
import axios from 'axios';
    export default {
    name: "Login",
    data() {
        return {
            visibilidad: false,
            usuarios:[],
            usuario:{
                nombre:'',
                password:''
            }
        }
    },
    methods: {
        ingresar(){
        axios.post('http://localhost:3000/api/usuario', this.usuario)
        .then(resp =>{
            this.usuarios.push(resp.data)
        })
        .catch(e =>{
            console.log(e)
        })
        .finally(f=>{
            this.visibilidad= true
            router.push('/crud')
        })
    }
    }
  };    
  
  
</script>

<style scoped>

</style>