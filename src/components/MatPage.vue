<template >
    <v-container>
        <h1 class="homeHeader my-5">MATERIAS INSCRITAS</h1>

        <v-row justify="center" v-for="(materia, index) in materias" :key="index">
            <v-card elevation="4" class="rounded-xl pa-5 my-3" height="auto" width="80%">
                <v-card-title class="card-title">{{ materia.materia }}</v-card-title>
                <v-card-subtitle class="px-5 py-1 card-subtitle">Profesor : {{ materia.profesor }}</v-card-subtitle>
                <v-card-actions class="px-5 py-0 actionbox">
                    <v-spacer></v-spacer>
                    <MatDialog :obj="materia"/>
                </v-card-actions>
                

            </v-card>
        </v-row>

    </v-container>
</template>
<script>
    import MatDialog from './MatDialog.vue';
    
    export default {
        name: 'MatPage',
        data() {
            return {
                materias : [
                    {materia: 'Sistemas Eléctricos' , profesor : 'Thor', salon: "121", dias:" Lu Mi Vi", horario:"9:00 - 11:00"  },
                    {materia: 'Sistemas Eléctricomagnéticos' , profesor : 'El Bicho', salon: "221", dias:"Lu Ma ", horario:"11:00 - 13:00" },
                    {materia: 'Física I' , profesor : 'Messi', salon: "411", dias:"Lu Mi Vi", horario:"9:00 - 11:00" },
                    {materia: 'Mecánica y Aerodinámica I' , profesor : 'Sonic', salon: "211", dias:"Mi Ju", horario:"9:00 - 11:00" },
                    {materia: 'Danza I' , profesor : 'Medio Metro', salon: "312", dias:"Ju", horario:"9:00 - 11:00" },
                    {materia: 'Producción Musical I' , profesor : 'Sonido Pirata', salon: "411", dias:"Vi", horario:"9:00 - 11:00" },
                ],
                dialog: false,
            }
        },
        components:{
            MatDialog
        },
    }
</script>
<style >
    .card-title{
        color: #384FFF;
        font-weight: bold;
    }
    .card-subtitle{
        color: #9A9A9A;
        font-weight: bold;
        font-size: 1rem;
        
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
        cursor: pointer;
    }
    
</style>