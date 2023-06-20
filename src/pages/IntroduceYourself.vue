<template>
  <div class="container-introduce">
    <div class="header">
      <div class="logo">Stefan.dev</div>
      <ul class="link">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <div>Tech Stack</div>
        <div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_1280.png"/>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"/>
          </div>
          <div>
            <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="section-one" id="home">
      <div class="generality">
        <div class="specialized-field">Front-End React Developer</div>
        <div class="introduce">Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Belgrade, Serbia. 📍</div>
        <div class="link">
          <a target="_blank" href="https://www.linkedin.com/in/stefan-topalovic-dev/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/stefvndev">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div>
        <img class="avt" src="@/assets/page_new/avt.jpg"/>
      </div>
    </div>
    <div class="section-two" id="about">
      <div>
        <img src="https://icdn.dantri.com.vn/2021/03/23/meo-chup-anh-do-uong-cuc-dep-bang-dien-thoaidocx-1616516940852.jpeg"/>
      </div>
      <div>
        <img src="https://sass-lang.com/assets/img/styleguide/seal-black-1e36d095.png"/>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container-introduce {
  width: 100%;
  background: #FFFFFF;
  height: 100vh;
  font-size: 17px;

  .header {
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .09);
    display: flex;
    font-size: 1.7rem;
    height: auto;
    justify-content: space-between;
    left: 0;
    padding: 25px 40px 25px 50px;
    position: fixed;
    top: 0;
    width: 100%;
    .logo{
      font-size: 20px;
      font-weight: 700;
      color: #2d2e32;
    }

    .link {
      display: flex;
      gap: 2rem;
      list-style: none;

      a {
        font-size: 17px;
        color: #2d2e32;
        font-weight: 600;
        text-decoration: none;
        transition: all .23s;
      }
    }

  }

  .section-one {
    background-color: #f9f9f9;
    display: flex;
    gap: 10rem;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin-top: 70px;
    justify-content: center;
    .avt{
      width: 350px;
      height: 350px;
      border-radius: 999px;
    }
    .generality{
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 325px;
      .link{
        cursor: pointer;
        display: flex;
        gap: 1.3rem;
        margin: 2.5rem 0;
        .fa-brands{
          color: #2d2e32;
          width: 26px;
          height: 30px;

        }
      }
      .specialized-field{
        color: #555;
        font-size: 55px;
        font-weight: 700;
        line-height: 66px;
        margin:20px 0;
      }
      .introduce{
        color: #2d2e32;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        //margin-bottom: 2rem;
        //margin-top: 2rem;
      }
    }

  }
}
</style>