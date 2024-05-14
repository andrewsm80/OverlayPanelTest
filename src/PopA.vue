<template>
  <div>
    <Button @click="toggle">
      Toggle A
    </Button>
    <OverlayPanel ref="popover">
      Popover A content
      <PopB></PopB>
    </OverlayPanel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PopB from "./PopB.vue";

let popover = ref();
function toggle(event) {
  popover.value.toggle(event);
}
</script>