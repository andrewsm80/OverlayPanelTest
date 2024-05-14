<template>
  <div>
    <Button @click="toggle">
      Toggle C
    </Button>
    <OverlayPanel ref="popover">
      Popover C content
      <br>
      Clicking inside this popover triggers a bug that closes all the popovers.
    </OverlayPanel>
  </div>
</template>

<script setup>
import { ref } from "vue";

let popover = ref();
function toggle(event) {
  popover.value.toggle(event);
}
</script>