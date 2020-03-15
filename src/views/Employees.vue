<template>
  <div>
    <h1>Employees</h1>
    <!-- <Button label="Show" icon="pi pi-external-link" @click="open" />
    <Button label="Reset" icon="pi pi-external-link" @click="reset()" />-->
    <div class="head">
      <div class="timeBox">
        tiempo:
        <span class="tiempo">{{time}}</span>
      </div>
      <div class="puntuacionBox">
        puntuación:
        <span class="puntuacion" :class="puntuacion > 0 ? 'green' : 'red'">{{puntuacion}}</span>
      </div>
      <Button label="Jugar" icon="pi pi-external-link" @click="crearMonedas()" />
    </div>
    <!-- contador:{{contador}} {{arrMonedas}} -->
    <div class="box">
      <!-- <template v-for="moneda in monedas">
        <Coin :cantidad="cantidades[valor()]" :key="moneda" />
      </template>-->

      <template v-for="moneda in arrMonedas">
        <Coin :cantidad="moneda" :key="moneda.index" />
      </template>
    </div>
    <div>¿Cuánto suman las monedas?</div>
    <div class="inputResultado">
      <input type="text" v-model="resultado" ref="resultadoInp" @keyup.enter="comprobarResultado()" />
    </div>
    <Dialog header="Comprobar" :visible.sync="display" :style="{ width: '50vw' }" :modal="true">
      {{msg}}
      <template #footer>
        😉
        <Button label="Seguir jugando" icon="pi pi-check" @click="close;crearMonedas()" />
        <Button label="No" icon="pi pi-times" @click="close" class="p-button-secondary" />
      </template>
    </Dialog>
  </div>
</template>
<script>
import Coin from "@/components/Moneda.vue";
export default {
  name: "Employees",
  computed: {},
  data() {
    return {
      display: false,
      cantidades: [1, 2, 5],
      monedas: 5,
      contador: 0,
      arrMonedas: [],
      resultado: 0,
      time: 10,
      interval: null,
      msg: "",
      puntuacion: 0
    };
  },
  created() {
    console.log("creado!!");
    //self.$refs.resultadoInp.focus();
    //this.$refs.resultadoInp.$el.focus();
    /* let self = this;
    let tiempoAtras = function() {
      if (self.time !== 0) {
        //self.cuentaAtras();
        console.log("atras");
        self.time--;
      } else {
        clearInterval(self.interval);
      }
    };
    self.interval = setInterval(tiempoAtras, 1000); */
  },
  methods: {
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
    focusInput() {
      this.$refs.resultadoInp.focus();
    },
    tiempoAtras() {
      if (this.time !== 0) {
        //self.cuentaAtras();
        console.log("atras");
        this.time--;
      } else {
        this.display = true;
        this.msg = "Se acabo el tiempo!!";
        this.puntuacion -= 10;
        clearInterval(this.interval);
      }
    },
    cuentaAtras() {
      console.log("atras");
    },
    crearMonedas() {
      console.log("crea monedas");
      this.resultado = "";
      this.focusInput();
      this.time = 10;
      this.display = false;
      clearInterval(this.interval);
      this.arrMonedas = [];
      this.contador = 0;
      let numeroMonedas = Math.floor(Math.random() * 11);
      console.log(numeroMonedas);
      for (let i = 0; i < numeroMonedas; i++) {
        console.log("entra");
        let number = Math.floor(Math.random() * 3);
        let moneda = this.cantidades[number];
        this.arrMonedas.push(moneda);
        this.arrMonedas.sort();
        this.contador = this.contador + moneda;
        console.log(this.arrMonedas);
      }
      this.interval = setInterval(this.tiempoAtras, 1000);
    },
    comprobarResultado() {
      console.log("entra");
      console.log("resultado", this.resultado);

      console.log("contador", Number(this.contador));
      clearInterval(this.interval);
      if (Number(this.resultado) === Number(this.contador)) {
        this.display = true;
        this.msg = "Enhorabuena has acertado";
        this.puntuacion += 10 + this.time;
      } else {
        this.display = true;
        this.msg = "Tienes que esforzarte más";
        this.puntuacion -= 10;
      }
    },
    sumaMonedas(m) {
      console.log("moneda de:", m);
      //sumaza.push(m);
    },
    valor() {
      let number = Math.floor(Math.random() * 3);
      let moneda = this.cantidades[number];
      this.sumaMonedas(moneda);
      //console.log(suma);
      //console.log('valor moneda:',this.cantidades[number]);
      //this.contador = this.contador + this.cantidades[number];
      //console.log('contador:', this.contador);
      return number;
    },
    nMonedas() {
      this.monedas = Math.floor(Math.random() * 11);
    },
    reset() {
      this.nMonedas();
    }
  },
  components: {
    Coin
  }
};
</script>
<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
input[type="text"] {
  font-size: 35px;
  border: none;
  text-align: center;
  border-bottom: 1px solid blueviolet;
}
.head {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.timeBox {
  display: flex;
  align-items: center;
}
.tiempo {
  font-size: 35px;
}
.inputResultado {
  text-align: center;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
