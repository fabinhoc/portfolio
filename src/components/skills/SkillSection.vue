<template>
  <q-card-section>
    <p class="text-secondary portfolio-subtitle q-mb-none"># {{ title }}</p>
    <q-separator></q-separator>
    <div class="row q-col-gutter-md q-pa-md flex">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="col-3 flex items-center q-py-md"
      >
        <q-img :src="image.path" :alt="image.alt" width="48px"></q-img>
      </div>
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconSkills } from '../models';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array<IconSkills>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
