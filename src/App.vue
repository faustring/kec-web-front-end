<template>
  <div id="app">
    <div id="topBar">
      <div id="logo">K.E.C</div>
      <div id="masterMenu">
        <span>나의 정보</span>
        <span>로그인</span>
      </div>
    </div>
    <div id="boxWrap">
      <div class="box"><span>지도</span></div>
      <div class="box"><span>지도</span></div>
      <div class="box"><span>지도</span></div>
      <div class="box"><span>지도</span></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
  height: 30px;
}

#boxWrap {
  float: left;
  width: 100px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #4576DC;
  opacity: 0.8;
  border-radius: 15px;
  margin-top: 5px;
  color: #769C29;
  text-align: center;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>
