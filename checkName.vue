<template>
  <div class="crm-check">
    <el-form  :model="form" label-width="180px" inline >
      <div>
        <el-form-item label="Email:" prop="email" required>
          <el-input v-model="form.email" style="width:820px"></el-input>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="Company Name:" required>
          <el-input  style="width:313px" ></el-input>
          <el-button >check</el-button>
        </el-form-item>
        <el-form-item label="Company Type:" >
          <el-select style="width:243px">
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="Country:" required>
          <el-input  style="width:313px" ></el-input>
        </el-form-item>
        <el-form-item label="City:">
          <el-input  style="width:313px" ></el-input>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="Website:">
          <el-input  style="width:820px"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div class="bottom_but">
      <el-button >Cancel</el-button>
      <el-button >save</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "checkName",
    data() {
      return {
        form: {
          email: "",
        }
      }
    },
  }
</script>

<style scoped lang="less">

</style>
