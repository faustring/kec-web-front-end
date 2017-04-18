<template>
  <div id="app">
    <div id="topBar">
      <router-link to="/">
        <div id="logo">K.E.C</div>
      </router-link>
      <div id="masterMenu">
        <router-link to="/mypage"
                     v-if="val.login">
          <span>나의 정보</span>
        </router-link>
        <button class="btn btn-default"
                type="button"
                v-on:click="login">로그인</button>
      </div>
    </div>
    <div id="boxWrap">
      <router-link to="/map">
        <div class="box">
          지도
        </div>
      </router-link>
      <router-link to="/rank">
        <div class="box">
          랭킹
        </div>
      </router-link>
      <router-link to="/list">
        <div class="box">
          리스트
        </div>
      </router-link>
      <router-link to="/map">
        <div class="box">
          지도
        </div>
      </router-link>
    </div>
    <router-view id="router"></router-view>
    <div class="modal fade bs-example-modal-sm"
         tabindex="-1"
         role="dialog"
         aria-labelledby="mySmallModalLabel"
         id="loginModal">
      <div class="modal-dialog modal-sm"
           role="document">
        <div class="modal-content">
          asdfasdfsdaf
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as jQuery from 'jquery';

export default {
  name: 'app',
  data() {
    return {
      val: {
        login: false,
      },
      layer: {
        login: false,
      },
    };
  },
  methods: {
    login() {
      console.log('text');
      jQuery('#loginModal').show();
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4576DC;
}

#logo {
  float: left;
  margin-left: 10px;
  font-size: 25px;
  color: #ffffff;
}

#masterMenu {
  float: right;
  color: #ffffff;
  margin-right: 10px;
}

#topBar {
  background-color: #192b50;
  opacity: 0.7;
  height: 40px;
}


#boxWrap {
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 480px) {
  .box {
    width: 110px;
    height: 110px
  }
  #boxWrap {
    width: 100%;
    height: 100px;
    margin-top: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .box {
    height: 100px;
  }
  #boxWrap {
    flex-direction: column;
    width: 100px;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media only screen and (min-width: 1200px) {
  .box {}
  #boxWrap {
    flex-direction: column;
    width: 100px;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
}

.box {
  background-color: #4576DC;
  opacity: 0.8;
  border-radius: 15px;
  color: #769C29;
  text-align: center;
  margin-top: 5px;
  margin-left: 5px;
}

#boxWrap {
  float: left;
}




#router {
  height: 700px;
  margin: 20px;
}



html,
body {
  margin: 0;
  padding: 0;
}
</style>
