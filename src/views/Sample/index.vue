<template>
  <a-layout class="template-page">
    <a-layout-header>
      <h1 class="template-page-title">两样本率比较的样本量估计</h1>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="template-side">
        <a-divider>计算公式</a-divider>
        <SampleExpression />
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <a-divider>输入自定义值</a-divider>
          <a-form
            class="template-form"
            :form="form"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            @submit="handleSubmit"
          >
            <a-form-item label="𝑘">
              <a-input-number
                v-decorator="[
                  'k',
                  {
                    initialValue: 0.75,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your 𝑘 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="𝑝𝑒">
              <a-input-number
                v-decorator="[
                  'pe',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your 𝑝𝑒 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="𝑝𝑐">
              <a-input-number
                v-decorator="[
                  'pc',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your 𝑝𝑐 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
              <a-button type="primary" html-type="submit"> Submit </a-button>
            </a-form-item>
          </a-form>
        </a-layout-content>
        <a-layout-footer>
          <div class="template-result">计算结果：{{ result }}</div>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SampleExpression from "./expression";
export default {
  name: "sampleRateCal",
  components: {
    SampleExpression,
  },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      ua: 1.6449,
      up: 1.2816,
      result: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.calculate(values);
        }
      });
    },
    calculate({ pe, pc, k } = {}) {
      const { ua, up } = this;
      const p = (pe + pe * pc) / (1 + pe);
      const molecular = Math.pow(ua + up, 2) * (1 + 1 / k) * p * (1 - p); // 公式的分子
      const denominator = Math.pow(pe - pc, 2); // 公式的分母
      this.result = molecular / denominator;
    },
  },
};
</script>
<style scoped>
.template-page {
  height: 100%;
}
.template-page-title {
  color: #ffffff;
}
.template-form {
  padding: 32px;
}
.template-side {
  padding: 0 20px;
  margin-right: 20px;
  flex: 0 0 360px !important;
  max-width: 360px !important;
  min-width: 360px !important;
  width: 360px !important;
  background-color: transparent;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
