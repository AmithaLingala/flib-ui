<template>
  <div class="container mt-3">
    <br />
    <br />
    <h1 class="title has-text-centered">Welcome to Flib Sign Up</h1>
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
                    User name
                    <input v-model="uname" class="input is-primary" type="text" required />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    Password
                    <input v-model="pass" class="input is-primary" type="password" required />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    Confrim password
                    <input
                      v-model="cpass"
                      class="input is-primary"
                      type="password"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    Email
                    <input v-model="email" class="input is-primary" type="email" />
                  </div>
                </div>
                <button
                  class="button is-link"
                  type="submit"
                  value="Submit input"
                  @click="signup"
                >Sign up</button>
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
import { register } from "../apis/user";
@Component
export default class Signup extends Vue {
  private uname = "";
  private errors: string[] = [];
  private pass = "";
  private cpass = "";
  private email: string | null = null;
  checkform(): any {
    this.errors.splice(0);
    if (!this.uname) this.errors.push("username is required");
    if (!this.pass) this.errors.push("password is required.");
    if (this.pass != this.cpass)
      this.errors.push("passwords  are not matching.");
    if (!this.errors.length) {
      return true;
    }
    return false;
  }
  signup(): void {
    if (this.checkform()) {
      const request = {
        uname: this.uname,
        pass: this.pass,
        cpass: this.cpass,
        email: this.email,
      };
      register(request).then(result=>{
        if(result.error === null) {
          this.$router.push("/login");
        } else {
          this.errors.splice(0);
          this.errors.push(result.error);
        }
      });
      
    }
  }
}
</script>