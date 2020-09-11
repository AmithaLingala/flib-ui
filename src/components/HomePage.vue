<template>
  <div class="container has-text-centered mt-3">
    <h1 class="title">{{ msg }}</h1>
    <p class="subtitle">
      Free/Libre Books <i>(or Free Library)</i>
     </p>
     <p>A self hostable website to write, publish, and read books!</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>