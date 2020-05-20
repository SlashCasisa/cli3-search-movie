<template>
    <div class="index-container">
        <Header :title="title"/>
        <Search @clickSearch="clickSearch"/>
        <p className="App-intro">{{tips}}</p>
        <Movie :list="list"/>
    </div>
</template>

<script lang="ts">
// import Header from '@/components/header.vue'
// import Search from '@/components/search.vue'
// import Movie from '@/components/movie.vue'
// import { Component } from 'vue-property-decorator'
// export default {
//     name: 'index',
//     components: {
//         Header,
//         Search,
//         Movie
//     }
import {Component,Vue} from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'// @ is an alias to /src
import Movie from '@/components/Movie.vue'
import {getMovieList} from '@/api/search'
// export interface dataX{
//   Search: Array<any>,
//   totalResults: String,
//   Response: string
// }
@Component({
    components:{
        Header,
        Search,
        Movie
    }
})
/* eslint-disable no-console */
export default class Index extends Vue{
    private title:string = 'HOOKED'
     list=[]
    private tips:string = 'Sharing a few of our favourite movies'
    // 生命周期
    created() { 
        this.getMovie('man')
        window.addEventListener('scroll',this.throttle(this.scroll, 2000))
    }
    private clickSearch(ply:string){
        console.log(ply,'ply')
        this.getMovie(ply)
    }
    private async getMovie(ply:string){
        this.tips = 'loading...'
        let params={
            s: ply,
            apikey: '4a3b711b'
        }
        console.log('getMovie',ply,'*****')
        // getMovieList(params).then((response)=>{
        //     console.log(response,'%%%%%%%data%%%')
        // })
        let data:any = await getMovieList(params)
        console.log(data.Search,'%%%%%%%data%%%',data.totalResults)
        if(data.totalResults>0){
            this.list = data.Search
            console.log(this.list)
        }
        this.tips = 'Sharing a few of our favourite movies'
        // this.$http.get(`https://www.omdbapi.com/?s=${params.s}&apikey=${params.apikey}`).then((response) => {
        //     console.log(response.data.totalResults,'******888')
        //     let data = response.data
        //     if(data.totalResults>0){
        //         this.list = data.Search
        //     }
        //     this.tips = 'Sharing a few of our favourite movies'
        // })
        
    }
   private throttle(fn:any, interval:any){
    let last = 0 //记录时间
    return function(this:any){
     let content = this//记录上下文。
     let args = arguments//记录参数
     let now = + new Date()
    //  console.log(content,'content',args,'args')
     if( now - last > interval){
        last = now
        fn.apply(content, args)
     }
    }
   }
    private scroll(){
        console.log('滚动条')
    }
}

</script>