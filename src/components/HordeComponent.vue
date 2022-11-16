<script lang="ts">
import { defineComponent } from 'vue';
import WelcomeItem from "./WelcomeItem.vue";
import HordeGroup from "./HordeGroup.vue"

export default defineComponent({
  data() {
    return {
      q: 1
    }
  },
  methods: {
  },
  components: {
    HordeGroup
  }
})

</script>

<template>
  <div>
    <b-container class="bv-example-row">
      <b-row v-for="n in q">
        <HordeGroup />
        <hr/>
      </b-row>
      <hr/>
      <b-row>
        <b-col><b-button @click="q++">+</b-button></b-col>
      </b-row>
    </b-container>
  </div>
</template>
