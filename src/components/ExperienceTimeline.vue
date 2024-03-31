<template>
  <q-timeline color="secondary" :layout="layout">
    <q-timeline-entry
      icon="domain"
      v-for="(experience, key) in experiences"
      :key="key"
      :side="key % 2 !== 0 && !$q.platform.is.mobile ? 'left' : 'right'"
    >
      <template v-slot:subtitle>
        <p class="portfolio-subtitle text-info q-mb-none">
          {{ experience.role }}
        </p>
      </template>
      <template v-slot:title>
        <p class="portfolio-text q-mb-none text-secondary">
          {{ experience.company }}
        </p>
        <p class="portfolio-text q-mb-none text-secondary">
          {{ experience.jobStartDate }} -
          {{ experience.jobEndDate }}
        </p>
        <p class="portfolio-text q-mb-none text-secondary">
          {{ experience.location }}
        </p>
      </template>
      <div class="portfolio-text text-weight-regular text-info">
        <q-slide-transition>
          <div v-show="expandDescription.includes(key)">
            <p v-for="(topics, key) in experience.description" :key="key">
              ✅ {{ topics.topic }}
            </p>
          </div>
        </q-slide-transition>
        <q-btn
          flat
          dense
          class="text-accent"
          @click="handleExpandDescription(key)"
        >
          {{
            expandDescription.includes(key)
              ? 'Ocultar Detalhes'
              : 'Ver Detalhes'
          }}
        </q-btn>
      </div>
    </q-timeline-entry>
  </q-timeline>
</template>

<script lang="ts">
import { Experience } from 'src/types/Experience';
import {
  ComputedRef,
  Ref,
  computed,
  defineComponent,
  onMounted,
  ref,
} from 'vue';
import { useQuasar } from 'quasar';
import { TimelineLayoutEnum } from 'src/types/enums/TimelineLayout.enum';

export default defineComponent({
  name: 'ExperienceTimeline',
  setup() {
    const experiences: Ref<Experience[]> = ref([]);
    const expandDescription: Ref<number[]> = ref([]);
    const $q = useQuasar();
    const layout: ComputedRef<TimelineLayoutEnum> = computed(() => {
      return $q.platform.is.mobile
        ? TimelineLayoutEnum.DENSE
        : TimelineLayoutEnum.LOOSE;
    });

    onMounted(async () => {
      const response = await fetch('src/composables/experiences.json');
      experiences.value = await response.json();

      if (!$q.platform.is.mobile) {
        experiences.value.map((exp, index) =>
          expandDescription.value.push(index)
        );
      }
    });

    const handleExpandDescription = (key: number) => {
      let expandedItems: number[] = JSON.parse(
        JSON.stringify(expandDescription.value)
      );

      expandedItems.includes(key)
        ? (expandedItems = expandedItems.filter((item) => item !== key))
        : expandedItems.push(key);

      expandDescription.value = expandedItems;
    };

    return {
      experiences,
      handleExpandDescription,
      expandDescription,
      layout,
    };
  },
});
</script>
