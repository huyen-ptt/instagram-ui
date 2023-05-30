<template>
  <div class="container">

   <div class="bao">
<!--     <div>Loadingg...</div>-->
     <div class="header">
       <input v-model="search"
              @keyup.enter="SearchCountry"
              class="search-area"
              type="text"
              placeholder="Search Location">
       <i class="fa-solid fa-magnifying-glass"></i>
     </div>
     <div v-if="loadding">
       loading
     </div>
     <div v-else>
       <img class="next-page" :src="weatherInfo.current.condition.icon"/>
       <div class="weather">
         <img class="sunny" src="../assets/sunny.png"/>
         <div class="location">
           <div class="specific-location">{{ weatherInfo.location.country }}</div>
           <img class="plane" src="../assets/plane.png"/>
         </div>
         <div class="o-c">
           <div class="temperature">{{ weatherInfo.current.temp_c }}</div>
           <div class="C"></div>
         </div>
         <div class="generality">
           <div>
             <div class="cot-moc">TIME</div>
             <div class="statistics">{{ weatherInfo.location.localtime }}</div>
           </div>
           <div>
             <div class="cot-moc">UV</div>
             <div class="statistics">{{ weatherInfo.current.uv }}</div>
           </div>
           <div>
             <div class="cot-moc">% RAIN</div>
             <div class="statistics">58%</div>
           </div>
           <div>
             <div class="cot-moc">AQ</div>
             <div class="statistics">22</div>
           </div>
         </div>
         <div class="sunrise-sunset">SUNRISE & SUNSET</div>
         <div>
           <img class="forecast-chart" src="../assets/du-bao.png"/>
         </div>
         <div class="length-day">Length of day:<span class="time"> 13H 12M</span></div>
         <div class="length-day cuoi">Remaining daylight:<span class="time"> 9H 22M</span></div>
       </div>
     </div>
   </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return{
      search: '',
      weatherInfo: null,
      loadding: false
    }
  },
  created() {
    this.getWeather();
  },
  methods:{

    getWeather(){
      this.loadding = true
      axios({
        url: 'http://api.weatherapi.com/v1/current.json',
        method: 'get',
        params: {
          q: this.search || 'Ha Noi',
          key: 'e2ad66c8f98a46989b7144543231004',
          api: 'no'
        }
      }).then((resp)=> {
        console.log('respGet',resp)
        this.weatherInfo = resp.data
        this.loadding = false
      }).catch((error)=>{
        console.log(error)
        this.loadding = false
      })
    },
    // SearchCountry(){
    //   this.getWeather()
    //   q : this.search
    // }
  }
}
</script>
<style scoped>
.container{
  background: #FFFFFF;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  padding: 44px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column ;
}
.bao{
  width: 100%;
}
.length-day{
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: #9A9A9A;
  margin-bottom: 5px;
  margin-right: auto;
}
.cuoi{
  margin-bottom: 15px;
}
.time{
  color: #2C2C2C;
}
.cot-moc{
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #C4C4C4;
  margin-bottom: 2px;
}
.forecast-chart{
  /*width: 290px;*/
  /*height: 99px;*/
  margin-bottom: 16px;
}

.sunrise-sunset{
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #C4C4C4;
  margin-right: auto;
  margin-bottom: 32px;
}
.statistics{
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #9A9A9A;
}
.generality{
  display: flex;
  align-items: center;
  /*gap:54px;*/
  margin-bottom: 26px;
  justify-content: space-between;
}
.o-c{
  position: relative;
  margin-bottom: 35px;
}
.temperature{
  font-weight: 500;
  font-size: 70px;
  line-height: 105px;
}
.C{
  position: absolute;
  top:14px;
  right: -11px;
  width: 8px;
  height: 8px;
  border: 1.5px solid #2C2C2C;
  border-radius: 999px;
}

.specific-location{
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
}
.location{
  display: flex;
  align-items: center;
  gap:11px;
  margin-bottom: 16px;
}
.search-area{
  background: #FDFCFC;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 21px 400px 21px 38px;
  width: 100%;
  border: 0;
  margin-bottom: 200px;
}
.sunny{
  width: 97px;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}
.plane{
  width: 21px;
  height: 21px;
}
.time-point{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*text-align: center;*/
}

.header{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fa-magnifying-glass{
  position: absolute;
  top:21px;
  right:36px;
}
.next-page{
  width: 80px;
  height: 22px;
  margin-bottom: 41px;
}
</style>