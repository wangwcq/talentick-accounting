<template lang="pug">
ui-container
  ui-card.mt.mb
    router-link(to="/member/my")
      ui-button 返回 我的
  change-password(@after-submit="goBack")
</template>

<script>
export default {
  name: 'Component',
  components: {
    ChangePassword: require('../../../components/ops/ChangePassword.vue')
      .default,
  },
  methods: {
    goBack() {
      this.$router.push('/member/my');
    },
  },
};
</script>

<style lang="scss" scoped></style>
