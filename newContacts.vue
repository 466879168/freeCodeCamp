<template>
  <div class="new-contacts">
    <el-form :model="form">
      <el-form-item label="联系人组" label-width="80px">
        <el-input v-model="form.name" style="width:400px" class="input"></el-input>
        <el-button type="primary" @click="open">导入联系人</el-button>
      </el-form-item>
    </el-form>
     <template>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="联系人" width="120"></el-table-column>
      <el-table-column prop="name" label="邮箱" width="120"></el-table-column>
      <el-table-column prop="province" label="省份" width="120"></el-table-column>
      <el-table-column prop="city" label="公司名" width="120"></el-table-column>
      <el-table-column prop="address" label="国家" width="120"></el-table-column>
      <el-table-column prop="zip" label="城市" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </template>
    <div class="contacts-footer">
      <el-pagination
        layout="total, prev, pager, next"
        :total="total"
        :current-page.sync="currentPage"
        :page-size="15"
      ></el-pagination>
      <div class="dialog-footer">
        <el-button>取消</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "newContacts",
    data() {
      return {
        tableData: [],
        name: "",
        form: {}
      };
    },
    methods:{
      open(){
        this.$emit("innerOpen")
      }
    }
  };
</script>

<style scoped>
  .input{
    margin-right: 250px;
  }
</style>
