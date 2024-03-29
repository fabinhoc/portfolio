<template>
  <PortfolioCard>
    <SkillSection
      :title="'Linguagens e framework back-end'"
      :images="languages"
    />
    <SkillSection :title="'Databases'" :images="databases" />
    <SkillSection :title="'Frontend'" :images="frontends" />
    <SkillSection :title="'VMs'" :images="vms" />
    <SkillSection :title="'Deployments'" :images="deployments" />
  </PortfolioCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconSkills } from './models';
import PortfolioCard from './PortfolioCard.vue';
import SkillSection from './skills/SkillSection.vue';

export default defineComponent({
  name: 'SkillCard',
  components: {
    PortfolioCard,
    SkillSection,
  },
  setup() {
    const languages: IconSkills[] = [
      {
        path: 'icons/icon-php.png',
        alt: 'PHP icon logo',
      },
      {
        path: 'icons/icon-laravel.png',
        alt: 'Laravel icon logo',
      },
      {
        path: 'icons/icon-nodejs.png',
        alt: 'Nodejs icon logo',
      },
      {
        path: 'icons/icon-nestjs.png',
        alt: 'Nestjs icon logo',
      },
    ];

    const databases: IconSkills[] = [
      {
        path: 'icons/icon-mysql.png',
        alt: 'Mysql icon logo',
      },
      {
        path: 'icons/icon-postgres.png',
        alt: 'Postgres icon logo',
      },
      {
        path: 'icons/icon-dynamodb.png',
        alt: 'Dynamodb icon logo',
      },
      {
        path: 'icons/icon-sqlite.png',
        alt: 'Sqlite icon logo',
      },
      {
        path: 'icons/icon-redis.png',
        alt: 'Redis icon logo',
      },
      {
        path: 'icons/icon-mongodb.png',
        alt: 'Mongodb icon logo',
      },
    ];

    const frontends: IconSkills[] = [
      {
        path: 'icons/icon-vuejs.png',
        alt: 'Vuejs icon logo',
      },
      {
        path: 'icons/icon-quasar.png',
        alt: 'Quasar framework icon logo',
      },
      {
        path: 'icons/icon-css3.png',
        alt: 'CSS 3 icon logo',
      },
      {
        path: 'icons/icon-html5.png',
        alt: 'HTML 5 icon logo',
      },
    ];

    const vms: IconSkills[] = [
      {
        path: 'icons/icon-docker.png',
        alt: 'Docker icon logo',
      },
      {
        path: 'icons/icon-dockercompose.png',
        alt: 'Docker Compose icon logo',
      },
    ];

    const deployments: IconSkills[] = [
      {
        path: 'icons/icon-hostinger.png',
        alt: 'Hostinger Compose icon logo',
      },
      {
        path: 'icons/icon-vercel.png',
        alt: 'Vercel Compose icon logo',
      },
      {
        path: 'icons/icon-aws.png',
        alt: 'AWS icon logo',
      },
      {
        path: 'icons/icon-ec2.png',
        alt: 'EC2 icon logo',
      },
      {
        path: 'icons/icon-netlify.png',
        alt: 'Netlifly icon logo',
      },
      {
        path: 'icons/icon-firebase.png',
        alt: 'Firebase icon logo',
      },
    ];

    return {
      languages,
      databases,
      frontends,
      vms,
      deployments,
    };
  },
});
</script>

<style scoped></style>
