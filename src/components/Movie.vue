<template>
  <div class="movie">
    <div class="item" v-for="item in list" :key="item.imdbID">
      <h2>{{item.Title}}</h2>
      <div>
        <img
          width="200"
          :src="item.Poster"
        />
      </div>
      <p>({{item.Year}})</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Vue,Prop} from 'vue-property-decorator';
@Component
export default class Movie extends Vue{
  @Prop() private list!: [];
}
</script>

<style scoped lang="scss">
.movie{
  display: flex;
  flex-wrap: wrap;
  .item{
    width:25%;
    text-align: center;
    min-width: 300px;
  }
}
</style>