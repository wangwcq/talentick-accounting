<template lang="pug">
ui-card(header="报表配置").mt.mb
  pre {{ code }}
</template>

<script>
export default {
  name: 'ReportConfig',
  data() {
    return {
      reportConfig: {
        title: '资产负债表',
        columns: 2,
        values: [
          {
            id: 1,
            title: '本期余额',
          },
          {
            id: 2,
            title: '本年累计余额',
          },
        ],
        displayRowIndex: true,
        columnsConfig: [
          [
            {
              title: '资产',
              span: 2,
              children: [
                {
                  id: 1,
                  title: '货币资金',
                  type: 'SUM_CATEGORIES',
                  categories: [
                    { id: 1, title: '银行存款' },
                    { id: 2, title: '库存现金' },
                  ],
                },
                {
                  id: 2,
                  title: '流动资产合计',
                  type: 'SUM_FIELDS',
                  fields: [{ id: 1, title: '货币资金' }],
                },
              ],
            },
            {
              title: '资产合计',
            },
          ],
          [
            {
              title: '负债',
              children: [
                {
                  id: 3,
                  title: '其他应付款',
                  type: 'SUM_CATEGORIES',
                  categories: [{ id: 3, title: '其他应付款' }],
                },
              ],
            },
            {
              title: '所有者权益',
            },
            {
              title: '负债与所有者权益合计',
            },
          ],
        ],
      },
    };
  },
  computed: {
    code() {
      return JSON.stringify(this.reportConfig, null, 2);
    },
  },
};
</script>

<style lang="scss" scoped></style>
