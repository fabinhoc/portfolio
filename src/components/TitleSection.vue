<template>
  <div class="row items-start q-col-gutter-sm q-mt-md">
    <q-icon name="check" color="accent" size="23px"></q-icon>
    <p class="portfolio-text-size">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleSection',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.portfolio-text-size {
  font-size: 17px;
}
</style>
