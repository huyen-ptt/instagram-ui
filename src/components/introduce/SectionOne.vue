<template>
  <div class="section-one" id="home">
    <div class="generality">
      <div class="specialized-field">Front-End React Developer</div>
      <div class="introduce">Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Belgrade,
        Serbia. 📍
      </div>
      <div class="link">
        <a target="_blank" href="https://www.linkedin.com/in/stefan-topalovic-dev/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a target="_blank" href="https://github.com/stefvndev">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div class="array-do">
        <div class="stack">Tech Stack</div>
        <div class="wrapper-logo">
          <div class="item-logo">
            <img class="logo-img" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"/>
          </div>
          <div class="item-logo">
            <img class="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"/>
          </div>
          <div class="item-logo">
            <img class="logo-img"
                 src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"/>
          </div>
          <div class="item-logo">
            <img class="logo-img" src="https://sass-lang.com/assets/img/styleguide/seal-black-1e36d095.png"/>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img class="avt" src="@/assets/page_new/avt.jpg"/>

    </div>
  </div>
</template>
<style scoped lang="scss">
.section-one {
  background-color: #f9f9f9;
  display: flex;
  gap: 10rem;
  align-items: center;
  height: 100vh;
  width: 100%;
  //margin-top: 10px;
  justify-content: center;
  padding-bottom: 30px;
  .array-do {
    display: flex;
    align-items: center;
    gap: 30px;

    .stack {
      width: 103px;
      color: #2d2e32;
      font-size: 17px;
      font-weight: 600;
      margin: 0px 70px 0px 0px;
      padding: 0px 20px 0px 0px;
      border-right: 3px solid grey;
    }

    .wrapper-logo {
      display: flex;
      gap: 25px;

      .item-logo {
        align-items: center;
        background-color: #ffffff;
        border-radius: 999px;
        box-shadow: #000000 0px 0px 10px 0px;
        color: #767676;
        display: flex;
        font-size: 17px;
        justify-content: center;
        padding: 11px;

        .logo-img {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }
      }
    }

  }

  .avt {
    width: 350px;
    height: 350px;
    border-radius: 999px;
  }

  .generality {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 325px;

    .link {
      cursor: pointer;
      display: flex;
      gap: 1.3rem;
      margin: 2.5rem 0;

      .fa-brands {
        color: #2d2e32;
        width: 26px;
        height: 30px;

      }
    }

    .specialized-field {
      color: #555;
      font-size: 55px;
      font-weight: 700;
      line-height: 66px;
      margin: 20px 0;
    }

    .introduce {
      color: #2d2e32;
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      //margin-bottom: 2rem;
      //margin-top: 2rem;
    }
  }

}
</style>