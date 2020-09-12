<template>
  <div class="container  mt-3">
      <br><br>
    <h1 class="title has-text-centered">Welcome to Flib Login</h1>
    <br />
    <br />
    <div class="container is-fluid" id="card-holder">
      <div class="columns"></div>
      <div class="columns is-centered">
        <div class="column is-5">
          <a class="card box">
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <div class="control">
                    User name<input class="input is-primary" type="text" />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    Password<input class="input is-primary" type="password" />
                  </div>
                </div>
            
                <button class="button is-link" type="submit" >Login</button>
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
export default class Login extends Vue {}
</script>