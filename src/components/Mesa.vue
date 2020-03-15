<template>
  <div class="mesa" @mousedown="mouseDown($event)" @click.right="toggle">
    <div class="silla"></div>
    <div class="tipoMesa">MESA {{id}}</div>
    <div class="silla"></div>
    <Menu :model="items" :popup="true" ref="menu" class="submenu" />
  </div>
</template>

<script>
export default {
  name: "MesaComponent",

  props: {
    id: {
      type: Number
    }
  },
  data() {
    return {
      items: [
        {
          label: "Options",
          items: [
            { label: "New", icon: "pi pi-fw pi-plus", command: () => {} },
            {
              label: "Delete",
              icon: "pi pi-fw pi-trash",
              url: "https://www.primetek.com.tr"
            }
          ]
        },
        {
          label: "Account",
          items: [
            { label: "Options", icon: "pi pi-fw pi-cog", to: "/options" },
            { label: "Sign Out", icon: "pi pi-fw pi-power-off", to: "/logout" }
          ]
        }
      ]
    };
  },

  computed: {},
  watch: {},

  methods: {
    mouseDown(evt) {
      console.log("ev:", evt);
      this.$emit("mouseDown", this.id, evt);
    },
    mouseUp(event) {
      console.log("ev up:", event);
    },
    doDrag() {
      console.log("ev drag", event);
    },
    toggle(event) {
      console.log("click derecho");
      this.$refs.menu.toggle(event);
    }
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},

  directives: {},
  filters: {},
  components: {},
  mixins: []
};
</script>

<style>
.mesa {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.submenu {
  top: 50px !important;
  left: 50px !important;
}
.tipoMesa {
  width: 50px;
  height: 50px;
  border: 1px solid #cecece;
  border-radius: 5px;
  background: #f9f9f9;
}
.silla {
  height: 30px;
  width: 5px;
  border: 1px solid #cecece;
  border-radius: 2px;
  margin: 3px;
}
</style>
