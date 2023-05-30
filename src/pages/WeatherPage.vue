<template>
  <div class="container">
    <div class="bao">
      <div class="header">
        <input class="search-area"
               type="text"
               placeholder="Search Location">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
      </div>
      <div>
        <div class="next-page">
          <img class="next-page" src="../assets/next.png" />
        </div>
        <div class="weather">
          <img class="may" src="../assets/may.png"/>
          <div class="location">
            <div class="specific-location">Mumbai</div>
            <img class="plane" src="../assets/plane.png"/>
          </div>
          <div class="o-c">
            <div class="temperature">20</div>
            <div class="C"></div>
          </div>
          <div class="warning">
            <div>
              <div class="reminder">
                <img class="icon-warning" src="../assets/warning.png"/>
                <div class="canh-bao">WARNING</div>
              </div>
              <div class="generalityy">
                <div>
                  <div class="cot-moc">% RAIN</div>
                  <div class="statistics">58%</div>
                </div>
                <div>
                  <div class="cot-moc">EXP. TIME</div>
                  <div class="statistics">02:00 PM</div>
                </div>
              </div>
              <div class="expecting-rainfall">Expecting Rainfall</div>
            </div>
            <div>
              <img class="may" src="../assets/may.png"/>
              <img class="may" src="../assets/tia-mua.png"/>
            </div>

          </div>
          <div class="generality">
            <div>
              <div class="cot-moc">TIME</div>
              <div class="statistics">11:25 AM</div>
            </div>
            <div>
              <div class="cot-moc">UV</div>
              <div class="statistics">4</div>
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

</script>
<style scoped>
.container{
  background: #FFFFFF;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  padding: 44px 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column ;
}
.warning{
  background: #FDFCFC;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 25px;
  margin-bottom: 11px;
}
.canh-bao{
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #FFD600;
}
.expecting-rainfall{
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFD600;
}
.reminder{
  display: flex;
  align-items: center;
  gap:10px;
  margin-bottom: 24px;
}
.icon-warning{
  width: 18px;
  height: 18px;
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
.generalityy{
  display: flex;
  align-items: center;
  gap:54px;
  margin-bottom: 26px;
}
.o-c{
  position: relative;
  margin-bottom: 35px;
  text-align: center;
}
.temperature{
  font-weight: 500;
  font-size: 70px;
  line-height: 105px;
}
.C{
  position: absolute;
  top:14px;
  right: 281px;
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
  justify-content: center;
  gap:11px;
  margin-bottom: 16px;
}
.search-area {
  background: #FDFCFC;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 21px 400px 21px 38px;
  width: 100%;
  border: 0;
  margin-bottom: 40px;
}
.may{
  width: 107px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
  /*padding-bottom: 41px;*/
  margin: 0 auto;
}
</style>