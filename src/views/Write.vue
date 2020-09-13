<template>
  <section class="section">
    <form class="container" action="#">
      <article class="media">
        <figure class="media-left">
          <b-upload v-if="file" v-model="file">
            <div id="cover" width="235" height="601">
              <img :src="coverImage" alt="cover image" class="cover-image" />
            </div>
          </b-upload>
          <b-upload v-else v-model="file" accept="image/*">
            <img src="@/assets/default-cover.png" ratio="601by235" />
          </b-upload>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <b-field label="Add Book Title">
                <input
                  class="input"
                  v-model="bookName"
                  type="text"
                  placeholder="Book Title"
                  required
                />
              </b-field>
              <b-field label="Add Book description">
                <textarea class="textarea" v-model="bookDesc" placeholder="Description..."></textarea>
              </b-field>
              <b-field label="Add some tags">
                <b-taginput v-model="tags" ellipsis placeholder="Add a tag"></b-taginput>
              </b-field>
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <button class="button is-info" type="submit" @click="submit()">Submit</button>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <label class="checkbox">
                  <input type="checkbox" v-model="postanon" /> Post anonymously
                </label>
              </div>
            </div>
          </nav>
        </div>
      </article>
    </form>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class Write extends Vue {
  private tags: Array<string> = [];
  private file: any = null;
  private coverImage: string | ArrayBuffer | null = "";
  private bookName = "";
  private bookDesc = "";
  private postanon = false;

  submit() {
    console.log(this.tags, this.coverImage, this.bookName, this.bookDesc, this.postanon);
  }

  @Watch("file")
  private fileChanged() {
    if (this.file) {
      console.log(this.file);
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onloadend = () => {
        this.coverImage = reader.result;
        const cover = document.getElementById("cover");
        if (cover) {
          cover.style.backgroundImage = `url(${this.coverImage})`;
        }
      };
    }
  }
}
</script>
<style scoped>
.cover-image {
  width: 20em !important;
}
#cover {
  display: flex;
  align-items: center;
  height: 30em;
  background-position: center;
  background-size: 100px;
  background-blend-mode: multiply;
}
</style>