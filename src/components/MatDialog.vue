<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn right plain class="card-link white" elevation="0" density="comfortable" size="x-small" v-bind="attrs" v-on="on">Ver Detalles</v-btn>
            </template>
            <v-card>
                <v-card-title class="card-title">
                    {{ this.obj.materia }}
                </v-card-title>

                <v-card-text class="card-subtitle">Profesor : {{ this.obj.profesor }}</v-card-text>
                <v-card-text class="card-subtitle">Salón : {{ this.obj.salon }}</v-card-text>
                <v-card-text class="card-subtitle">Días : {{ this.obj.dias }}</v-card-text>
                <v-card-text class="card-subtitle">Horario : {{ this.obj.horario }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        class="card-link"
                        text
                        @click="dialog = false"
                    >
                        Cerrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        props:{
            obj:{
                profesor: String,
                salon: String,
                dias: String,
                horario: String,
                materia: String
            }
        },
        name: 'MatDialog',
        data () {
            return {
                dialog: false,
            }
        },
    }
</script>

<style>
    .cardtitle{
        color: #384FFF !important;
        font-size: 2rem !important;
        font-weight: bold !important;

    }
    .card-subtitle{
        color: #9A9A9A !important;
        font-weight: bold !important;
        text-align: start !important;
        font-size: 1rem !important;
    }
    .card-link{
        text-decoration: none !important;
        color: #384FFF !important;
        font-weight: bold !important;
        text-transform: none !important;
        font-size: 1rem !important;
        letter-spacing: 0 !important;
        
    }
    .card-link:hover{
        cursor: pointer !important;
    }
</style>