<template>
  <div class="search-contacts">
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input v-model="country" placeholder="国家"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="city" placeholder="城市"></el-input>
        </el-col>
        <el-col :span="10">
          <el-input v-model="companyName" placeholder="公司名字"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </div>
      <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="联系人"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="邮箱"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="公司名"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="国家"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="城市"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="footer">
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
    name: "searchContacts",
    data() {
      return {
        country: "",
        city: "",
        companyName: "",
        tableData: []
      }
    }
  }
</script>

<style scoped>
</style>
