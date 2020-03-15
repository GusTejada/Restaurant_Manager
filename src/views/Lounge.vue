<template>
  <div>
    <h2>Lounge</h2>
    <div v-for="(mesa, index) in mesas" :key="index">holano {{ mesa.id}} {{mesa.left}}</div>hola
    <div class="loung_1" @mousemove="mouseMove" @mouseup="stopDrag($event)">
      <mesa-component
        v-for="(mesa, index) in mesas"
        :key="index"
        :style="{left: mesa.left, top: mesa.top}"
        @mouseDown="mouseDown"
        :id="mesa.id"
      ></mesa-component>

      <!-- <mesa-component
        :v-for="mesa in mesas"
        :key="mesa.id"
        @mouseDown="mouseDown"
        :style="{left: mesa.left, top: mesa.top}"
      />-->
    </div>
  </div>
</template>

<script>
import MesaComponent from "../components/Mesa.vue";
export default {
  name: "Lounge",

  props: [],
  data() {
    return {
      isDrag: false,

      draggableIndex: null,
      dragLeft: null,
      dragTop: null,
      mesas: [
        {
          id: 0,
          left: "0px",
          top: "50px"
        },
        {
          id: 1,
          left: "0px",
          top: "150px"
        }
      ],
      elements: [
        {
          id: "1",
          x: 100,
          y: 50,
          scaleX: 1,
          scaleY: 1,
          width: 100,
          height: 100,
          angle: 0,
          classPrefix: "tr",
          text: "Scale Enabled, Click to activate",

          styles: {
            background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)"
          },
          selectOn: "click"
        }
      ]
    };
  },

  computed: {},
  watch: {},

  methods: {
    mouseMove(e) {
      if (this.isDrag) {
        let pos_x = e.x - 25;
        let pos_y = e.y - 250;
        // mesa_1.style.background = "#ff0000";
        this.dragLeft = pos_x + "px";
        this.dragTop = pos_y + "px";
        if (pos_x <= 0 || pos_y <= 0) {
          console.log("menor");
        } else {
          this.mesas[this.draggableIndex].left = pos_x + "px";
          this.mesas[this.draggableIndex].top = pos_y + "px";
        }
      }
    },
    mouseDown(id, event) {
      this.isDrag = true;
      console.log("id", id, event);
      this.draggableIndex = id;
    },
    stopDrag() {
      this.isDrag = false;
    }
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    document.addEventListener("contextmenu", event => event.preventDefault());
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},

  directives: {},
  filters: {},
  components: {
    MesaComponent
  },
  mixins: []
};
</script>

<style>
.loung_1 {
  width: 100%;
  height: 500px;
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
}
</style>
