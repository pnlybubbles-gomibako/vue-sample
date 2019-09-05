<template>
  <div>
    <navigation title="編集" />
    <h2>type: {{ type }}</h2>
    <main>
      <ul class="list">
        <li v-for="item in list" :key="item.id" class="item">{{ item.name }}</li>
      </ul>
    </main>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'edit-page',
  components: {
    Navigation
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    list() {
      return this.$store.getters.mylist(this.type)
    }
  }
}
</script>
<style scoped>
.list {
  margin: 0;
  padding: 0;
}

.item {
  padding: 10px 0;
  border-top: 2px solid #000;
}
</style>
