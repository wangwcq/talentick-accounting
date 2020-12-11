<template lang="pug">
ui-container
  ui-card.mt.mb
    router-link(to="/member/books")
      ui-button 返回
  ui-card(header="分类设置")
    app-field(label="分类名称" v-model="form.title")
    app-field(label="上级分类" v-model="form.parent")
    app-field(label="分类类型")
      ui-radio-group(v-model="form.type")
        ui-radio-button(label="资产")
        ui-radio-button(label="负债")
        ui-radio-button(label="权益")
        ui-radio-button(label="收入")
        ui-radio-button(label="费用")
  ui-card
    router-link(to="/member/books")
      ui-button(type="primary") 保存
</template>

<script>
export default {
  name: 'CategoryDetail',
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style lang="scss" scoped></style>
