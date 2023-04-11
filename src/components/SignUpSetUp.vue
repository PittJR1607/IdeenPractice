<template >
    <v-container text-xs-center>
        <h1 class="homeHeader my-5">CREA UNA CUENTA</h1>
        <v-row justify="center" dense>
            <v-col cols="12" md="5" no-gutters>
                <v-form v-model="valid" >
                    <v-text-field
                        v-model="nombre"
                        :rules="rules.required"
                        label="Nombre Completo"
                        style="border-radius:8px;"
                        @change="value => this.user.nombre=value"
                        outlined
                        dense
                        class="ma-0"
                    ></v-text-field>
                
                    <v-text-field
                        v-model="matricula"
                        :rules="nameRules"
                        label="Matrícula"
                        style="border-radius:8px;"
                        @change="value => this.user.matricula=value"
                        outlined
                        dense
                        required
                        class="ma-0"
                    ></v-text-field>
                
                    <v-text-field
                        v-model="correoins"
                        :rules="[rules.required, rules.email]"
                        label="Correo Institucional"
                        outlined
                        style="border-radius:8px;"
                        @change="value => this.user.correoins=value"
                        dense
                        required
                        class="ma-0"
                    ></v-text-field>
                
                    <v-text-field
                        v-model="correoper"
                        :rules="[rules.required, rules.email]"
                        label="Correo Personal"
                        outlined
                        @change="value => this.user.correoper=value"
                        style="border-radius:8px;"
                        dense
                        class="ma-0"
                    ></v-text-field>
                
                    <v-text-field
                        v-model="password"
                        :rules="[rules.required]"
                        label="Contraseña"
                        outlined
                        style="border-radius:8px;"
                        @change="value => this.user.password=value"
                        dense
                        class="ma-0"
                    ></v-text-field>
                
                    <v-text-field
                        v-model="passwordtwo"
                        :rules="[rules.required]"
                        label="Confirmar Contraseña"
                        outlined
                        style="border-radius:8px;"
                        @change="value => this.user.passwordtwo=value"
                        dense
                        class="ma-0"
                    ></v-text-field>

                    <v-checkbox v-model="terminos" justify="center">
                        <template v-slot:label>
                            <div>
                                Acepto Términos y Condiciones
                            </div>
                        </template>
                    </v-checkbox>

                    <v-btn class="login-button" block dense @click="signUp">Registrarse</v-btn>
                    
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
    import { db } from '../main'
    import { doc, setDoc } from 'firebase/firestore'

    export default {
        name:'SignUpSetUp',
        data () {
            return {
            succeed: false,
            error: false,
            terminos: false,
            msg:'',
            email: '',
            user:{
                userID: null,
                nombre: '',
                matricula: '',
                correoins: '',
                correoper: '',
                password: '',
                passwordtwo: '',

            },
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
            async signUp(){
                if( this.user.nombre === '' ||
                this.user.correoins === '' ||
                this.user.correoper === '' ||
                this.user.password === '' ||
                this.user.passwordtwo === '' ||
                this.user.matricula === '' ||
                !this.terminos
                ){
                    this.error= true
                    this.msg = 'Debe Llenar todos los Campos'
                    setTimeout(() => {
                        this.error = false
                        this.msg = ''
                    }, [3000])

                    return
                }
                const auth = getAuth()
                await createUserWithEmailAndPassword(auth, this.user.correoins, this.user.password)
                    .then( userCredential => {
                        console.log(userCredential.user)
                        this.user.userID = userCredential.user.uid
                    })
                    .catch(e => console.log(e))
                    try{
                        await setDoc( doc(db,'users', this.user.userID),{
                            nombre: this.user.nombre,
                            correoInstitucional: this.user.correoins,
                            correoPersonal: this.user.correoper,
                            matricula: this.user.matricula
                        })
                        this.succeed= true,
                        this.msg="Usuario Registrado Correctamente"
                        setTimeout(()=>{
                            this.succeed = false,
                            this.msg = ''
                        }, [3000])
                    }
                    catch(e){   
                        console.log(e)
                    }
            }
        }
    }
</script>
<style >
    
</style>