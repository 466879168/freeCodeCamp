<template>
  <div class="task-wrap">
    <div class="task-top">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-input
            v-model="name"
            placeholder="任务名称"
            style="width:100%"
          ></el-input>
        </el-col>
        <el-col :span="8">
          <el-input
            v-model="company"
            placeholder="推广公司名称"
            style="width:100%"
          ></el-input>
        </el-col>
        <el-col :span="8" class="fr">
          <el-button type="primary" class="fr" @click="search">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="task-center">
      <div class="columns-btn" v-if="hasColumnBtn">
        <el-button type="success" @click="openDialog">添加</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :height="$TABLE_HEIGHT"
        v-loading="loading"
      >
        <el-table-column label="任务名称" min-width="150">
          <template slot-scope="scope">
            {{ scope.row.promotion_task_name |textFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="推广公司" min-width="300">
          <template slot-scope="scope">
            {{ scope.row.company_name_en |textFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="创建人" min-width="150">
          <template slot-scope="scope">
            {{ scope.row.oss_user_name |textFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="状态" min-width="100">
          <template slot-scope="scope">
            {{ scope.row.status |numberFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="发送数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="showDetail(scope.row.promotion_task_id, 0)"
              >{{ scope.row.send_num |numberFormat}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="成功数据" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="showDetail(scope.row.promotion_task_id, 1)"
              >{{ scope.row.success_num |numberFormat}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="硬退信数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="showDetail(scope.row.promotion_task_id, 3)"
              >{{ scope.row.hard_num |numberFormat}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="软退信数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="showDetail(scope.row.promotion_task_id, 2)"
              >{{ scope.row.soft_num |numberFormat}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="点击数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="showDetail(scope.row.promotion_task_id, 4)"
              >{{ scope.row.click_num |numberFormat}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="推广时间" min-width="150">
          <template slot-scope="scope">
            {{ scope.row.promotion_time |secondFormat}}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="task-footer">
      <el-pagination
        layout="total, prev, pager, next"
        :current-page.sync="currentPage"
        :total="total"
        :page-size="15"
      ></el-pagination>
    </div>
    <el-dialog title="new" :visible.sync="Dialog" v-if="Dialog">
      <new-task @clearDialog="clearDialog" @closeDialog="showdownDialog" ></new-task>
    </el-dialog>
    <el-dialog
      title="Detail"
      :visible.sync="openTableDialog"
      v-if="openTableDialog"
      class="detail-dialog"
      @close="closeDialog">
      <detail :detailData="detailData" :detailCount="detailCount"></detail>
    </el-dialog>
  </div>
</template>

<script>
import detail from "./components/detail";
import newTask from "./components/newTask";

import { getEmailPromoteList, getEmailPromoteDetail } from "@/api/table";
export default {
  name: "emailTaskNew",
  components: {
    detail,
    newTask
  },
  data() {
    return {
      tableData: [],
      Dialog: false,
      name: "",
      company: "",
      hasColumnBtn: true,
      openTableDialog: false,
      loading: true,
      currentPage: 1,
      detailData: [],
      detailCount: 0,
      total:0
    };
  },
  watch: {
    currentPage(){
      this.getList()
    },
  },
  computed: {
    // totalNum() {
    //   return this.tableData.length;
    // }
  },
  methods: {
    openDialog() {
      this.Dialog = true;
    },
    clearDialog(){
      this.Dialog = false;
    },
    showdownDialog(){
      this.Dialog = false
      this.getList()
    },
    search() {

    },
    handleSelectionChange() {},
    getList() {
      this.loading = true;
      let params = {
        // promotion_task_name: this.name,
        // company_name: this.company,
        start: this.currentPage - 1,
        limit: 15,
        nopage: 0
      };
      getEmailPromoteList(params).then(res => {
        this.tableData = res.data;
        this.loading = false;
        this.total=res.total_count
      });
    },
    showDetail(id, status) {
      let params = {
        task_id: id,
        status: status
      };
      getEmailPromoteDetail(params).then(res => {
        this.detailData = res.data;
        this.detailCount = res.total_count;
      });
      this.openTableDialog = true;
    },
    closeDialog() {
      this.detailData = [];
    },
  },
  mounted() {
    this.getList();
  }
};
</script>

<style scoped>
.task-wrap {
  padding: 15px;
}
.task-top {
  padding: 0 0 10px;
}
.columns-btn {
  margin: 0 0 10px;
}
.el-pagination {
  top: 10px;
}
.showDetail {
  color: #40a9ff;
  cursor: pointer;
}
.companyName {
    color: #40a9ff;
    cursor: pointer;
  }
</style>
