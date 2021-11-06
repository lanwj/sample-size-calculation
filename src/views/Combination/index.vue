<template>
  <a-layout class="template-page">
    <a-layout-header>
      <h1 class="page-title">样本组合并</h1>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="page-aside">
        <a-divider>计算结果</a-divider>
        <div class="template-result">样本量：{{ NResult }}</div>
        <div class="template-result">均数：{{ MResult }}</div>
        <div class="template-result">标准差：{{ SDResult }}</div>
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
            <h3>N1组</h3>
            <a-form-item label="样本量N1">
              <a-input-number
                v-decorator="[
                  'N1',
                  {
                    initialValue: 20,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your N1 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="均数M1">
              <a-input-number
                v-decorator="[
                  'M1',
                  {
                    initialValue: 4.53,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your M1 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="标准差SD1">
              <a-input-number
                v-decorator="[
                  'SD1',
                  {
                    initialValue: 2.23,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your SD1 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <h3>N2组</h3>
            <a-form-item label="样本量N2">
              <a-input-number
                v-decorator="[
                  'N2',
                  {
                    initialValue: 20,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your N2 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="均数M2">
              <a-input-number
                v-decorator="[
                  'M2',
                  {
                    initialValue: 4.78,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your M2 value!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="标准差SD2">
              <a-input-number
                v-decorator="[
                  'SD2',
                  {
                    initialValue: 2.65,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your SD2 value!',
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
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "sampleRateCal",
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      ua: 1.6449,
      up: 1.2816,
      NResult: "",
      MResult: "",
      SDResult: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const { N1, N2 } = values;
          this.NResult = N1 + N2;
          this.calculateM(values);
          this.calculateSD(values);
        }
      });
    },
    calculateM({ N1, N2, M1, M2 } = {}) {
      const molecular = N1 * M1 + N2 * M2;
      const denominator = N1 + N2;
      this.MResult = molecular / denominator;
    },
    calculateSD({ N1, N2, M1, M2, SD1, SD2 } = {}) {
      const m1 = (N1 - 1) * Math.pow(SD1, 2) + (N2 - 1) * Math.pow(SD2, 2);
      const m2 =
        ((N1 * N2) / (N1 + N2)) *
        (Math.pow(M1, 2) + Math.pow(M2, 2) - 2 * M1 * M2);
      const molecular = m1 + m2; // 公式的分子
      const denominator = N1 + N2 - 1; // 公式的分母
      this.SDResult = Math.sqrt(molecular / denominator);
    },
  },
};
</script>
<style scoped>
.template-form {
  padding: 32px;
}
</style>
