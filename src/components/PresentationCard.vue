<template>
  <PortfolioCard>
    <q-card-section class="portfolio-text text-weight-regular text-info">
      <p>Olá,</p>
      <p>
        Sou Fabio, um profissional de engenharia de software com mais de uma
        década de experiência em tecnologia. Meu conhecimento e habilidades
        foram moldados por uma formação sólida em Bacharelado em Sistemas de
        Informação pela Universidade de Franca, finalizada em 2014.
      </p>
      <p>
        Durante minha trajetória, adquiri uma ampla gama de experiências como
        desenvolvedor fullstack, atuando em diversos setores do mercado. Desde
        portais de notícias até sistemas administrativos de empresas
        multinacionais, e até mesmo startups focadas em mídias sociais e
        organizações de saúde. Além disso, minha experiência como freelancer me
        permitiu desenvolver uma visão ampla e adaptável, pronta para enfrentar
        qualquer desafio.
      </p>
      <p>
        Atualmente, ocupo a posição de desenvolvedor sênior, e estou determinado
        a levar minha carreira a novos patamares de excelência. Aqui estão
        algumas das áreas em que me destaco e continuo a aprimorar:
      </p>
      <ul>
        <li>Desenvolvimento Front-end</li>
        <li>Desenvolvimento Back-end</li>
        <li>Bancos de Dados</li>
        <li>Outras habilidades e ferramentas</li>
      </ul>
      <p>
        Estou entusiasmado em continuar contribuindo para projetos desafiadores
        e colaborar com equipes dinâmicas. Estou aberto a oportunidades que me
        permitam crescer profissionalmente e aplicar minhas habilidades para
        impulsionar o sucesso de seus projetos.
      </p>
    </q-card-section>
  </PortfolioCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PortfolioCard from 'src/components/PortfolioCard.vue';

export default defineComponent({
  name: 'PresentationCard',
  components: {
    PortfolioCard,
  },
});
</script>
