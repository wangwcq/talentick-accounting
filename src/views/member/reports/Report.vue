<template lang="pug">
ui-container
  ui-card.mt.mb
    router-link(to="/member/books")
      ui-button 返回 账册
  ui-card(header="报表配置")
    app-field(label="选择账本" v-model="config.book")
    app-field(label="报表类型")
      ui-radio-group(v-model="config.type")     
        ui-radio-button(label="资产负债表")
        ui-radio-button(label="收入支出表")
        ui-radio-button(label="现金流量表")
    app-field(label="时间范围" v-model="config.dates")
  ui-card.mb
    ui-button(type="primary") 查看报表
  ui-card(header="报表").mb
    ui-flex(row center)
      h1 {{ config.type }}
    van-grid(:column-num="2").mb
      van-grid-item(:text="`账册：${config.book}`")
      van-grid-item(:text="`时间：${config.dates}`")
    van-grid(:column-num="8")
      van-grid-item(text="行号")
      van-grid-item(text="摘要")
      van-grid-item(text="期末余额")
      van-grid-item(text="期初余额")
      van-grid-item(text="行号")
      van-grid-item(text="摘要")
      van-grid-item(text="期末余额")
      van-grid-item(text="期初余额")

      van-grid-item(text="")
      van-grid-item(text="资产")
      van-grid-item(text="")
      van-grid-item(text="")
      van-grid-item(text="")
      van-grid-item(text="负债")
      van-grid-item(text="")
      van-grid-item(text="")

      van-grid-item(text="1")
      van-grid-item(text="货币资金")
      van-grid-item(text="12100.00")
      van-grid-item(text="12100.00")
      van-grid-item(text="2")
      van-grid-item(text="其他应付款")
      van-grid-item(text="10000.00")
      van-grid-item(text="10000.00")

      van-grid-item(text="")
      van-grid-item(text="流动资产合计")
      van-grid-item(text="12100.00")
      van-grid-item(text="12100.00")
      van-grid-item(text="")
      van-grid-item(text="负债合计")
      van-grid-item(text="10000.00")
      van-grid-item(text="10000.00")

  ui-card(header="导出").mt.mb
    ui-button(type="success" plain) 导出为 Excel
    ui-button(type="danger" plain) 导出为 PDF
  ui-card(header="分析指标 - 未保存")
    ui-button 保存并分析
  ui-card(header="分析指标 - 分析中")
    ui-button 分析中...
  ui-card(header="分析指标").mb
    van-grid.mb
      van-grid-item
        h1 0.352
        div ROI
    ui-alert(type="warning" close-text="已知风险") 行1：货币资金科目中，库存现金超过现金持有预警线：10,0000.00元。
  report-config
</template>

<script>
export default {
  name: 'Report',
  components: {
    ReportConfig: require('../../../components/ops/ReportConfig.vue').default,
  },
  data() {
    return {
      config: {
        book: 'YS',
        type: '资产负债表',
        dates: ['2020-01-01', '2020-10-31'].join(' ~ '),
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
