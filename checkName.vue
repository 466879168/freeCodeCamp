<template>
  <div class="contacts-group">
    <!--    <div :gutter="20" class="contacts-top">-->
    <!--      <el-col :span="8">-->
    <!--        <el-input v-model="input" placeholder="联系人组"></el-input>-->
    <!--      </el-col>-->
    <!--      <el-col :span="4" :offset="12">-->
    <!--        <el-button type="primary" class="fr" @click="search">查询</el-button>-->
    <!--      </el-col>-->

    <!--    </div>-->
    <!--    <div class="contacts-table">-->
    <!--      <div class="contacts-add">-->
    <!--        <el-button type="primary">添加</el-button>-->
    <!--      </div>-->
    <!--      <el-table-->
    <!--        :data="tableData"-->
    <!--        border-->
    <!--        style="width: 100%">-->
    <!--        <el-table-column-->
    <!--          fixed-->
    <!--          prop="date"-->
    <!--          label="联系人组">-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--          prop="name"-->
    <!--          label="创建人"-->
    <!--          width="150">-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--          prop="province"-->
    <!--          label="联系人数量"-->
    <!--          width="150">-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--          prop="city"-->
    <!--          label="创建时间"-->
    <!--          width="150">-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--          prop="address"-->
    <!--          label="最后修改时间"-->
    <!--          width="150">-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--          fixed="right"-->
    <!--          width="150">-->
    <!--          <template slot-scope="scope">-->
    <!--            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>-->
    <!--            <el-button type="text" size="small">删除</el-button>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--      </el-table>-->
    <!--    </div>-->
    <!--    <div class="footer-content">-->
    <!--      <el-pagination-->
    <!--        layout="prev, pager, next"-->
    <!--        :total="50">-->
    <!--      </el-pagination>-->
    <!--    </div>-->
    <div class="contacts-top"></div>
    <div class="contacts-center"></div>
    <div class="contacts-footer"></div>
  </div>
</template>

<script>
  export default {
    name: 'ContactsGroup',
    data() {
      return {
        input: "",
        tableData:[]
      }
    },
    methods: {
      search() {

      }
    }

  }
</script>

<style scoped>

</style>
