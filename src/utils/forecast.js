// const request = require('request')


// const forecast = (latitude,logitude,callback)=>{
  
//     //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2lkZGFydGhyYWh1bDA3IiwiYSI6ImNrOW5nMDNyZzAxeWIzaG53Yml1NGRpOXUifQ.biqN1pCQMaHoxYrl3ZfZ_Q&limit=1'

   

//         const url = 'http://api.weatherstack.com/current?access_key=4d8d6332a648231a7c48741b84fa0db6&query=' + latitude + ',' + logitude + '&units=f'

//         request({url:'url',json:true},(error,response)=>{

//             if(error){
//                 callback('unable to connect',undefined)

//             }
//             else if(response.body.error){
//                 callback('unable to find location',undefined)
//             }
//             else{
//                 callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')

//             }

//         })

// }

const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4d8d6332a648231a7c48741b84fa0db6&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}
module.exports = forecast




