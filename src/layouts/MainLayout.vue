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
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          @click="scrollToTop"
          fab
          icon="expand_less"
          color="accent"
          padding="sm"
        />
      </q-page-sticky>
    </q-page-container>

    <q-footer
      :reveal="true"
      class="row justify-evenly items-center q-col-gutter-xs text-center q-pa-sm text-info"
    >
      <div class="col-12">
        <p class="portifolio-subtitle">&copy; 2024</p>
      </div>
      <SocialButton />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import useMode from 'src/composables/useMode';
import { defineComponent, onMounted } from 'vue';
import SocialButton from 'src/components/SocialButton.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    SocialButton,
  },
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

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Para um comportamento de scroll suave
      });
    };

    return {
      toggleTheme,
      scrollToTop,
    };
  },
});
</script>

<style lang="scss" scoped></style>
