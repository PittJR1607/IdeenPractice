<template>
  <v-container class="maintable text-md-left text-center">
      <v-row dense justify="end">
        <v-col>
          <h1 class="homeHeader my-2 text-center">INFORMACIÓN DEL ALUMNO</h1>
        </v-col>
      </v-row >
      <v-row  dense justify="center">
          <v-avatar class="my-3" size="200" >
            <v-img src="../assets/juan-escutia2.jpeg"></v-img>
          </v-avatar>
      </v-row>

    <v-row dense justify="end" md="4">
      <v-col cols="12" md="5" >
        <p class="mainTableHead"> Nombre Completo </p>
        <p class="mainTableData">{{ Nombre }}</p>
      </v-col>
      <v-col cols="12" md="4" >
        <p class="mainTableHead"> Matrícula </p>
        <p class="mainTableData">{{ Matricula }}</p>
      </v-col>
    </v-row>

    <v-row dense justify="end">
      <v-col cols="12" md="5">
        <p class="mainTableHead"> Correo Institucional </p>
        <p class="mainTableData">{{ InstMail }}</p>
      </v-col>
      <v-col cols="12" md="4">
        <p class="mainTableHead">Carrera </p>
        <p class="mainTableData">{{ Carrera }}</p>
      </v-col>
    </v-row>

    <v-row dense justify="end">
      <v-col cols="12" md="9">
        <p class="mainTableHead">Correo Personal </p>
        <p class="mainTableData">{{ PersonalMail }}</p>
      </v-col>
      
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'StartPage',
    data() {
      return {
        Nombre : 'Juan Escutia',
        Matricula: 'A01361234',
        InstMail: 'A01361234@tec.mx',
        Carrera: 'ITC',
        PersonalMail: 'porlapatria@mex.com'
      }
    },
  }
</script>

<style>
  .homeHeader{
    font-size: 2rem;
    color: #384FFF; 
  }

  .mainTableHead{
    color: #384FFF;
    font-weight: bolder;
    font-size: 1.2rem;
  
  }

  .mainTableData{
    color: #9a9a9a;
    font-weight: bold;
    font-size: 1.2rem;
    
  }

  .maintable{
    width: 80%;
  }
</style>
