<template>
  <div class="section-two" id="about">
    <div>
      <img class="logo-section-three"
           src="https://icdn.dantri.com.vn/2021/03/23/meo-chup-anh-do-uong-cuc-dep-bang-dien-thoaidocx-1616516940852.jpeg"/>
    </div>
    <div class="about-me">
      <div class="title-one">About me</div>
      <div class="title-two">A dedicated Front-end Developer based in Belgrade, Serbia 📍</div>
      <div class="title-three">As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS,
        JavaScript, React,
        Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user
        experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code
        and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in
        collaborating with cross-functional teams to produce outstanding web applications.
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section-two {
  background: #FFFFFF;
  padding: 150px 0px;
  display: flex;
  gap: 100px;
  justify-content: center;

  .logo-section-three {
    width: 410px;
    height: 350px;
    border-radius: 17px;
  }

  .about-me {
    width: 480px;
    height: 230px;

    .title-one {
      color: #147efb;
      font-size: 17px;
      font-weight: 700;
      margin: 0px 0px 10px;
    }

    .title-two {
      color: #2d2e32;
      font-size: 25px;
      font-weight: 700;
      line-height: 35px;
      margin: 0px 0px 20px;
    }

    .title-three {
      color: #767676;
      font-size: 17px;
      font-weight: 500;
      line-height: 25px;
    }
  }
}
</style>