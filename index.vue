<template>
  <div class="contacts-group">
    <div class="contacts-top" style="overflow: hidden">
        <el-col :span="10">
          <el-input v-model="input" placeholder="联系人组"></el-input>
        </el-col>
        <el-col :span="4" :offset="10">
          <el-button type="primary" class="fr" @click="search">查询</el-button>
        </el-col>
    </div>
    <div class="contacts-center">
      <div class="columns-btn" v-if="hasColumnBtn">
        <el-button type="primary" @click="dialogTableVisible = true">添加</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%" :height="$TABLE_HEIGHT">
        <el-table-column
          prop="date"
          label="联系人组"
          min-width="300">
        </el-table-column>
        <el-table-column
          prop="name"
          label="创建人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="province"
          label="联系人数量"
          width="180">
        </el-table-column>
        <el-table-column
          prop="city"
          label="创建时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="最后修改时间"
          width="180">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="contacts-footer">
      <el-pagination
        layout="total, prev, pager, next"
        :total="total"
        :current-page.sync="currentPage"
        :page-size="15"
      ></el-pagination>
    </div>
    <el-dialog title="外层 Dialog" :visible.sync="dialogTableVisible" width="900px">
      <new-contacts @innerOpen="innerOpen"></new-contacts>
      <el-dialog
        width="800px"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body>
        <search-contacts></search-contacts>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
  import newContacts from "./components/newContacts"
  import searchContacts from "./components/searchContacts"

  export default {
    name: 'ContactsGroup',
    components: {
      newContacts,
      searchContacts
    },
    data() {
      return {
        input: "",
        tableData: [],
        dialogTableVisible: false,
        innerVisible: false,
        hasColumnBtn:true
      }
    },
    methods: {
      search() {

      },
      innerOpen() {
        this.innerVisible = true
      }
    }
  }
</script>

<style scoped>
.contacts-top{
  padding: 10px 5px;
}
  .contacts-center .columns-btn{
    padding: 0 0 10px 10px;
  }
</style>
