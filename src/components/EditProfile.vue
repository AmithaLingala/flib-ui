<template>
  <div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Profile</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field label="Update Profile Picture"></b-field>
        <b-field class="file is-primary" :class="{'has-name': !!file}">
          <b-upload v-model="file" class="file-label" asset="image/*">
            <span class="file-cta">
              <b-icon class="file-icon" icon="upload"></b-icon>
              <span class="file-label">Click to upload</span>
            </span>
            <span class="file-name" v-if="file">{{ file.name }}</span>
          </b-upload>
        </b-field>

        <b-field label="Display Name">
          <b-input type="Text" v-model="name"></b-input>
        </b-field>
        <b-field label="profile_desc">
          <b-input
            v-model="profileDesc"
            maxlength="200"
            type="textarea"
            placeholder="Tell us something about yourself"
          ></b-input>
        </b-field>
        <b-field label="Social links">
          <b-input v-model="links[0].title" type="Text" placeholder="Title"></b-input>
          <b-input v-model="links[0].href" type="Text" placeholder="Link"></b-input>
        </b-field>
        <b-field>
          <b-input v-model="links[1].title" type="Text" placeholder="Title"></b-input>
          <b-input v-model="links[1].href" type="Text" placeholder="Link"></b-input>
        </b-field>
        <b-field>
          <b-input v-model="links[2].title" type="Text" placeholder="Title"></b-input>
          <b-input v-model="links[2].href" type="Text" placeholder="Link"></b-input>
        </b-field>
        <br />
      </section>

      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$emit('close')">Close</button>
        <button
          class="button is-link"
          type="submit"
          value="Submit input"
          @click="updateProfile()"
        >Update</button>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { getUserDetails, getPP } from "../apis/user";
import { update, updatepp } from "../apis/user";
@Component
export default class EditProfile extends Vue {
  @Prop() private email!: string;
  @Prop() private password!: string;
  private file: any | null;
  private name = "";
  private profileDesc = "";
  
  private links: Array<any> = [
    {
      title: "",
      href: "",
    },
    {
      title: "",
      href: "",
    },
    {
      title: "",
      href: "",
    },
  ];
  data() {
    return {
      file: null,
    };
  }
  async updateProfile(): Promise<void> {
    const request = {
      name: this.name,
      profileDesc: this.profileDesc,
      links: this.links,
    };
    const result = await update(request);
    if (result.error === null) {
      this.$router.go(0);
    }
  }
  @Watch("file")
  private async fileChanged() {
    if (this.file) {
      console.log(this.file);
      const reader = new FileReader();
      updatepp(this.file).then((result) => {
        console.log(result);
      });
    }
  }
}
</script>