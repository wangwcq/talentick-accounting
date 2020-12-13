<template lang="pug">
ui-container
  ui-card(header="预算摘要").mt.mb
    van-image(height="120" width="100%")
    ui-alert(:closable="false") 曲线图：收入、支出、预算取现
    van-grid(:column-num="2")
      van-grid-item(text="本月收入预算：12k/130k")
      van-grid-item(text="本月支出预算：12.5k/13k")
  ui-card(header="分类预算").mb
    van-search(placeholder="定位分类")
    van-cell(title="分类名称" value="1k/12k" is-link to="/member/budgets/by-category/1")
  ui-card(header="周期明细").mb
    ui-collapse
      ui-collapse-item
        template(#title)
          van-icon(name="search").mr
          | 检索排序
        van-search(placeholder="按关键词搜索")
        app-field(label="按账册")
        app-field(label="按分类")
        app-field(label="按日期")
        app-field(label="按金额")
        div.mt
          ui-button 检索
    van-cell(title="分类名称" label="摘要" value="1k/12k" is-link to="/member/posts/3")
      template 
        div
          ui-tag(size="mini") 每月1日
        div 1k/12k
</template>

<script>
export default {
  name: 'MemberBudgets',
};
</script>

<style lang="scss" scoped></style>
