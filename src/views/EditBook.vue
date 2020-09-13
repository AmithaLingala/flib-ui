<template>
  <div>
    <section class="hero is-link">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">{{title}}</h1>
          <h3 class="subtitle">{{description}}</h3>
        </div>
      </div>
    </section>
    <div class="media-content">
      <div class="field notification">
        <p class="control">
          <textarea
            v-model="book"
            class="textarea"
            rows="25"
            cols="200"
            placeholder="start writing..."
          ></textarea>
        </p>
      </div>
    </div>
    <button
      class="button is-link mr-5 ml-5"
      type="submit"
      value="Submit input"
      @click="save"
    >Save Draft</button>
    <button class="button is-link" type="submit" value="Submit input" @click="publish">Publish</button>
  </div>
</template>

<script lang="ts">
import { createPage, getBookById } from "@/apis/write";
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class EditBook extends Vue {
  private book = "";
  @Prop()
  private title = "";
  private description = "";
  created() {
    getBookById(this.$route.params.id).then((res) => {
      if (res.error === null) {
        this.title = res.response.title;
        this.description = res.response.description;
      }
    });
  }
  save(): void {
    const request = {
      id: this.$route.params.id,
      title: this.title,
      content: this.book,
      published: false,
    };
    createPage(request);
  }
  publish(): void {
    const request = {
      id: this.$route.params.id,
      title: this.title,
      content: this.book,
      published: true,
    };
    createPage(request);
    this.$router.push("/");
  }
}
</script>
