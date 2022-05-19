<template>
  <a-layout class="template-page">
    <a-layout-header>
      <h1 class="page-title">合并PDF</h1>
    </a-layout-header>
    <a-layout-content>
      <a-form
        class="merge-pdf-form"
        layout="vertical"
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item label="上传类型">
          <a-radio-group
            v-decorator="['uploadType', { initialValue: 'file' }]"
            @change="onUploadTypeChange"
          >
            <a-radio value="directory"> 文件夹 </a-radio>
            <a-radio value="file"> 文件 </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="选择文件">
          <a-upload
            v-decorator="[
              'fileList',
              {
                rules: [
                  {
                    required: true,
                    message: '请选择合并的文件',
                  },
                ],
              },
            ]"
            accept=".pdf"
            :multiple="true"
            :before-upload="beforeUpload"
            :directory="directory"
          >
            <a-button> <a-icon type="upload" /> Select File </a-button>
          </a-upload>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :loading="isMerge">
            开始合并文件
          </a-button>
        </a-form-item>
      </a-form>
    </a-layout-content>
  </a-layout>
</template>

<script>
import PDFMerger from "pdf-merger-js/browser";

export default {
  name: "mergePDF",
  data() {
    return {
      form: this.$form.createForm(this, { name: "mergePDFForm" }),
      isMerge: false,
      directory: false,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.isMerge = true;
          const files = (values.fileList.fileList || []).map(
            (item) => item.originFileObj
          );
          this.merge(files).finally(() => (this.isMerge = false));
        }
      });
    },
    beforeUpload(file) {
      return false;
    },
    onUploadTypeChange(e) {
      const { value } = e.target;
      this.directory = value === "directory";
    },
    async merge(files) {
      const merger = new PDFMerger();

      for (const file of files) {
        await merger.add(file);
      }

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.download = "合并后的pdf.pdf";
      a.click();
      return url;
    },
  },
};
</script>
<style scoped>
.merge-pdf-form {
  padding: 50px;
}
</style>
