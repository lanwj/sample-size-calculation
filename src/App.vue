<template>
  <a-layout class="template-page">
    <a-layout-header>
      <h1 class="template-page-title">两样本率比较的样本量估计</h1>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="template-side">
        <a-divider>计算公式</a-divider>
        <div class="template-expression">
          <div class="template-expression-result">𝑛<span>=</span></div>
          <div class="template-expression-content">
            <div class="template-expression-item">
              (𝓊<sub>𝛂</sub> + u<sub>𝛃</sub>)<sup>2</sup>(1+1/𝑘)𝑝(1-𝑝)
            </div>
            <a-divider class="expression-divider" />
            <div class="template-expression-item">(𝑝𝑒 - 𝑝𝑐)<sup>2</sup></div>
          </div>
        </div>
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
export default {
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
.template-expression {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.expression-divider {
  margin: 3px 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.template-expression-item {
  padding: 5px 20px;
  text-align: center;
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
