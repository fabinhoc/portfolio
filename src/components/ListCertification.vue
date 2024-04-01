<template>
  <div class="row q-col-gutter-md">
    <div
      v-for="(certification, key) in certificates"
      :key="key"
      class="col-md-3 col-sm-12 col-lg-3 col-xs-12"
    >
      <CertificationCard :certification="certification" />
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent, onMounted, ref } from 'vue';
import CertificationCard from 'src/components/CertificationCard.vue';
import { Certfication } from 'src/types/Certification';
import jsonData from 'src/assets/certificates.json';

export default defineComponent({
  name: 'ListCertification',
  components: {
    CertificationCard,
  },
  setup() {
    const certificates: Ref<Certfication[]> = ref([]);

    onMounted(async () => {
      certificates.value = jsonData;
    });

    return {
      certificates,
    };
  },
});
</script>
