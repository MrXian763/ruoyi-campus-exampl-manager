<template>
  <div>
    <svg-icon icon-class="question" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'RuoYiDoc',
  data() {
    return {
      url: 'https://gitee.com/xianzhiyong763/college-student-forum-management-end'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>