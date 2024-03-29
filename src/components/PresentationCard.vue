<template>
  <PortfolioCard>
    <q-card-section class="portfolio-text text-weight-regular text-info">
      <p>Olá,</p>
      <p>
        Meu nome é Fabio, sou profissional especializado em engenharia de
        software, atuando no setor de tecnologia desde 2014. Possuo formação em
        Bacharelado em Sistemas de Informação pela Universidade de Franca,
        concluído em 2014 na cidade de Franca.
      </p>
      <p>
        Ao longo da minha carreira, acumulei experiência diversificada como
        desenvolvedor fullstack em diversos setores de mercado. Trabalhei em
        projetos que abrangem desde portais de notícias até áreas
        administrativas de empresas multinacionais, passando por startups
        focadas em mídias sociais e organizações do nicho de saúde. Além disso,
        participei de vários trabalhos como freelancer, ampliando ainda mais
        minha visão e habilidades.
      </p>
      <p>
        Atualmente, ocupo a posição de desenvolvedor sênior, e estou determinado
        a levar minha carreira a novos patamares de excelência. Abaixo, destaco
        algumas das principais áreas com as quais trabalhei e continuo
        aprimorando:
      </p>
      <ul>
        <li>Desenvolvimento Front-end</li>
        <li>Desenvolvimento Back-end</li>
        <li>Bancos de Dados</li>
        <li>Outras habilidades e ferramentas</li>
      </ul>
      <p>
        Estou entusiasmado em continuar a contribuir para projetos desafiadores
        e colaborar com equipes dinâmicas enquanto busco oportunidades que
        impulsionem meu crescimento profissional.
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
