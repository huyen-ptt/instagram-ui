<template>
  <div class="container-page-me">
    <div class="header">
      <div class="logo-big-header">Logo</div>
      <div class="header-right">
        <div class="wrapper-link">
          <div class="item-link">Home</div>
          <div class="item-link">Skills</div>
          <div class="item-link">Project</div>
        </div>
        <div class="app">
          <div class="app-logo-one">
            <img class="logo-header one" src="@/assets/page_new/twice.png"/>
          </div>
          <div class="app-logo-one">
            <img class="logo-header two" src="@/assets/page_new/s.png"/>
          </div>
          <div class="app-logo-three">
            <img class="logo-header three" src="@/assets/page_new/camera.png"/>
          </div>
          <div class="app-logo-four">
            <img class="logo-header four" src="@/assets/page_new/in.png"/>
          </div>
        </div>
        <button class="btn-header">Let’s connect</button>
      </div>
      <div class="icon">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    <div class="section-one">
      <div>
        <div class="title-one">
          <div class="welcome">Welcome my portfolio</div>
          <p class="loi-chao">Hi! I’m web designer
            and UI/UX designer</p>
        </div>
        <button class="btn-section-one">
          CONTECT US
        </button>
      </div>
      <img class="logo-section-one" src="@/assets/section-one.png"/>
    </div>
    <div class="arrow-luot">
      <img class="luot" src="@/assets/page_new/luot.png"/>
    </div>
    <div class="section-two">
      <div class="about">About me</div>
      <div class="section-two-right">
        <div>
          <img src="@/assets/section-one.png"/>
        </div>
        <div class="title">
          <div class="title-big">Hi! I am Ankit yadav, a web designer/developer focused on crafting great web
            experiences. Designing and
            Coding have been my passion since the days I started working with computers but I found myself into web
            design/development since 2007. I enjoy creating beautifully designed, intuitive and functional websites.
          </div>
          <div class="bao-btn">
            <button class="btn-secton-two">Download CV</button>
            <img class="arrow" src="@/assets/page_new/arrow-bottom.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="app">
        <div class="app-logo-one">
          <img class="logo-header one" src="@/assets/page_new/twice.png"/>
        </div>
        <div class="app-logo-one">
          <img class="logo-header two" src="@/assets/page_new/s.png"/>
        </div>
        <div class="app-logo-three">
          <img class="logo-header three" src="@/assets/page_new/camera.png"/>
        </div>
        <div class="app-logo-four">
          <img class="logo-header four" src="@/assets/page_new/in.png"/>
        </div>
      </div>
    </div>
    <div class="cuc-one"></div>
    <div class="cuc-two"></div>
  </div>
</template>
<style scoped lang="scss">
.container-page-me {
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  font-family: 'Lexend', sans-serif;
  .icon{
    display: none;
  }
  .header {
    padding: 30px 188px 20px 117px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-big-header {
      font-weight: 500;
      font-size: 40px;
      line-height: 50px;
      color: #000000;
      cursor: pointer;
    }

    .fa-bars {
      display: none;
    }

    .header-right {
      display: flex;
      align-items: center;

      .wrapper-link {
        display: flex;
        align-items: center;
        gap: 122px;
        margin-right: 48px;

        .item-link {
          font-weight: 400;
          font-size: 20px;
          line-height: 25px;
          cursor: pointer;
        }
      }

      .btn-header {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        background: #D9D9D9;
        border-radius: 11px;
        padding: 18px 22px;
        color: #000000;
        border: 0;
        cursor: pointer;

        &:hover {
          background: grey;
        }
      }


    }

  }

  .app {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-right: 16px;
    cursor: pointer;

    .app-logo-one {
      border-radius: 999px;
      padding: 20px;
      border: 1px solid #5EA7FF;
    }

    .app-logo-three {
      border-radius: 999px;
      padding: 20px;
      border: 1px solid #FF78C7;
    }

    .app-logo-four {
      border-radius: 999px;
      padding: 20px;
      border: 1px solid #0A3586;
    }
  }

  .logo-header {
    width: 35px;
    height: 35px;
    object-fit: contain;
  }

  .logo-section-one {
    width: 700px;
    height: 700px;
  }

  .section-one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 75px 136px 120px;

    .welcome {
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
      color: #000000;
    }

    .loi-chao {
      font-weight: 600;
      font-size: 48px;
      line-height: 60px;
      color: #000000;
      width: 584px;
      margin-bottom: 45px;
    }

    .btn-section-one {
      background: #D9D9D9;
      border-radius: 19px;
      font-weight: 500;
      font-size: 16px;
      padding: 25px 82px;
      line-height: 21px;
      border: 0;
      color: #000000;

      &:hover {
        cursor: pointer;
        background: #b3122a;
      }
    }
  }

  .arrow-luot {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 79px;

    .luot {
      width: 143px;
      height: 112px;
    }
  }

  .section-two {
    .about {
      font-weight: 600;
      font-size: 48px;
      line-height: 60px;
      color: #000000;
      text-align: center;
      margin-bottom: 51px;
    }

    .section-two-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 85px 0 150px;
      gap: 77px;
      margin-bottom: 150px;

      .title-big {
        font-weight: 400;
        font-size: 24px;
        width: 955px;
        margin-bottom: 61px;
      }

      .bao-btn {
        position: relative;

        .btn-secton-two {
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: #FFFFFF;
          padding: 18px 56px 18px 22px;
          background: linear-gradient(180deg, #05E0C6 0%, rgba(82, 101, 137, 0.64) 100%);
          border-radius: 11px;
          border: 0;

          &:hover {
            cursor: pointer;
            background: #42b983;
          }
        }

        .arrow {
          position: absolute;
          top: 10px;
          left: 137px;
          object-fit: contain;
          width: 38px;
          height: 38px;
        }
      }


    }
  }

  .footer {
    display: flex;
    justify-content: center;
    padding-bottom: 240px;
    margin-bottom: 43px;
  }

  .cuc-one {
    width: 617px;
    height: 474px;
    background: linear-gradient(180deg, #E4CA3F 0%, rgba(29, 151, 129, 0) 100%);
    border-radius: 125px;
    position: absolute;
    left: -166px;
    bottom: -282px;
  }

  .cuc-two {
    width: 617px;
    height: 474px;
    background: linear-gradient(180deg, #E4CA3F 0%, rgba(29, 151, 129, 0) 100%);
    border-radius: 125px;
    position: absolute;
    right: -406px;
    bottom: -325px;
    margin-top: 20px;
  }
}
@media (max-width: 768px) {
  .container-page-me {
    padding: 15px 24px 0 24px;

    .header {
      padding: 0;

      .header-right {
        display: none;
      }

      .fa-bars {
        display: block;
        font-size: 25px;
      }
    }

    .section-one {
      padding: 55px 0 0;
      position: relative;

      .title-one {
        display: flex;
        flex-direction: column;
      }

      .welcome {
        font-size: 20px;
        z-index: 3;
      }

      .loi-chao {
        font-size: 35px;
        line-height: 38px;
        width: 340px;
        margin-bottom: 28px;
        z-index: 3;
      }

      .btn-section-one {
        padding: 12px;
        font-weight: bold;
        font-size: 12px;
        line-height: 8px;
      }

      .logo-section-one {
        height: 268px;
        width: 268px;
      }

      .logo-section-one {
        position: absolute;
        right: -5px;
        top: 81px;
        margin-bottom: 30px;
        z-index: 1;
      }
    }

    .arrow-luot {
      margin-top: 100px;
      margin-bottom: 0;
    }

    .section-two {
      .about {
        font-size: 30px;
        line-height: 29px;
        margin-bottom: 20px;
      }

      .section-two-right {
        padding: 0;
        margin-bottom: 100px;
        .title-big {
          font-size: 15px;
          margin-bottom: 30px;
          width: 317px;
        }

        .bao-btn {
          display: flex;
          justify-content: center;

          .btn-secton-two {
            border-radius: 7px;
            padding: 11px 32px 11px 11px;
            font-size: 13px;
            line-height: 8px;
          }

          .arrow {
            width: 17px;
            height: 23px;
            top: 4px;
            left: 193px;
          }
        }
      }

    }
    .app {
      margin-right: 0;

      .app-logo-one {
        padding: 16px;
      }

      .app-logo-three {
        padding: 16px;
      }

      .app-logo-four {
        padding: 16px;
      }


    }
    .logo-header{
      width: 12px;
      height: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer{
      padding-bottom:0px ;
      margin-bottom: 0;

    }
    .cuc-one{
      border-radius: 30px;
      width: 160px;
      height: 124px;
      left: -36px;
      bottom: -53px;
    }
    .cuc-two{
      border-radius: 30px;
      width: 167px;
      height: 127px;
      right: -58px;
      bottom: -78px;
    }
  }
}
@media (max-width: 415px) {
  .container-page-me {
    padding: 15px 24px 0 24px;

    .header {
      padding: 0;

      .header-right {
        display: none;
      }

      .fa-bars {
        display: block;
        font-size: 25px;
      }
    }

    .section-one {
      padding: 55px 0 0;
      position: relative;

      .title-one {
        display: flex;
        flex-direction: column;
      }

      .welcome {
        font-size: 15px;
        z-index: 3;
      }

      .loi-chao {
        font-size: 30px;
        line-height: 38px;
        width: 340px;
        margin-bottom: 28px;
        z-index: 3;
      }

      .btn-section-one {
        padding: 4px 6px;
        font-weight: bold;
        font-size: 6px;
        line-height: 8px;
      }

      .logo-section-one {
        height: 236px;
        width: 236px;
      }

      .logo-section-one {
        position: absolute;
        right: -5px;
        top: 97px;
        margin-bottom: 30px;
        z-index: 1;
      }

    }

    .arrow-luot {
      margin-top: 100px;
      margin-bottom: 0;
    }

    .section-two {
      .about {
        font-size: 23px;
        line-height: 29px;
      }

      .section-two-right {
        padding: 0;

        .title-big {
          font-size: 10px;
          margin-bottom: 8px;
          width: 234px;
        }

        .bao-btn {
          display: flex;
          justify-content: center;

          .btn-secton-two {
            border-radius: 2px;
            padding: 5px 15px 5px 6px;
            font-size: 5px;
            line-height: 6px;
          }

          .arrow {
            width: 10px;
            height: 10px;
            top: 3px;
            left: 130px;
          }
        }
      }

    }
    .app {
      margin-right: 0;

      .app-logo-one {
        padding: 12px;
      }

      .app-logo-three {
        padding: 12px;
      }

      .app-logo-four {
        padding: 12px;
      }


    }
    .logo-header{
      width: 12px;
      height: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .footer{
      padding-bottom:0px ;
      margin-bottom: 0;

    }
    .cuc-one{
      border-radius: 30px;
      width: 149px;
      height: 114px;
      left: -54px;
      bottom: -71px;
    }
    .cuc-two{
      border-radius: 30px;
      width: 149px;
      height: 114px;
      right: -74px;
      bottom: -82px;
    }
  }


}

</style>

<script>
</script>