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
      enemyCa: "",
      uuid: uuidv4()
    }
  },
  methods: {
    rollGroup() {
      if (!this.numberOfCreatures || !this.enemyCa) {
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
      <b-col><b-form-input v-model="numberOfCreatures" placeholder="Numero de criaturas" /></b-col>
      <b-col><b-form-input v-model="enemyCa" placeholder="Ca del enemigo"/></b-col>
      <b-col><b-button @click="rollGroup">Roll!</b-button></b-col>
      <b-col>{{groupDamage}}</b-col>
    </b-form-row>
  </div>
</template>
