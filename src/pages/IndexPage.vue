import { defineComponent } from 'vue';
<template>
  <q-page
    :class="
      $q.dark.mode
        ? 'container bg-dark-page q-pa-md'
        : 'container bg-light-page q-pa-md'
    "
  >
    <div class="row column justify-center items-center q-mb-md">
      <q-avatar
        :size="$q.platform.is.mobile ? '80px' : '200px'"
        :style="
          $q.platform.is.mobile ? 'margin-top: -50px' : 'margin-top: -100px'
        "
      >
        <img src="profile.jpeg" />
      </q-avatar>
    </div>
    <TitleSectionVue :title="'Sobre mim'" />
    <PresentationCardVue />
    <TitleSectionVue :title="'Habilidades'" />
    <SkillCard />
    <TitleSectionVue :title="'Experiências'" />
    <ExperienceCard />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PresentationCardVue from 'src/components/PresentationCard.vue';
import TitleSectionVue from 'src/components/TitleSection.vue';
import SkillCard from 'src/components/SkillCard.vue';
import ExperienceCard from 'src/components/ExperienceCard.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    PresentationCardVue,
    TitleSectionVue,
    SkillCard,
    ExperienceCard,
  },
});
</script>

<style lang="scss" scoped>
.container {
  border-radius: 25px 25px 0px 0px;
  margin-top: -20px;
}
</style>
