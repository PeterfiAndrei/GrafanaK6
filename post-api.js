import http from 'k6/http'
import {check} from 'k6'

export const options = {
    vus: 2,
    // iterations:4
    duration: '2s'
}
const url = 'https://reqres.in/api/users'

const formData = {
    "name":"Andrei",
    "job":"QA"
}

const data= open('./payload.json')


export default function(){
    // const response = http.post(url, formData);
    const response = http.post(url, data);//you can use a json instead
    console.log("*** printing response ***", response.body)
    check(response, { 'status code validation': (response) => response.status == 201,
                      'response Id Validation' :(response) => response.body.includes('id')
     })

}