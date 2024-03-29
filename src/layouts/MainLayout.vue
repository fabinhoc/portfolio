<template>
  <q-layout view="lHh Lpr lFf">
    <div
      class="row"
      :style="$q.platform.is.mobile ? 'height: 250px' : 'height: 600px'"
    >
      <q-img
        src="bg-header-2.jpg"
        :style="$q.platform.is.mobile ? 'height: 250px' : 'height: 600px'"
      >
        <div class="absolute-full column flex flex-center">
          <div
            :class="!$q.platform.is.mobile ? 'absolute' : ''"
            :style="!$q.platform.is.mobile ? 'top:10px; right: 10px' : ''"
          >
            <q-btn
              :icon="$q.dark.mode ? 'light_mode' : 'dark_mode'"
              fab-mini
              flat
              @click="toggleTheme"
              dark
            ></q-btn>
          </div>
          <p :class="$q.platform.is.mobile ? 'text-h5 q-mb-none' : 'text-h2'">
            Fabio Cardoso Costa Cruz
          </p>
          <p
            :class="
              $q.platform.is.mobile
                ? 'text-caption text-weight-light'
                : 'text-h5 text-weight-light'
            "
          >
            Engenheiro de software | Desenvolvedor web
          </p>
        </div>
      </q-img>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import useMode from 'src/composables/useMode';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const $q = useQuasar();
    const mode = useMode();

    onMounted(() => {
      mode.setMode();
    });

    const toggleTheme = () => {
      $q.dark.toggle();
      mode.setMode();
    };

    return {
      toggleTheme,
    };
  },
});
</script>

<style lang="scss" scoped></style>
