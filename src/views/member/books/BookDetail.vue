<template lang="pug">
ui-container
  ui-card.mt.mb
    router-link(to="/member/books") 
      ui-button 返回账册
  ui-card(header="账册信息")
    app-field(label="账册名称" v-model="form.title")
    app-field(label="模板")
      ui-radio-group(v-model="form.template")
        ui-radio-button(label="个人账本")
        ui-radio-button(label="团队旅行账本")
        ui-radio-button(label="班级账本")
        ui-radio-button(label="小规模会计准则")
        ui-radio-button(label="一般纳税人会计准则")
  ui-card
    router-link(to="/member/books")
      ui-button 保存
</template>

<script>
export default {
  name: 'MemberBookDetail',
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style lang="scss" scoped></style>
