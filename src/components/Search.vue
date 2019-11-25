<template>
  <div class="search">
    <input type="text" v-model="txt" class="search-input" @keyup.enter="clickSearch">
    <button class="search-add" @click="clickSearch">SEARCH</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch,Emit} from 'vue-property-decorator';
/* eslint-disable no-console */
@Component
export default class HelloWorld extends Vue {
  //props
  @Prop() private msg!: string
  @Prop() private names!: string
  //data
  private txt: string = ''
  // private sum: number = 0
  //computed
  get getTxt(){
    return this.txt
  }
  //methods
  @Emit('clickSearch')
  private clickSearch(){
    // this.sum++
    console.log(`sum : ${this.txt}`)
    return this.txt
  }
  //生命周期
  created(){
    // console.log('created')
  }
  //watch
  @Watch('txt') 
  changeTxt(newTxt: string, oldTxt: string){
    // console.log(`change txt: ${oldTxt} to ${newTxt}`)
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  .search-input{
    width: 40%;
    min-width: 170px;
  }
  .search-add{
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    &:hover{
      cursor: pointer;
      background-color: #282c34;
      color: antiquewhite;
    }
  }
}
</style>