<script lang="ts">
import { defineComponent } from 'vue';
import { Creature } from '../models/Creature'
import { horde } from '../models/Horde'
import { Logger } from '../models/Logger'

export default defineComponent({
  data() {
    return {
      message: '',
      logger: new Logger(),
      beastOptions: horde,
      beastOptionsValue: horde[0],
      groupDamage: "",
      numberOfCreatures: -1,
      enemyCa: -1,
      visible: false,
      numberOfCreaturesOptions: [
        {value: -1, text: "Numero de Criaturas", disabled: true},
        1, 2, 3, 4, 5, 6, 7, 8
      ],
      enemyCAOptions: [
        {value: -1, text: "CA del enemigo", disabled: true},
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
      ]
    }
  },
  methods: {
    rollGroup() {
      if (!this.numberOfCreatures || !this.enemyCa) {
        alert("Alguno de los campos obligatorios esta vacio!!")
        return
      }
      this.logger.text = ''
      this.logger.text += `---------Group-----------\n`
      let numberOfCreaturesNumber : number = +this.numberOfCreatures
      let enemyCaNumber : number = +this.enemyCa
      let totalDamage : number = 0
      for (let index = 0; index < numberOfCreaturesNumber; index++) {
        totalDamage += this.beastOptionsValue.attack(enemyCaNumber, this.logger)  
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
            <option disabled>Selecciona una bestia</option>
            <option v-for="option in beastOptions" :value="option">
              {{ option.name }}
            </option>
          </b-form-select></b-col>
      </b-form-row>
      <b-form-row>
        <b-col><b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="numberOfCreatures" :options="numberOfCreaturesOptions" placeholder="Numero de Criaturas"></b-form-select></b-col>
        <b-col><b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="enemyCa" :options="enemyCAOptions" placeholder="CA del enemigo"></b-form-select></b-col>
      </b-form-row>
      <hr/>
      <b-form-row>
        <b-col><b-button @click="rollGroup">Roll!</b-button></b-col>
        <b-col class="text-center"><b-button v-if="groupDamage !== ''" variant="primary" @click="visible = !visible">{{groupDamage}}</b-button></b-col>
        <!-- <b-col class="text-center"><b-button v-if="groupDamage !== ''" variant="primary" v-b-modal.modal-1>{{groupDamage}}</b-button></b-col> -->
      </b-form-row>
      <b-form-row>
        <b-collapse id="collapse-1" v-model="visible" class="mt-2">
          <b-card>
            <b-form-textarea
              id="textarea"
              v-model="logger.text"
              plaintext
              rows="10"
            ></b-form-textarea>
          </b-card>
        </b-collapse>
      </b-form-row>
    </b-card>
  </div>
</template>
