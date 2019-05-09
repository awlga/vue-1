<template>
  <div>
    <h1>{{ Splited }}</h1>
    <Basic></Basic>
    <Split><Basic></Basic></Split>
  </div>
</template>

<script>
import Basic from "./basic.vue";
import Split from "./split.vue";

export default {
  data: function() {
    return {
      Splited: "This is a compound Comp!"
    };
  },
  components: {
    Basic,
    Split
  }
};
</script>

<style scoped>
h1 {
  color: red;
  border: 1px solid blue;
  margin: 20px;
}
div {
  border: 1px solid gray;
  margin: 10px;
}
Basic {
  background-color: #999;
}

Split {
  background-color: #ccc;
}
</style>




