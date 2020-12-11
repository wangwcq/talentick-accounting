<template lang="pug">
ui-container
  ui-card.mt.mb
    router-link(to="/member/posts")
      ui-button 返回
  ui-card(header="记录")
    div.mb
      ui-radio-group(v-model="viewMode")
        ui-radio-button(label="SIMPLE") 简单科目记账法
        ui-radio-button(label="DOUBLE_ENTRY") 复式记账法
    ui-row(:gutter="15")
      template(v-if="viewMode === 'SIMPLE'")
        ui-col(:xs="24" :md="14")
          app-field(label="选择账本" v-model="generalForm.book")
          app-field(label="是否已确认")
            ui-checkbox(label="已确认" border v-model="generalForm.isConfirmed").mt
          app-field(label="计入预算科目")
            ui-checkbox(label="计入预算科目" border v-model="generalForm.inCategoryBudget")
          div(v-for="postForm in postForms" :key="postForm.id")
            ui-divider(content-position="left") {{ `#${postForm.id}` }}
            app-field(v-model="postForm.account" label="资产负债账户")
            app-field(v-model="postForm.category" label="业务分类")
            app-field(v-model="postForm.amount" label="金额")
            app-field(v-model="postForm.memo" label="摘要")
            app-field(v-model="postForm.amount" label="原始凭证类型")
        ui-col(:xs="24" :md="10")
          ui-divider(content-position="left") 关联记录
          div
            ui-button 添加关联记录（报销、还款、其他应收应付款的场景）
          ui-divider(content-position="left") 重复
          div
            ui-button 设置重复（用于周期费用、分期付款等）
      template(v-else-if="viewMode === 'DOUBLE_ENTRY'")
        ui-flex(row center)
          h1 记账凭证
        van-grid(:column-num="2").mb
          van-grid-item 所属账册：{{ book }}
          van-grid-item 重复：每月1日
          van-grid-item 日期：2020-12-12
          van-grid-item 原始凭证：2
        van-grid(:column-num="5")
          van-grid-item #
          van-grid-item 摘要
          van-grid-item 科目      
          van-grid-item 借方金额
          van-grid-item 贷方金额
          template(v-for="postForm in postForms")
            van-grid-item(:key="`id-${postForm.id}`") {{ postForm.id }}
            van-grid-item(:key="`memo-${postForm.id}`") {{ postForm.memo }}
            van-grid-item(:key="`category-${postForm.id}`") {{ postForm.category }}
            van-grid-item(:key="`amount-credit-${postForm.id}`") {{ postForm.amount > 0 ? postForm.amount : '' }}
            van-grid-item(:key="`amount-debit-${postForm.id}`") {{ postForm.amount < 0 ? postForm.amount : '' }}       
  ui-card.mb
    ui-button(type="primary" @click="handleSubmit") 保存
  ui-card(header="相关账户")
    van-grid(:column-num="3")
      van-grid-item(icon="arrow" to="/member/books/categories/1" text="账户余额：2000.00")
      van-grid-item(icon="arrow" to="/member/books/categories/1" text="分类余额：2300.00")
      van-grid-item(icon="arrow" to="/member/budgets/by-category/1" text="本月预算：2233.00 / 10000.00")
</template>

<script>
export default {
  name: 'MemberPostsPost',
  data() {
    return {
      viewMode: 'SIMPLE',
      generalForm: {
        book: 'YS',
        isConfirmed: true,
        inCategoryBudget: true,
      },
      postForms: [
        {
          id: 1,
          account: '库存现金',
          category: '备用金',
          amount: 8000,
          memo: '备用金',
        },
        {
          id: 2,
          account: '银行存款',
          category: '备用金',
          amount: -8000,
          memo: '备用金',
        },
      ],
    };
  },
  methods: {
    async handleSubmit() {
      // TODO
      this.$router.push('/member/posts');
    },
  },
};
</script>

<style lang="scss" scoped></style>
