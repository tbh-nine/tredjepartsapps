<template>
  <div>
    <div id="app" class="app-body" tabindex="-1">
      <div class="flexgrow container pt-8 pb-8">
        <Applikation :variant="variant" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// INFO: Changes to this file will not be included in final build
import Applikation from './components/Applikation.vue';
import * as DKFDS from 'dkfds';

export default {
  name: 'App',
  components: {
    Applikation
  },
  data() {
    return {
      variant: {
        navn: 'blå',
        aktiv: true,
        parametre: [
          {
            parameternavn: 'farve',
            parametervaerdi: 'skyBlue'
          }
        ]
      }
    };
  },
  mounted() {
    DKFDS.init();
  }
};
</script>
<style scoped lang="scss">
@import 'styles/_app.scss';
</style>
