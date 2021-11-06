<template>
  <a-layout>
    <a-layout-header>
      <h1 class="page-title">选择功能</h1>
    </a-layout-header>
    <a-layout-content class="home-page-content">
      <a-card title="两样本率比较的样本量估计" class="home-function-card">
        <router-link slot="extra" :to="{ name: 'SampleRateCal' }">
          查看详情
        </router-link>
        <SampleExpression />
      </a-card>
      <a-card title="合并样本组" class="home-function-card">
        <router-link slot="extra" :to="{ name: 'SampleCombination' }">
          查看详情
        </router-link>
        <CombinationExpression />
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script>
import SampleExpression from "@/views/Sample/expression";
import CombinationExpression from "@/views/Combination/expression";

export default {
  name: "Home",
  components: {
    SampleExpression,
    CombinationExpression,
  },
};
</script>
<style type="text/css" scoped>
.home-page-content {
  padding: 50px;
  overflow: hidden auto;
}
.home-function-card {
  margin-bottom: 50px;
}
.home-function-card::v-deep .ant-card-body {
  display: flex;
  justify-content: center;
}
</style>
