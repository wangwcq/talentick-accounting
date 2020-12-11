<template lang="pug">
ui-container
  ui-card.mt.mb 
    ui-flex(row center)
      h1 TalenTick 记账
  ui-card.mt.mb 正在检查登录状态……
  ui-card(header="登录")
    app-field(v-model="form.username" label="用户名")
    app-field(v-model="form.password" label="密码")
  ui-card.mb
    ui-button(@click="handleSubmitLogin") 登录
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async handleSubmitLogin() {
      // TODO
      console.log('登录');
      this.$router.push('/member');
    },
  },
};
</script>

<style lang="scss" scoped></style>
