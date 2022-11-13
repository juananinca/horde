<script lang="ts">
import { defineComponent } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Creature } from '../models/Creature'
import { horde } from '../models/Horde'

export default defineComponent({
  data() {
    return {
      message: '',
      beastOptions: horde,
      beastOptionsValue: new Creature("", []),
      groupDamage: "",
      numberOfCreatures: "",
      enemyCa: 10,
      uuid: uuidv4(),
      numberOfCreaturesOptions: [1, 2, 3, 4, 5, 6, 7, 8],
      enemyCA: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ]
    }
  },
  methods: {
    rollGroup() {
      if (!this.numberOfCreatures) {
        alert("Alguno de los campos obligatorios esta vacio!!")
        return
      }
      console.log(`---------Group ${this.uuid}----------------------`)
      let numberOfCreaturesNumber : number = +this.numberOfCreatures
      let enemyCaNumber : number = +this.enemyCa
      let totalDamage : number = 0
      for (let index = 0; index < numberOfCreaturesNumber; index++) {
        totalDamage += this.beastOptionsValue.attack(enemyCaNumber)  
      }
      this.groupDamage = totalDamage.toString()
    }
  }
})
</script>
<template>
  <div>
    <b-card bg-variant="light">
      <b-form-row>
        <b-col><b-form-select
          id="horde-group-beast-selector"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="beastOptionsValue">
            <option :value="null" disabled>-- Please select an option --</option>
            <option v-for="option in beastOptions" :value="option">
              {{ option.name }}
            </option>
          </b-form-select></b-col>
      </b-form-row>
      <b-form-row>
        <!-- <b-col><b-form-input v-model="numberOfCreatures" placeholder="Numero de criaturas" /></b-col> -->
        <b-col><b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="numberOfCreatures" :options="[1, 2, 3, 4, 5, 6, 7, 8]"></b-form-select></b-col>
        <b-col><b-form-input v-model="enemyCa" placeholder="CA del enemigo" pattern="\d*"/></b-col>
        <!-- <b-col><b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="enemyCa" :options="[1, 2, 3, 4, 5, 6, 7, 8]"></b-form-select></b-col> -->
      </b-form-row>
      <hr/>
      <b-form-row>
        <b-col><b-button @click="rollGroup">Roll!</b-button></b-col>
        <b-col>{{groupDamage}}</b-col>
      </b-form-row>
    </b-card>
  </div>
</template>
