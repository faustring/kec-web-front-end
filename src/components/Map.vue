<template>
  <div class="map"
       ref="map">
    <div id="map">
    </div>
  </div>
</template>

<script>
export default {
  name: 'map',
  data() {
    return {
      msg: 'This is Map',
    };
  },
  head: {
    script: [
      {
        type: 'text/javascript',
        src: 'https://openapi.map.naver.com/openapi/v3/maps.js?clientId=kuDmh2FluSU7OTRRY6c1',
      },
    ],
  },
  mounted() {
    window.onload = () => {
      const map = new window.naver.maps.Map(this.$refs.map);
      map.setOptions('mapTypeControl', true);
    };
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

#map {
  width: 100%;
  height: 600px;
}
</style>
