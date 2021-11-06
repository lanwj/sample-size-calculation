<template>
  <Expression>
    <span slot="molecule">
      (𝓊<sub>𝛂</sub> + u<sub>𝛃</sub>)<sup>2</sup>(1+1/𝑘)𝑝(1-𝑝)
    </span>
    <span slot="denominator"> (𝑝𝑒 - 𝑝𝑐)<sup>2</sup> </span>
  </Expression>
</template>

<script>
import Expression from "@/components/Expression";
export default {
  name: "sampleExpression",
  components: {
    Expression,
  },
};
</script>
