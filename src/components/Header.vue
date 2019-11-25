<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script lang="ts">
import {Component,Prop,Vue} from 'vue-property-decorator';
@Component
export default class Header extends Vue{
  @Prop() private title!: string;
}
</script>

<style scoped lang="scss">
.header{
  background: #282c34;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
}
</style>
