<template>
  <div>
    <Button @click="toggle">
      Toggle B
    </Button>
    <OverlayPanel ref="popover">
      Popover B content
      <PopC></PopC>
    </OverlayPanel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PopC from "./PopC.vue";

let popover = ref();
function toggle(event) {
  popover.value.toggle(event);
}
</script>