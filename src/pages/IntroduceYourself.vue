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
    </div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <div class="footer">
      <div class="footer-left">
        Copyright ©2023. All rights are reserved
      </div>
      <div class="footer-right">
        <a href="https://www.linkedin.com/in/stefan-topalovic-dev/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/stefvndev">
          <i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
import SectionOne from "@/components/introduce/SectionOne.vue";
import SectionTwo from "@/components/introduce/SectionTwo.vue";
import SectionThree from "@/components/introduce/SectionThree.vue";
import SectionFour from "@/components/introduce/SectionFour.vue";

export default {
  components: {
    SectionFour,
    SectionOne,
    SectionTwo,
    SectionThree
  }

}
</script>
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

    .logo {
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

  .footer {
    background-color: #2d2e32;
    font-size: 10px;
    padding: 50px 0px;
    display: flex;
    justify-content: space-around;
    .footer-left {
      color: #ffffff;
      font-size: 17px;
      font-weight: 700;
    }
    .footer-right{
      display: flex;
      gap:15px;
      .fa-brands{
        font-size: 23px;
        color: #FFFFFF;
        &:hover{
          transform: scale(1.2);
          transition: all .2s ease-in-out;
          cursor: pointer;
        }
      }
    }
  }

}
</style>