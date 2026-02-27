<script setup lang="js">
const props = defineProps([
  'label',
  'placeholder',
  'type',
  'variant',
  'clearable',
  'hint',
  'hideDetails',
  'loading',
  'prependInnerIcon',
  'density',
])
const emit = defineEmits(['enter'])
const model = defineModel('input')
</script>
<template>
  <v-text-field
    v-model="model"
    :label="props.label"
    :type="props.type"
    :placeholder="props.placeholder"
    :variant="props.variant"
    :clearable="props.clearable"
    :hint="props.hint"
    :hide-details="props.hideDetails"
    :loading="props.loading"
    :prepend-inner-icon="props.prependInnerIcon"
    :density="props.density"
    @keyup.enter="emit('enter')"
  />
</template>
<style scoped>
:deep(.v-field__overlay) {
  opacity: 0 !important;
}
</style>
