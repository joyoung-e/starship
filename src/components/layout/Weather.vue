<template>
    <div class="weather">
        <span>{{ weatherInfo.temp}}&#8451; </span>
        <span>{{ weatherInfo.main}}</span>
        <span><img :src="`https://openweathermap.org/img/wn/${weatherInfo.icon}.png`" /></span>
    </div>
</template>

<script>
    // 참고사이트 : https://openweathermap.org/weather-conditions
    import axios from 'axios'
    export default {
        data(){
            return {
                weatherInfo : { temp:0, main:"", icon:"" } 
            }
        },
        // async created(){
        //     try {
        //       let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&appid=b22cc400a3b25ecf2837a48f16606d93")
        //       let result = await response.json()
        //       console.log(result)
        //       this.weatherInfo.temp = Math.round(result.main.temp - 273.15)
        //       let main = result.weather[0].main
        //       if (main=="Clear") {
        //         this.weatherInfo.main = "맑음"
        //       } else if (main=="Clouds"){
        //         this.weatherInfo.main = "구름"
        //       } else if (main=="Mist" || main=="Smoke" || main=="Haze" || main=="Dust" || main=="Fog" || main=="Sand" || main=="Ash" || main=="Squall" || main=="Tornado") {
        //         this.weatherInfo.main = "안개"
        //       } else if (main=="Rain"){
        //         this.weatherInfo.main = "비"
        //       } else if (main=="Drizzle"){
        //         this.weatherInfo.main = "이슬비"
        //       } else if (main=="Snow"){
        //         this.weatherInfo.main = "눈"
        //       } else if (main=="Thunderstorm"){
        //         this.weatherInfo.main = "폭풍우"
        //       }
        //       this.weatherInfo.icon = result.weather[0].icon
        //       console.log(this.weatherInfo)   
        //     }  catch (error) {
        //         console.log(error)
        //     }
        // }
        created(){
           axios.get("https://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&appid=b22cc400a3b25ecf2837a48f16606d93")
           .then((response)=>{
              console.log(response)
              let result = response.data
              this.weatherInfo.temp = Math.round(result.main.temp - 273.15)
              let main = result.weather[0].main
              if (main=="Clear") {
                this.weatherInfo.main = "맑음"
              } else if (main=="Clouds"){
                this.weatherInfo.main = "구름"
              } else if (main=="Mist" || main=="Smoke" || main=="Haze" || main=="Dust" || main=="Fog" || main=="Sand" || main=="Ash" || main=="Squall" || main=="Tornado") {
                this.weatherInfo.main = "안개"
              } else if (main=="Rain"){
                this.weatherInfo.main = "비"
              } else if (main=="Drizzle"){
                this.weatherInfo.main = "이슬비"
              } else if (main=="Snow"){
                this.weatherInfo.main = "눈"
              } else if (main=="Thunderstorm"){
                this.weatherInfo.main = "폭풍우"
              }
              this.weatherInfo.icon = result.weather[0].icon
           })
        }
    }
</script>

<style lang="scss" scoped>
    .weather {
        span { margin:20px }
    }
</style>