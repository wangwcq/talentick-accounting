<template lang="pug">
ui-container
  ui-card.mt.mb
    router-link(to="/member/books")
      ui-button 返回账册
  ui-card(header="当前账册").mb
    van-cell(title="YS" is-link to="/member/books/1")
  ui-card(header="选择账册").mb
    van-search(placeholder="搜索账册")
    van-cell(title="创建账册" is-link to="/member/books/new-book")
    van-cell(title="我" is-link)
    van-cell(title="YS" is-link)
    van-cell(title="YL" is-link)
    van-cell(title="YS2" is-link)
</template>

<script>
export default {
  name: 'MemberBooksSelectBook',
};
</script>

<style lang="scss" scoped></style>
