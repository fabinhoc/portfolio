<template>
  <q-card class="portfolio-radio bg-primary" :flat="$q.dark.isActive">
    <q-card-section>
      <div
        :class="
          $q.platform.is.mobile
            ? 'row justify-evenly items-center'
            : 'row justify-start items-center'
        "
      >
        <div tabindex="0">
          <q-icon name="workspace_premium" size="48px"> </q-icon>
        </div>
        <div class="col-9 q-ml-sm">
          <p
            class="portfolio-subtitle text-info q-mb-none link"
            @click="dialog = true"
          >
            {{ certification.title }}
          </p>
          <span class="portfolio-subtitle text-secondary">{{
            certification.educational_institution
          }}</span>
          <span class="portfolio-subtitle text-secondary">{{
            certification.conclusion_date
          }}</span>
        </div>
      </div>
    </q-card-section>
  </q-card>
  <q-dialog v-model="dialog" maximized persistent>
    <div>
      <q-card flat style="height: 10%">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
      </q-card>
      <q-card style="height: 90%" class="row justify-evenly items-center">
        <q-card-section :class="!$q.platform.is.mobile ? 'full-height' : ''">
          <img
            v-if="certification.file"
            :src="certification.file"
            :title="certification.title"
            :alt="certification.title"
            style="max-width: 100%; max-height: 100%"
          />
          <p class="portifolio-subtitle" v-else>Certificado não anexado.</p>
        </q-card-section>
      </q-card>
    </div>
  </q-dialog>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CertificationCard',
  props: {
    certification: {
      required: true,
      type: Object,
    },
  },
  setup() {
    const dialog: Ref<boolean> = ref(false);

    return {
      dialog,
    };
  },
});
</script>
