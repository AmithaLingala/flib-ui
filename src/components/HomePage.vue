<template>
  <div class="container has-text-centered mt-3">
    <h1 class="title">{{ msg }}</h1>
    <p class="subtitle">
      Free/Libre Books
      <i>(or Free Library)</i>
    </p>
    <p>A self hostable website to write, publish, and read books!</p>
    <br />
    <br />
    <div class="container is-fluid" id="card-holder">
      <div class="columns"></div>
      <div class="columns">
        <div class="column is-5">
          <a class="card box" href="/read">
            <div class="card-content">
              <div class="content">
                <span class>Start Reading</span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-5">
          <a class="card box" href="/write">
            <div class="card-content">
              <div class="content">
                <span class>Start Writing</span>
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </div>
    <br>
        <br>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>