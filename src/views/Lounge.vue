<template>
  <div>
    <h2>Lounge</h2>
    medidas salon {{ salonWidth}}, {{salonHeight}}
    <div class="loung_1" @mousemove="mouseMove" @mouseup="stopDrag($event)">
      <mesa-component
        v-for="(mesa, index) in mesas"
        :key="index"
        :style="{left: mesa.left, top: mesa.top}"
        @mouseDown="mouseDown"
        :id="mesa.id"
      ></mesa-component>
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
      salonWidth: null,
      salonHeight: null,
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
        let pos_x = e.x - 50;
        let pos_y = e.y - 180;
        // mesa_1.style.background = "#ff0000";
        this.dragLeft = pos_x + "px";
        this.dragTop = pos_y + "px";
        if (
          pos_x <= 0 ||
          pos_y <= 0 ||
          pos_x >= this.salonWidth - 69 ||
          pos_y >= this.salonHeight - 60
        ) {
          console.log("menor");
        } else {
          this.mesas[this.draggableIndex].left = pos_x + "px";
          this.mesas[this.draggableIndex].top = pos_y + "px";
        }
      }
    },
    mouseDown(id, event) {
      this.isDrag = true;
      console.log("Event-", event.target.parentElement.nodeName);
      this.draggableIndex = id;
      const element = event.target.parentElement;
      console.log(element);
      const clases = event.target.parentElement.classList;
      console.log(clases[0]);
      if (clases[0] === "mesa") {
        console.log("añade class dragg");
        element.classList = `${clases} dragg`;
      }
    },
    stopDrag(event) {
      this.isDrag = false;
      const clases = event.target.parentElement.classList;
      console.log("clases", clases);
      if (clases[0] === "mesa dragg") {
        event.target.parentElement.classList = `mesa`;
      }
    }
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    document.addEventListener("contextmenu", event => event.preventDefault());
    this.salonWidth = document.querySelector(".loung_1").clientWidth;
    this.salonHeight = document.querySelector(".loung_1").clientHeight;
    console.log(innerWidth);
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
  height: 600px;
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
}
</style>
