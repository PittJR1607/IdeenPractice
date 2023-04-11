<template>
    <v-app-bar v-if="log" elevation="0" color="#384FFF" dense max-height="50px">
        <v-img class="logotec" src="../assets/logoTec.png" alt="LogoTec"></v-img>
        <v-spacer></v-spacer>
        <router-link to="/user/home" class="mainlinks">INICIO</router-link> 
        <router-link to="/user/materias" class="mainlinks"> LISTA DE MATERIAS</router-link>
        <div class="mx-1">
            <v-img src="../assets/logout-variant.svg" width="30" height="30" class="logo-icon" @click="Logout"></v-img>
        </div>
    </v-app-bar>

    <v-app-bar v-else elevation="0" color="#384FFF" dense max-height="50px">
        <v-img class="logotec" src="../assets/logoTec.png" alt="LogoTec"></v-img>
        <v-spacer></v-spacer>
        <router-link to="/login" class="mainlinks">INICIAR SESIÓN</router-link> 
        <router-link to="/signup" class="mainlinks"> REGISTRARSE</router-link>
    </v-app-bar> 
</template>
<script>
    export default {
        inject:['log'],
        name: 'topNavBar',
        methods:{
            Logout(){
                this.$emit('Logout')
            }
        }

    }
</script>
<style>
    .logotec{
        max-width: 170px;
        padding: 0;
        margin: 0;
    }

    .mainlinks{
        color: white !important;
        text-decoration: none;
        font-weight: 600;
        padding-right: 2rem;
        padding-left: 1rem;
        font-size: 85%;
        letter-spacing: 0.5px;
        
    }

    .logo-icon{
        filter: invert(100%);
        cursor: pointer;
    }


</style>