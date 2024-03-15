<template>
  <q-layout view="lHh Lpr lFf">
    <div
      class="row"
      :style="$q.platform.is.mobile ? 'height: 180px' : 'height: 400px'"
    >
      <q-img
        src="bg-header-2.jpg"
        :style="$q.platform.is.mobile ? 'height: 180px' : 'height: 400px'"
      >
        <div class="absolute-full flex flex-center">
          <div class="flex column flex-center">
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
          <div class=""></div>
        </div>
      </q-img>
    </div>
    <q-page-container class="container relative-position">
      <div class="row justify-center">
        <q-avatar
          :size="$q.platform.is.mobile ? '110px' : '200px'"
          :style="
            $q.platform.is.mobile ? 'margin-top: -40px' : 'margin-top: -80px'
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
  margin-top: -20px;
  background-color: #171923;
}
</style>
