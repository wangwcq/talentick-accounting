<template lang="pug">
ui-container
  ui-card.mt.mb
    router-link(to="/member/budgets")
      ui-button 返回预算
  ui-card(header="分类预算配置").mt
    app-field(label="账册")
    app-field(label="分类")
    app-field(label="预算金额")
  ui-card.mb
    router-link(to="/member/budgets")
      ui-button 保存
  ui-card(header="分类预算执行情况").mb
    van-cell(title="账户" label="描述" value="200.00" is-link to="/member/posts/1")
</template>

<script>
export default {
  name: 'BudgetCategoryDetail',
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style lang="scss" scoped></style>
