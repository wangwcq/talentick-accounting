<template lang="pug">
div
  ui-card(header="修改密码")
    app-field(label="原密码" v-model="form.oldPassword")
    app-field(label="新密码" v-model="form.newPassword")
    app-field(label="重复新密码" v-model="form.newPassword2")
  ui-card.mb
    ui-button(type="primary" @click="handleSubmit") 保存
</template>

<script>
export default {
  name: 'ChangePassword',
  emits: ['after-submit'],
  data() {
    return {
      form: {},
    };
  },
  methods: {
    async handleSubmit() {
      this.$emit('after-submit');
    },
  },
};
</script>

<style lang="scss" scoped></style>
