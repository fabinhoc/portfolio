<template>
  <div class="row q-col-gutter-md">
    <div
      v-for="(repository, key) in repositories"
      :key="key"
      class="col-md-3 col-sm-12 col-lg-3 col-xs-12"
    >
      <RepositoryCard :repository="repository" />
    </div>
    <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12 text-center">
      <p class="portifolio-text text-secondary">
        * Outros repositórios são privados de empresas parceiras.
      </p>
      <a
        class="text-subtitle link text-accent"
        href="https://github.com/fabinhoc?tab=repositories"
        target="_blank"
      >
        <q-icon
          name="fa-solid fa-arrow-up-right-from-square"
          size="13px"
          style="margin-top: -5px"
        ></q-icon>
        <span style="font-size: 15px"> ACESSAR REPOSITÓRIO </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import RepositoryCard from 'src/components/RepositoryCard.vue';
import { Repository } from 'src/types/Repository';
import { ref } from 'vue';
import { Ref } from 'vue';

export default defineComponent({
  name: 'ListRepositories',
  components: {
    RepositoryCard,
  },
  setup() {
    const repositories: Ref<Repository[]> = ref([]);

    onMounted(async () => {
      const response = await fetch('src/statics/repositories.json');
      repositories.value = await response.json();
    });

    return {
      repositories,
    };
  },
});
</script>
