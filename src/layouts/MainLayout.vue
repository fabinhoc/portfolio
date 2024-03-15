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
    <q-page-container class="container relative-position">
      <div class="row justify-center">
        <q-avatar
          :size="$q.platform.is.mobile ? '80px' : '200px'"
          :style="
            $q.platform.is.mobile ? 'margin-top: -30px' : 'margin-top: -80px'
          "
        >
          <img src="profile.jpeg" />
        </q-avatar>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout',
});
</script>

<style scoped>
.container {
  border-radius: 25px 25px 0px 0px;
  margin-top: -40px;
  background-color: #171923;
}
</style>
