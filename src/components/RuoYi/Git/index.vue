<template>
  <div>
    <svg-icon icon-class="github" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'RuoYiGit',
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