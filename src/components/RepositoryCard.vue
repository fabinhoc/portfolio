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
          <q-icon name="fa-brands fa-github" size="48px"> </q-icon>
        </div>
        <div class="col-9 q-ml-sm">
          <a
            :href="repository.link"
            target="_blank"
            class="portfolio-subtitle text-info link"
          >
            <q-icon
              name="fa-solid fa-arrow-up-right-from-square"
              size="10px"
              style="margin-top: -5px"
            ></q-icon>
            {{ repository.title }}
          </a>
          <p class="portfolio-subtitle text-secondary q-mt-sm">
            {{ repository.description }}
          </p>
          <div class="q-gutter-xs">
            <q-badge
              v-for="(tag, key) in repository.tags"
              :key="key"
              :label="tag"
              color="accent"
              outline
            />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RepositoryCard',
  props: {
    repository: {
      required: true,
      type: Object,
    },
  },
  setup() {
    return {};
  },
});
</script>
