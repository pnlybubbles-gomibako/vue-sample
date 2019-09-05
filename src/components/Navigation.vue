<template>
  <header>
    <h1>{{ title }}</h1>
    <div id="nav">
      <router-link class="link" to="/">メイン</router-link>
      <router-link class="link" to="/edit/alpha">alpha編集</router-link>
      <router-link class="link" to="/edit/bravo">bravo編集</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: 'navigation',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.link {
  padding: 0 10px;
}

.link + .link {
  border-left: 1px solid #000;
}
</style>


