<template lang="pug">
ui-container
  ui-card(header="摘要").mb
    ui-carousel(:touchable="false" type="card")
      ui-carousel-item(v-for="book in books" :key="book.name")
        router-link(to="/member/books")
          div.card
            h1 {{ book.name }}
            van-cell(title="资产余额" value="10000.00")
            van-cell(title="负债余额" value="1000.00")
  ui-card(header="创建记录").mb
    router-link(to="/member/posts/post")
      ui-button(type="primary") 记账
  ui-card(header="近期记录").mb
    van-cell(title="分类" label="摘要记录" value="60.00" is-link to="/member/posts/1")
</template>

<script>
export default {
  name: 'MemberHome',
  data() {
    return {
      books: [{ name: '我' }, { name: 'YS' }],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: rgba(#f0f0f0, 0.9);
  box-sizing: border-box;
  padding: 30px;
  height: 100%;
}
</style>
