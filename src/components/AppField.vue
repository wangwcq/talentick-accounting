<template lang="pug">
van-field(v-bind="$attrs" v-on="$listeners" :placeholder="$attrs.placeholder || '...'")
  template(#input)
    slot
</template>

<script>
export default {
  name: 'AppField',
};
</script>

<style lang="scss" scoped></style>
