<template>
  <div>
    <section class="hero is-link">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">Book Title</h1>
          <h3 class="subtitle">Book Description given when creating book</h3>
        </div>
      </div>
    </section>
    <div class="media-content">
      <div class="field notification">
        <p class="control">
          <textarea v-model="book" class="textarea" rows="25" cols="200" placeholder="start writing..."></textarea>
        </p>
      </div>
    </div>
    <button class="button is-link mr-5 ml-5"  type="submit" value="Submit input" @click="save">Save Draft</button>
    <button class="button is-link" type="submit" value="Submit input" @click="publish">Publish</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class EditBook extends Vue {
private book = "";
    save(): void {
        const request = {
        book: this.book,
      };
    
  }
   publish(): void {
       const request = {
        book: this.book,
      };
    
  }
  
}
</script>
