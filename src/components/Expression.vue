<template>
  <div class="template-expression">
    <template v-if="showResult">
      <div class="template-expression-result">
        <slot name="result">
          <span>𝑛</span>
        </slot>
      </div>
      <div class="template-expression-equal">
        <span>=</span>
      </div>
    </template>
    <div class="template-expression-content">
      <div class="template-expression-item">
        <slot name="molecule" />
      </div>
      <a-divider class="expression-divider" />
      <div class="template-expression-item">
        <slot name="denominator" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showResult: {
      type: Boolean,
      default: true,
    },
  },
  name: "Expression",
};
</script>

<style scoped>
.template-expression {
  padding: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.template-expression-equal {
  margin: 0 5px;
}
.expression-divider {
  margin: 3px 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.template-expression-item {
  padding: 5px 20px;
  text-align: center;
}

.template-expression-item,
.expression-divider {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.template-expression-content {
  display: inline-flex;
  flex-direction: column;
}
</style>
