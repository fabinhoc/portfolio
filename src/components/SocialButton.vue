<template>
  <div class="col-12 q-col-gutter-md text-info">
    <q-btn
      rel="nofollow"
      href="https://www.linkedin.com/in/fabio--cruz"
      fab
      flat
      size="sm"
      target="_blank"
    >
      <q-icon name="fa-brands fa-linkedin"></q-icon>
    </q-btn>
    <q-btn
      rel="nofollow"
      href="https://github.com/fabinhoc"
      fab
      flat
      size="sm"
      target="_blank"
    >
      <q-icon name="fa-brands fa-github"></q-icon>
    </q-btn>
    <q-btn
      rel="nofollow"
      href="mailto:fabinhocosta1202@gmail.com"
      fab
      flat
      size="sm"
      target="_blank"
    >
      <q-icon name="mail"></q-icon>
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialButton',
  setup() {
    return {};
  },
});
</script>
