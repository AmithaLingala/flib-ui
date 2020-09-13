<template>
  <section class="section">
    <div class="container is-fluid columns">
      <div class="column is-2">
        <div class="card box">
          <div class="block">
            <img id="profile-image" alt="profile picture" />
            {{userDetails.uname}}
          </div>

          <b-menu class="is-custom-mobile">
            <b-menu-list>
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
              <b-field :label="userProfile.name"></b-field>
            </b-field>
          </div>
          <div class="card box">
            <b-field label="Profile Description">
              <div class="content">{{userProfile.profile_desc}}</div>
            </b-field>
          </div>
          <b-field label="Social links">
            <a
              v-for="(link, i) in userProfile.links"
              :key="i"
              :href="link.href"
              class="button mr-3"
              target="_blank"
            >{{link.title}}</a>
          </b-field>
          <b-button type="is-link" @click="cardModal()">Edit Profile</b-button>
        </div>
        <div v-show="menu==='reading'">
          <div class="subtitle">Add your Favorite Book here and enjoy reading !!</div>
        </div>
        <div v-show="menu==='writing'">
          <div class="subtitle">Waiting for your story!!</div>
          <a class="button is-primary"  href='/write'>Add Book</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getUserDetails, getPP, getProfile } from "../apis/user";
import EditProfile from "@/components/EditProfile.vue";
@Component({
  components: {
    EditProfile,
  },
})
export default class Profile extends Vue {
  private menu = "info";
  private userDetails = getUserDetails();
  @Prop({
    default: () => {
      return { links: [] };
    },
  })
  private userProfile: any;

  private links: string[] = [];
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
    getProfile().then((response: any) => {
      if (response.data) {
        this.userProfile = response.data;
        console.log(this.userProfile);
      }
    });
  }

  private cardModal() {
    this.$buefy.modal.open({
      parent: this,
      component: EditProfile,
      hasModalCard: true,
      customClass: "custom-class custom-class-2",
      trapFocus: true,
    });
  }
}
</script>