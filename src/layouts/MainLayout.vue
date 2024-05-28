<template>
  <q-layout view="lHh Lpr lFf">
    <div
      class="row"
      :style="$q.platform.is.mobile ? 'height: 250px' : 'height: 600px'"
    >
      <q-img
        src="bg-header-4.jpg"
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
          <h1 :class="$q.platform.is.mobile ? 'text-h5 q-mb-none' : 'text-h2'">
            Fabio Cardoso Costa Cruz
          </h1>
          <h2
            :class="
              $q.platform.is.mobile
                ? 'text-caption text-weight-light'
                : 'text-h5 text-weight-light'
            "
          >
            Programador Fullstack
          </h2>
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
import { useMeta, useQuasar } from 'quasar';
import useMode from 'src/composables/useMode';
import { defineComponent, onMounted } from 'vue';
import SocialButton from 'src/components/SocialButton.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    SocialButton,
  },
  setup() {
    const metaData = {
      // sets document title
      title: 'Fabio Cruz - Programador Fullstack',
      titleTemplate: (title: string) => `${title}`,
      // meta tags
      meta: {
        description: {
          name: 'description',
          content:
            'Profissional de tecnologia de informação com mais de uma década de experiência. Bacharelado em SI. Ampla experiência com desenvolvimento de software.',
        },
        keywords: {
          name: 'keywords',
          content:
            'Desenvolvedor de software, Programador, software developer, fullstack developer',
        },
        equiv: {
          'http-equiv': 'Content-Type',
          content: 'text/html; charset=UTF-8',
        },
        ogTitle: {
          property: 'og:title',
          template(title: string) {
            return title;
          },
        },
        link: {
          rel: 'canonical',
          href: 'https://www.fabiocruz.netlify.app/',
        },
      },

      // CSS tags
      link: {
        material: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      },

      // JS tags
      script: {
        ldJson: {
          type: 'application/ld+json',
          innerHTML: '{ "@context": "http://schema.org" }',
        },
      },

      // <html> attributes
      htmlAttr: {
        'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
        empty: undefined, // generates <html empty>
      },

      // <body> attributes
      bodyAttr: {
        'action-scope': 'xyz', // generates <body action-scope="xyz">
        empty: undefined, // generates <body empty>
      },

      // <noscript> tags
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    const meta = useMeta(metaData);

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
      meta,
    };
  },
});
</script>

<style lang="scss" scoped></style>
