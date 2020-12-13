<template lang="pug">
ui-container
  ui-card(header="账册").mt.mb
    van-cell(is-link to="/member/books/select-book" title="YS" label="当前账册" value="选择账册") 
    div.mt
      router-link(to="/member/books/1")
        ui-button 编辑账册
  ui-card(header="报表").mb
    div.mb
      router-link(to="/member/reports/create-report")
        ui-button 创建报表
    van-cell(title="资产负债表" is-link to="/member/reports/balance-sheet")
    van-cell(title="利润表 / 收入支出表" is-link to="/member/reports/income-statement")
    van-cell(title="现金流量表" is-link to="/member/reports/cash-flow-statement")
  ui-card(header="账户分类").mt.mb
    ui-tabs(type="border-card")
      ui-tab-pane(label="资产")
        van-search
        div.mb
          router-link(to="/member/books/categories/add-category")  
            ui-button 添加分类
        van-cell(title="银行存款" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="现金" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="固定资产" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="存货资产" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="应收账款" value="23500.00" is-link to="/member/books/categories/1")
      ui-tab-pane(label="负债") 
        van-search
        div.mb
          router-link(to="/member/books/categories/add-category")  
            ui-button 添加分类
        van-cell(title="其他应付款" value="23500.00" is-link to="/member/books/categories/1")
      ui-tab-pane(label="权益")
        van-search
        div.mb
          router-link(to="/member/books/categories/add-category")  
            ui-button 添加分类
        van-cell(title="实收资本" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="未分配利润" value="23500.00" is-link to="/member/books/categories/1")
      ui-tab-pane(label="收入")
        van-search
        div.mb
          router-link(to="/member/books/categories/add-category")  
            ui-button 添加分类
        van-cell(title="主营业务收入" value="23500.00" is-link to="/member/books/categories/1")
      ui-tab-pane(label="费用") 
        van-search
        div.mb
          router-link(to="/member/books/categories/add-category")  
            ui-button 添加分类
        van-cell(title="管理费用" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="财务费用" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="—— 利息" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="—— —— 存款利息" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="—— —— 贷款利息" value="23500.00" is-link to="/member/books/categories/1")
        van-cell(title="—— 手续费" value="23500.00" is-link to="/member/books/categories/1")
</template>

<script>
export default {
  name: 'MemberBooks',
};
</script>

<style lang="scss" scoped></style>
