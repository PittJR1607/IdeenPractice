<template>
    <v-container text-xs-center class="inputs-container" justify="center">
        <h1 class="homeHeader mt-5 mb-8">INICIO DE SESIÓN</h1>
        <v-row justify="center" dense>
            <v-col cols="12" md="5" no-gutters>
                <v-form v-model="valid">
                    <v-text-field
                        v-model="correoins"
                        :rules="[rules.required, rules.email]"
                        label="Correo Insitucional"
                        style="border-radius:8px;"
                        @change="value => this.correoins=value"
                        outlined
                        dense
                    ></v-text-field>
                
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]"
                        :type="show1 ? 'text' : 'password'"
                        label="Contraseña"
                        @click:append="show1 = !show1"

                        @change="value => this.password=value"
                        outlined
                        dense
                        style="border-radius:8px;"
                    ></v-text-field>
                
                    <v-btn class="login-button" block dense @click="logIn">Iniciar Sesión</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { db } from '../main'
import { doc, getDoc } from 'firebase/firestore'

export default {
    name: 'LoginSetUp',

    data () {
        return {
            userID : null,
            correoins: '',
            password : '',
            error: false,
            show1: false,
            show2: true,      
            rules: {
                required: value => !!value || 'Requerido.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'E-mail no válido.'
                },
            },
    
        }
    },
    methods:{
        async logIn(){
            if( this.correoins === '' || this.password === ''){
                this.error= true
                setTimeout(() => {
                    this.error = false
                }, [3000]) 

                return
            }
            const auth = getAuth()
            await signInWithEmailAndPassword(auth, this.correoins, this.password)
            .then(userCredential => {
                // Signed in
                this.userID= userCredential.user.uid;
                // ...
            })
            .catch(()=>{
                this.error=true
            })
            const data = doc(db, "users", this.userID)
            const response = await getDoc(data)
            

            if (response.exists() ){
                const datosUsuario = response.data()
                console.log("LoggedIN")
                console.log("Datos Mandados:", datosUsuario)
                this.$emit("userIn",datosUsuario)
                this.$router.push("/user/home")
            }
        }
    }
    
    
}
</script>

<style >
    .inputs-container{
        margin-top: 6rem;
    }

    .login-button{
        background-color: #384FFF !important;
        color: #FFFFFF !important;
        text-transform: none !important;
        font-weight: bold !important;
        letter-spacing: normal !important;
        border-radius: 8px;

    }
    .border-form{
        border-color: #384FFF !important;
    }
</style>