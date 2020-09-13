<template>
  <section class="section">
    <div class="container is-fluid columns">
      <div class="column is-2">
        <div class="card box">
          <div class="block">
            <img v-if="!isPPLoaded" id="profile-image" alt />
            <img v-else src="../assets/default_pp.svg" alt />
          </div>
          <b-menu class="is-custom-mobile">
            <b-menu-list label="Menu">
              <b-menu-item label="Info" @click="menu = 'info'"></b-menu-item>
              <b-menu-item label="Reading" @click="menu = 'reading'"></b-menu-item>
              <b-menu-item label="Writing" @click="menu = 'writing'"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </div>
      <div class="column is-10">
        <div v-show="menu==='info'">
          <div class="card box">
            <b-field label="Name">
              <b-field :label="userDetails.name || ''"></b-field>
            </b-field>
          </div>
          <div class="card box">
            <b-field label="Username">
              <b-field :label="userDetails.uname || ''"></b-field>
            </b-field>
          </div>
          <div class="card box">
            <b-field label="Bio">
              <div class="content">{{userDetails.bio}}</div>
            </b-field>
          </div>
          <b-button type="is-link">Edit</b-button>
        </div>
        <div v-show="menu==='reading'">reading</div>
        <div v-show="menu==='writing'">writing</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getUserDetails, getPP } from "../apis/user";
@Component
export default class Profile extends Vue {
  private menu = "info";
  private userDetails = getUserDetails();
  private pp = "";
  private isPPLoaded = false;
  constructor() {
    super();
    getPP().then((response: any) => {
      if (response.data) {
        const image: any = document.getElementById("profile-image");
        if (image !== null) {
          image.src = URL.createObjectURL(response.data);
        }
      }
    });
  }
}
</script>