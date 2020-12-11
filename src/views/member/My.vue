<template lang="pug">
ui-container
  ui-card(header="我的").mt.mb
    van-cell(is-link to="/member/my/security" title="安全设置")
  ui-card
    router-link(to="/")
      ui-button 注销
</template>

<script>
export default {
  name: 'MemberMy',
};
</script>

<style lang="scss" scoped></style>
