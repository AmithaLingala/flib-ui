<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <pre>{{content}}
  </pre>
  </div>
</template>

<script lang="ts">
import { getPages } from "@/apis/user";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Book extends Vue {
  private title = "";
  private content = "";
  created() {
    getPages(this.$route.query.id).then((res) => {
      if (res.error === null) {
        this.title = res.response[0].title;
        this.content = res.response[0].content;
      }
    });
  }
}
</script>
