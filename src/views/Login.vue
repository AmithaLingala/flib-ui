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
                 <div class="notification is-danger" v-if="errors.length">
                <ul>
                  <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
                </ul>
              </div>
              <form action="#">
                <div class="field">
                  <div class="control">
                    User name<input v-model="uname" class="input is-primary" type="text"  placeholder="user name or email"/>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    Password<input v-model="pass" class="input is-primary" type="password" />
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                  </div>
                </div>
            
                <button
                  class="button is-link"
                  type="submit"
                  value="Submit input"
                  @click="login"
                > Login</button>
              </form>
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
import { register, login } from "../apis/user";
@Component
export default class Login extends Vue {
  private uname = "";
  private errors: string[] = [];
  private pass = "";
  checkform(): any {
    this.errors.splice(0);
    if (!this.uname) this.errors.push("username or email is required");
    if (!this.pass) this.errors.push("password is required.");
    
    if (!this.errors.length) {
      return true;
    }
    return false;
  }
  login(): void {
    if (this.checkform()) {
      const request = {
        uname: this.uname,
        pass: this.pass,
      };
      login(request).then(result=>{
        if(result.error === null) {
          this.$router.push("/Read");
        } else {
          this.errors.splice(0);
          this.errors.push(result.error);
        }
      });
      
    }
  }
}
</script>