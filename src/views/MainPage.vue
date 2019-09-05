<template>
  <div>
    <navigation title="メイン" />
    <main>
      <div v-for="category in all" :key="category.label" class="category">
        <h2 class="category-label">{{ category.label }}</h2>
        <ul class="list">
          <li v-for="item in category.list" :key="item.id" class="item">{{ item.name }}</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'main-page',
  components: {
    Navigation
  },
  computed: {
    all() {
      return this.$store.getters.mylistTypes.map(type => ({
        label: type,
        list: this.$store.getters.mylist(type)
      }))
    }
  },
  created() {
    this.$store.dispatch('loadMain')
  }
}
</script>

<style scoped>
.category {
  border-top: 2px solid #000;
}

.list {
  padding: 0;
  margin: 20px 0;
  display: flex;
  list-style: none;
}

.item {
  margin: 0;
  padding: 10px 20px;
  border: 2px solid #000;
  margin-right: 10px;
}
</style>
