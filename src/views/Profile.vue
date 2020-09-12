<template>
  <div class="container mt-3">
    <br />

    <h1 class="title has-text-centered">Welcome to Filb</h1>
    <br />
    <br />
    <div class="container is-fluid" id="card-holder">
      <div class="title has-text-dark">Fiction</div>
      <div class="columns"></div>
      <div class="columns">
        <div class="column is-3">
          <a class="card box">
            <div class="card-image">
              <div class="image is-2by1">
                <img class src />
              </div>
            </div>
            <div class="card-content">
              <div class="content">
                <span class>Book 1</span>
                <br />
                <span class>basic description of book</span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-3">
          <a class="card box">
            <div class="card-image">
              <div class="image is-2by1">
                <img class src />
              </div>
            </div>
            <div class="card-content">
              <div class="content">
                <span class>Book 2</span>
                <br />
                <span class>basic description of book</span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-3">
          <a class="card box">
            <div class="card-image">
              <div class="image is-2by1">
                <img class src />
              </div>
            </div>
            <div class="card-content">
              <div class="content">
                <span class>Book 3</span>
                <br />
                <span class>basic description of book</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Profile extends Vue {}
</script>