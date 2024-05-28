import http from 'k6/http'
import {check} from 'k6'

export const options = {
    vus: 1,
    iterations: 2
}

let headers_api = {
    'x-apikey':'8d6e270b323ad6fe4ecb4631acb68b7b9c27e052f93591dc949b6282e9d2bdca'
}

const params = {
    headers:{
        'x-apikey':'8d6e270b323ad6fe4ecb4631acb68b7b9c27e052f93591dc949b6282e9d2bdca'
    }
}

const url = 'https://www.virustotal.com/api/v3/urls/3410dbcba7d2c3b4ed666b69bb2ddb88798918c71ff6bb1a66aafbd43ec94c97'


export default function(){
    // const res = http.get('https://www.virustotal.com/api/v3/urls/3410dbcba7d2c3b4ed666b69bb2ddb88798918c71ff6bb1a66aafbd43ec94c97',{headers:headers_api});
    const res = http.get(url,params);
    check(res, { 'status was 200': (r) => r.status === 200 });
}