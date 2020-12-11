<template lang="pug">
ui-container
  ui-card(header="记账").mt.mb
    router-link(to="/member/posts/post")
      ui-button(type="primary") 记录
  ui-card(header="即将发生 待确认").mt.mb
    van-cell(title="分类" label="摘要记录" value="60.00" is-link to="/member/posts/1")
      template
        div
          ui-tag(type="mini") 发生日期：2020-12-12
        div 60.00
  ui-card(header="最近记录").mt.mb
    van-cell(title="分类" label="摘要记录" value="60.00" is-link to="/member/posts/1")
</template>

<script>
export default {
  name: 'MemberPosts',
};
</script>

<style lang="scss" scoped></style>
