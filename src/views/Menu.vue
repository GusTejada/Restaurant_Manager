<template>
  <div>
    <h1>Menu</h1>

    <Editor v-model="value1" editorStyle="height: 320px" />
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      value1: "hola"
    };
  }
};
</script>