// api/main.ts
import request from '@/utils/request';

// get
export function getMovieList(params:any) {
    return request({
        url: `/api?s=${params.s}&apikey=${params.apikey}`,
        // url: '/api',
        method: 'get',
        // params:params
    });
}

// post
// export function postSomeThings(params:any) {
//     return request({
//         url: '/api/',
//         method: 'post',
//         data: params
//     });
// }