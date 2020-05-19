<template>

  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Templates</h2>
    <ul>
      <li @click="jumpToPage(1)">
        <a>
          Layout
        </a>
      </li>
      <li @click="jumpToPage(2)">
        <a>
          Container-Menu-Dropdown-Table
        </a>
      </li>
      <li @click="jumpToPage(3)">
        <a>
          Pagination
        </a>
      </li>
      <!-- <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Element-UI Demo with Vue.js '
    }
  },
  methods: {
    jumpToPage(pageIndex){
      console.log(pageIndex)
      switch (pageIndex){
        case 1: 
          this.$router.push({
            path: '/layout'
          })
          break;
        case 2:
          this.$router.push({
            path: '/container-menu'
          })
          break;
        case 3:
          this.$router.push({
            path: '/pagination'
          })
          break;
        default: 
          return
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  border-bottom: 1px solid #43b983;
  cursor: pointer;
}
</style>
