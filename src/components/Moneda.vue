<template>
  <div class="moneda" :class="'w-'+cantidad">{{cantidad}}</div>
</template>
<script>
export default {
  name: "Moneda",
  props: {
    cantidad: {
      default: 1
    }
  }
};
</script>
<style>
.moneda {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 5px;
}
.w-1 {
  width: 35px;
  height: 35px;
  background: #b87333;
  border: 1px solid #72471f;
  color: #72471f;
}
.w-2 {
  width: 45px;
  height: 45px;
  background: #b87333;
  border: 1px solid #72471f;
  color: #72471f;
}
.w-5 {
  width: 55px;
  height: 55px;
  background: #b87333;
  border: 1px solid #72471f;
  color: #72471f;
}
</style>