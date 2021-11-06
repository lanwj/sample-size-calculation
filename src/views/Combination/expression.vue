<template>
  <Expression>
    <span slot="result">𝑛<sup>2</sup></span>
    <div slot="molecule" class="combination-expression-molecule">
      <span>(N<sub>1</sub>-1)SD<sub>1</sub><sup>2</sup></span>
      <span>+</span>
      <span>(N<sub>2</sub>-1)SD<sub>2</sub><sup>2</sup></span>
      <span>+</span>
      <Expression :show-result="false">
        <span slot="molecule">N<sub>1</sub>N<sub>2</sub></span>
        <span slot="denominator">N<sub>1</sub>+N<sub>2</sub></span>
      </Expression>
      <span>
        (M<sub>1</sub><sup>2</sup>+M<sub>2</sub><sup>2</sup>-2M<sub>1</sub>M<sub>2</sub>)
      </span>
    </div>
    <span slot="denominator">N<sub>1</sub>+N<sub>2</sub>-1</span>
  </Expression>
</template>

<script>
import Expression from "@/components/Expression";
export default {
  name: "combinationExpression",
  components: {
    Expression,
  },
};
</script>
<style scoped>
.combination-expression-molecule {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
