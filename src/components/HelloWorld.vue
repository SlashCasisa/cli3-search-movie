<template>
  <div class="hello">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <p class="meta">Written by {{ post.author }} on {{ date }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
/* eslint-disable no-console */
export interface Post{
  title: string;
  body: string;
  author: string;
  datePosted: Date;
}
@Component
export default class HelloWorld extends Vue {

  @Prop() private post!: Post;
  get date() {
		return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`;
	}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
