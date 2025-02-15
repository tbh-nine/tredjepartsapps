<!-- The entry point for the sandkasse applikation. Direct and indirect imports of components and stylesheets in this class will be included in the final applikation -->
<template>
  <div class="applikation-container">
    <SvgIcons />

    <h2 class="mb-8">Demoapplikation - TBH</h2>

    <button class="button button-primary" @click="showHelloWorld = !showHelloWorld">
      <div v-if="!showHelloWorld">Click me to say hello!</div>
      <div v-else>Click me to remove the greeting.</div>
    </button>

    <h3 v-if="showHelloWorld">Hello world!</h3>

    <!-- <h3>Navigation</h3>
    <div>
      Eksempel på simpel navigation inde i leverandør applikationen, hvor visning af trin styres med Vue v-show direktiv. Det er applikationen selv,
      som skal lytte på <strong>hashchange</strong> event, og efterfølgende implementere logikken når # ændres.
    </div>
    <h4>Du er på trin {{ step }}/{{ maxStep }}</h4>
    <form class="my-5">
      <div v-show="step === 1" class="form-group">
        <label class="form-label" for="navn"> Navn </label>
        <input id="navn" class="form-input" required value="Jens" name="navn" type="text" />
      </div>
      <div v-show="step === 2" class="form-group">
        <label class="form-label" for="efternavn"> Efternavn </label>
        <input id="efternavn" class="form-input" required value="Hansen" name="efternavn" type="text" />
      </div>
    </form>
    <div v-show="step === maxStep">
      <div class="alert alert-info my-5">
        <div class="alert-body">
          <p class="alert-heading">Sidste trin</p>
          <p class="alert-text">Du har nået sidste trin i guiden ...</p>
        </div>
      </div>
    </div>
    <div>
      <button v-for="index in maxStep" :key="index" class="button button-primary" @click="changeStep(index)">Trin #{{ index }}</button>
    </div>
    <h3>Parameter variant:</h3>
    <div>
      Eksempel på brug af variant parameter, som udenfor sandkassen specificeres som Vue property fra Virksomhedsguiden. I denne sandkasse angives
      varianten i
      <strong>src/App.vue</strong> for at have en effekt.
    </div>
    <pre>{{ variant }}</pre>
    <div class="py-5 align-text-center" :style="{ 'background-color': variantColor }">
      Baggrundsfarven bestemmes af parameter varianten ({{ variantName }})
    </div>

    <h3>Eksternt komponent:</h3>
    <div class="mb-5">Eksempel på brug af ekstern Vue komponent</div>
    <ExternalComponent title="Test af mulitple komponenter med eksternt CSS stylesheet" />

    <h3>API:</h3>
    <div>
      Eksempel på brug af <a href="https://www.npmjs.com/package/axios">Axios</a> biblioteket til at kalde eksternt API og vise spinner ved asynkrone
      operationer
    </div>
    <div>
      <div v-if="pending" class="spinner" aria-label="Henter indhold" />
      <div v-if="error" class="alert alert-error my-5" role="alert" aria-atomic="true">
        <div class="alert-body">
          <p class="alert-heading">Fejl</p>
          <p class="alert-text">API request failed</p>
        </div>
      </div>
      <pre v-else class="my-5">{{ response }}</pre>
      <button class="button button-primary" @click="callAPI()">API kald</button>
      <button class="button button-primary" @click="callAPI(true)">API kald med fejl</button>
    </div>

    <h3>Responsive</h3>
    Man kan bruge hjælpeklasserne i <strong>src/styles/mixins/_mediaquery-helpers.scss</strong> til at håndtere responsive design. Filen
    <strong>src/styles/components/_applikation.scss</strong> viser et eksempel på dette.
    <div class="responsive-class mt-5">Baggrundsfarven på dette element ændrer farve når skærmstørrelsen skifter mellem small, medium og large</div>

    <h3>Ikoner</h3>
    <div class="mb-5">
      Nedenstående ikoner kommer fra samlingen i
      <strong>src/components/SvgIcons.vue</strong>. Ikon samling skal udvides når der er brug for flere ikoner i applikationen, og det er
      applikationens eget ansvar at tilføje dem. Hvis der brug for at tilføje custom ikoner, så brug venligst prefix <strong>xla-</strong> som ID fx
      "xla-chat" for at undgår kollision med custom ikoner i Virksomhedsguiden.
    </div>
    <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#home"></use></svg>
    <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#attach-file"></use></svg>
    <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#xla-chat"></use></svg>

    <h3>Det Fælles Designsystem (DKFDS)</h3>
    <div>Applikationen skal bygges op vha. <a href="https://designsystem.dk/kode/implementering/" target="_blank">DKFDS</a></div>
    <h4>Layout:</h4>
    <div class="row">
      <div class="col-md-6 col-xs-12">Eksempel på grid: Venstre kolonne</div>
      <div class="col-md-6 col-xs-12">Eksempel på grid: Højre kolonne</div>
    </div>

    <h4>Komponenter</h4>
    <ul id="accordion-element" class="accordion accordion-bordered accordion-multiselectable">
      <li>
        <h2>
          <button class="accordion-button" aria-expanded="false" aria-controls="a1">
            Accordion
            <span class="accordion-icon">
              <span class="icon_text">Information</span>
              <svg class="icon-svg" focusable="false" aria-hidden="true"><use xlink:href="#info"></use></svg>
            </span>
          </button>
        </h2>
        <div id="a1" aria-hidden="true" class="accordion-content">
          <p>Indholdet af en accordion</p>
        </div>
      </li>
    </ul>

    <h4>Card:</h4>
    <div class="row">
      <div class="card col-6">
        <div class="card-header">
          <h3 class="header-title">Eksempel på card-komponenten</h3>
        </div>
        <div class="card-text">
          Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Cards kan placeres i et grid således at de
          står side om side.
        </div>
      </div>
      <div class="card col-6">
        <div class="card-header">
          <h3 class="header-title">Eksempel på card-komponenten</h3>
        </div>
        <div class="card-text">
          Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige indhold. Cards kan placeres i et grid således at de
          står side om side.
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import ExternalComponent from './ExternalComponent.vue';
import SvgIcons from './SvgIcons.vue';
import * as DKFDS from 'dkfds';

export interface Variant {
  navn: string;
  aktiv: boolean;
  parametre: {
    parameternavn: string;
    parametervaerdi: string;
  }[];
}

export default {
  name: 'Applikation',
  components: {
    ExternalComponent,
    SvgIcons
  },
  props: {
    variant: {
      type: Object as () => Variant,
      default: null,
      required: false
    }
  },

  data() {
    return {
      // response: {},
      // error: false,
      // pending: false,
      // step: 1,
      // maxStep: 3,
      showHelloWorld: false
    };
  },

  computed: {
    variantColor: function () {
      return this.variant?.parametre[0].parametervaerdi ?? '#C0C0C0';
    },
    variantName: function () {
      return this.variant?.navn ?? 'default';
    }
  },
  mounted() {
    this.callAPI();
    // new DKFDS.Accordion(document.getElementById('accordion-element'));
  }
  // created() {
  //   window.addEventListener('hashchange', this.updateStepFromHash);
  // },
  // destroyed() {
  //   window.addEventListener('hashchange', this.updateStepFromHash);
  // },
  // methods: {
  //   callAPI(fail = false) {
  //     this.pending = true;
  //     this.error = false;
  //     const id = fail ? 'NaN' : 1;
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //       .then(({ data }) => {
  //         // will show the returned data in DOM
  //         this.response = data;
  //       })
  //       .catch(() => {
  //         // will make the error message DOM visible
  //         this.error = true;
  //       })
  //       .finally(() => {
  //         // stop showing loading spinner
  //         this.pending = false;
  //       });
  //   },
  //   changeStep(step: number) {
  //     window.location.hash = String(step);
  //   },
  //   updateStepFromHash() {
  //     const { hash } = window.location;
  //     this.step = hash ? parseInt(hash.replaceAll('#', ''), 10) : 1;
  //   }
  // }
};
</script>
<style lang="scss" scoped>
@import '../styles/components/_applikation.scss';
</style>
