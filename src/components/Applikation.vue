<template>
  <div class="applikation-container">
    <div>Headers</div>
    <h1>Jeg er en h1</h1>
    <h2>Jeg er en h2</h2>
    <h3>Jeg er en h3</h3>
    <h4>Jeg er en h4</h4>
    <h5>Jeg er en h5</h5>
    <hr>
    Tid lige nu: {{currentTime}}
    <hr>
    Dynamisk komponent:
    <dynamic-component text="Jeg er en dynamisk komponent"></dynamic-component>
    <hr>
    <a href="http://www.google.com" target="_blank">Link til Google</a>
    <hr>
    <div>Response fra axios</div>
    <div class="spinner" v-if="loadingResponse" aria-label="Henter indhold" />
    {{response}}
    <hr>
    <button class="button button-primary">Jeg er en knap</button>
    <hr>
    <div>Datovælger</div>
    <div id="datepicker"><input ref="input" /></div>
    <hr>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        Eksempel på grid: Venstre kolonne
      </div>
      <div class="col-md-6 col-xs-12">
        Eksempel på grid: Højre kolonne
      </div>
    </div>
    <hr>
    <div class="card">
      <div class="card-header">
        <h3 class="header-title">Eksempel på card-komponenten</h3>
      </div>
      <div class="card-text">
        <p>Du kan bruge cards til at gruppere funktionalitet, der adskiller
          sig fra sidens øvrige indhold. Cards kan placeres i et <a
            href="#">grid</a>, således at de står side om
          side.</p>
      </div>

      <div class="card-footer card-action">

        <div class="action-links">
          <a href="#">Gå til komponent</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { DateTime } from 'luxon';
import Pikaday from 'pikaday';

var dynamicComponent = {
  template: '<div>{{text}}</div>',
  props: ['text'],
};

@Component({
  name: 'Applikation',
  components: {
    dynamicComponent
  }
})
export default class Applikation extends Vue {
  private currentTime = '';
  private response = {};
  private error = {};
  private loadingResponse = false;
  private datePicker!: Pikaday;

  mounted() {
    this.currentTime = DateTime.local().toISO();
    this.loadingResponse = true;
    this.callExternalApi();

    this.datePicker = new Pikaday({
      field: this.$refs.input as HTMLElement,
      format: 'DD/MM/YYYY',
      firstDay: 1, // mandag
      minDate: new Date(),
      container: document.getElementById('datepicker'),
      i18n: {
        previousMonth: 'Forrige måned',
        nextMonth: 'Næste måned',
        months: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'December'],
        weekdays: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        weekdaysShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør']
      },
      onSelect: (date: Date) => this.$emit('select', date)
    });
    this.datePicker.setDate(new Date(), true);
  }

  private async callExternalApi() {
    axios.get('https://httpbin.org/get').then((rsp: any) => {
      this.response = rsp;
      this.loadingResponse = false;
    }).catch((error: any) => {
      this.error = error;
    });
  }
}
</script>
<style lang="scss" scoped>
  @import '../../node_modules/dkfds-plugins/dist/css/dkfds-pikaday-theme.standalone.min.css';

  #datepicker {
    max-width: 400px;
  }
</style>
