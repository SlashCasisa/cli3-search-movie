<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-for="item in blogPosts" :post="item" :key="item.title"/>
    <HelloWorld2 msg="Welcome to Your Vue.js + TypeScript App" names="bbb" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
import {Component,Vue} from 'vue-property-decorator';
import HelloWorld,{Post} from '@/components/HelloWorld.vue';
import HelloWorld2 from '@/components/HelloWorld2.vue'; // @ is an alias to /src
@Component({
    components:{
        HelloWorld,
        HelloWorld2,
    }
})
export default class Home extends Vue{
  private blogPosts: Post[]=[
    {
          title: 'My first blogpost ever!',
          body: 'Lorem ipsum dolor sit amet.',
          author: 'Elke',
          datePosted: new Date(2019, 1, 18),
        },
        {
          title: 'Look I am blogging!',
          body: 'Hurray for me, this is my second post!',
          author: 'Elke',
          datePosted: new Date(2019, 1, 19),
        },
        {
          title: 'Another one?!',
          body: 'Another one!',
          author: 'Elke',
          datePosted: new Date(2019, 1, 20),
        },

  ]
}

</script>
