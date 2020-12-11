<template lang="pug">
ui-container
  ui-card.mt
    ui-flex(row a-center between)
      ui-flex(zero)
        router-link(to="/member/books/select-book")
          ui-button 当前账册：YS
      ui-flex(zero).ml
        router-link(to="/")
          ui-button 注销
  ui-card.mb
    van-grid(:column-num="5" clickable)
      van-grid-item(to="/member") 首页
      van-grid-item(to="/member/posts") 记账记录
      van-grid-item(to="/member/budgets") 预算
      van-grid-item(to="/member/books") 账册
      van-grid-item(to="/member/my") 我的
  router-view
</template>

<script>
export default {
  name: 'MemberContainer',
};
</script>

<style lang="scss" scoped></style>
