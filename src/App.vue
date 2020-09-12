<template>
  <div id="app">
    <b-navbar class="has-shadow">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="./assets/logo.svg"
            width="115"
            style="max-height: inherit !important"
            alt="Free Libre Books"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/browse" class="is-size-4">Browse</b-navbar-item>
        <b-navbar-item href="/search" class="is-size-4">Search</b-navbar-item>
        <b-navbar-item href="/about" class="is-size-4">About</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <div v-if="userDetails.uname === null">
              <b-navbar-item href="/signup" class="button is-info">
                <strong>Sign up</strong>
              </b-navbar-item>
              <b-navbar-item href="/login" class="button is-light">
                <strong>Log in</strong>
              </b-navbar-item>
            </div>
            <b-navbar-item v-else href="/profile" class="button is-info">
              <strong>{{userDetails.uname}}</strong>
            </b-navbar-item>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Flib</strong> by
          <a href="https://exeami.com" target="_blank">Exeami</a> and
          <a href="https://codingotaku.com" target="_blank">Coding Otaku</a>.
          The source code is licensed
          <a
            href="https://github.com/codingotaku/flib-ui/blob/master/LICENSE"
          >GNU GENERAL PUBLIC LICENSE Version 2</a>. The website content
          is licensed
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
  private userDetails: any = JSON.parse(
    localStorage.getItem("userInfo") || "{}"
  );
}
</script>