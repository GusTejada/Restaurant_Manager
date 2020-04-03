<template>
  <div>
    <h1>Products</h1>asdasasdsa
    <button ref="button" class="toggle-button" @click="showPopup = !showPopup">TOGGLE</button>
    <div
      v-show="showPopup"
      v-closable="{
        exclude: ['button'],
        handler: 'onClose'
      }"
      class="popup-box"
    >Test Popup Box</div>
  </div>
</template>

<script>
export default {
  name: "Products",

  props: [],
  data() {
    return {
      showPopup: false
    };
  },

  computed: {},
  watch: {},

  methods: {
    onClose() {
      this.showPopup = false;
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
.toggle-button {
  background: #1188ff;
  color: #fff;
  border: 0;
  border-radius: 2px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
}

.toggle-button:hover {
  background: #1080f8;
}

.popup-box {
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  background: #f0f8ff;
  border-radius: 1px;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  color: #555585;
}
</style>
