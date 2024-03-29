<template>
  <q-card
    class="full-width portfolio-radio bg-primary"
    :flat="$q.dark.isActive"
  >
    <slot />
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortfolioCard',
});
</script>

<style lang="scss" scoped></style>
