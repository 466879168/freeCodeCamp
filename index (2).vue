<template>
  <div class="task-wrap">
    <div class="filter-content">
      <div :gutter="20">
        <el-col :span="3">
          <el-input v-model="name" placeholder="任务名称"></el-input>
        </el-col>
        <el-col :span="6">
          <companyName
            v-model="company"
            @pitch="selectCompany"
            :placeTitle="'推广公司名称'"
          ></companyName>
        </el-col>
        <el-col :span="10" :offset="5">
          <el-button type="primary" class="fr" @click="search">查询</el-button>
        </el-col>
      </div>
    </div>
    <div class="table-content" v-loading="loading">
      <div class="columns-btn" v-if="hasColumnBtn&&hasAuth('portrait.taskNew.add')">
        <el-button type="success" @click="openDialog" icon="el-icon-plus"
        >添加
        </el-button
        >
      </div>
      <el-table :data="tableData" style="width: 100%" :height="$TABLE_HEIGHT">
        <el-table-column label="任务名称" min-width="150">
          <template slot-scope="scope">
            <span class="showDetail" @click="openDialog(scope.row.promotion_task_id,false)">
              {{ scope.row.promotion_task_name | textFormat }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="推广公司" min-width="300">
          <template slot-scope="scope">
            {{ scope.row.company_name_en | textFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="创建人" min-width="150">
          <template slot-scope="scope">
            {{ scope.row.oss_user_name | textFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="状态" min-width="100">
          <template slot-scope="scope">
            {{ scope.row.status | statusFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="address" label="发送数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="
                scope.row.send_num > 0
                  ? showDetail(
                      scope.row.promotion_task_id,
                      0,
                      scope.row.promotion_task_name
                    )
                  : null
              "
              disabled
              :class="{ showDetailColor: scope.row.send_num <= 0 }"
            >{{ scope.row.send_num | numberFormat }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="成功数据" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="
                scope.row.success_num > 0
                  ? showDetail(
                      scope.row.promotion_task_id,
                      1,
                      scope.row.promotion_task_name
                    )
                  : null
              "
              :class="{ showDetailColor: scope.row.send_num <= 0 }"
            >{{ scope.row.success_num | numberFormat }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="硬退信数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="
                scope.row.hard_num > 0
                  ? showDetail(
                      scope.row.promotion_task_id,
                      3,
                      scope.row.promotion_task_name
                    )
                  : null
              "
              :class="{ showDetailColor: scope.row.send_num <= 0 }"
            >{{ scope.row.hard_num | numberFormat }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="软退信数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="
                scope.row.soft_num > 0
                  ? showDetail(
                      scope.row.promotion_task_id,
                      2,
                      scope.row.promotion_task_name
                    )
                  : null
              "
              :class="{ showDetailColor: scope.row.send_num <= 0 }"
            >{{ scope.row.soft_num | numberFormat }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="点击数量" min-width="100">
          <template slot-scope="scope">
            <span
              class="showDetail"
              @click="
                scope.row.click_num > 0
                  ? showDetail(
                      scope.row.promotion_task_id,
                      4,
                      scope.row.promotion_task_name
                    )
                  : null
              "
              :class="{ showDetailColor: scope.row.send_num <= 0 }"
            >{{ scope.row.click_num | numberFormat }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="推广时间" min-width="150">
          <template slot-scope="scope">
            {{ scope.row.promotion_time | secondFormat }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer-content">
      <el-pagination
        layout="total, prev, pager, next"
        :current-page.sync="currentPage"
        :total="total"
        :page-size="15"
      ></el-pagination>
    </div>
    <el-dialog
      :title="newTitle"
      :visible.sync="Dialog"
      v-if="Dialog"
      width="850px"
      :close-on-click-modal="false">
      <new-task
        @clearDialog="clearDialog"
        @closeDialog="showdownDialog"
        :currentId="currentId"
        :isAdd="isAdd"
        :newTaskTemplate="newTaskTemplate"
        :newTaskPerson="newTaskPerson"
      ></new-task>
    </el-dialog>
    <el-dialog
      :title="title"
      :visible.sync="openTableDialog"
      v-if="openTableDialog"
      width="850px"
      class="detail-dialog"
      :close-on-click-modal="false"
      @close="closeDialog">
      <detail :id="id" :status="status" :taskName="taskName"></detail>
    </el-dialog>
  </div>
</template>

<script>
  import detail from "./components/detail";
  import newTask from "./components/newTask";

  import {getCompanyList} from "@/utils";
  import {getEmailPromoteList, getEmailPromoteDetail, getEmailTemplate, getEmailContactPerson} from "@/api/table";

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
        id: "",
        status: 0,
        total: 0,
        countryId: "",
        cityId: "",
        title: "",
        taskName: "",
        currentId: "",
        isAdd: true,
        newTitle: "添加任务",
        newTaskTemplate:[],
        newTaskPerson:[]
      };
    },
    watch: {
      currentPage() {
        this.getList();
      }
    },
    filters: {
      statusFormat: function (input) {
        let str = "_";
        switch (input) {
          case 0:
            str = "未开始";
            break;
          case 1:
            str = "开始";
            break;
          case 2:
            str = "结束";
            break;
        }
        return str;
      }
    },
    methods: {
      selectCompany(id) {
        this.filterCompanyId = id;
      },
      openDialog(id = "", boolean) {
        if (boolean === false) {
          this.newTitle = "任务详情"
        }
        this.currentId = id + ""
        this.isAdd = boolean
        this.Dialog = true;

      },
      clearDialog() {
        this.Dialog = false;
      },
      showdownDialog() {
        this.Dialog = false;
        this.getList();
      },
      search() {
        this.currentPage = 1;
        this.getList();
      },
      handleSelectionChange() {
      },
      getList() {
        this.loading = true;
        let params = {
          promotion_task_name: this.name,
          company_name: this.company,
          start: this.currentPage - 1,
          limit: 15,
          nopage: 0
        };
        getEmailPromoteList(params).then(res => {
          this.tableData = res.data;
          this.loading = false;
          this.total = res.total_count;
        });
      },
      //获取新增邮件模板数据
      getTemplate() {
        let params = {
          status: 1,
          nopage: 1
        }
        getEmailTemplate(params).then(res => {
          this.newTaskTemplate=res.data
        });
      },
      //获取新增中联系人组数据
      getPerson() {
        let parameter = {
          sort: 0,
          nopage: 1
        }
        getEmailContactPerson(parameter).then(res => {
          this.newTaskPerson=res.data
          // this.groups = res.data;
          // this.loading = false
        });
      },
      showDetail(id, status, taskName) {
        let arr = [
          "发送数量",
          "成功数据",
          "软退信数量",
          "硬退信数量",
          "点击数量"
        ];
        this.id = id;
        this.status = status;
        this.taskName = taskName;
        this.openTableDialog = true;
        this.title = arr[status];
      },
      closeDialog() {
        this.detailData = [];
      }
    },
    mounted() {
      this.getList();
      this.getTemplate()
      this.getPerson()
    }
  };
</script>

<style>
  .showDetail {
    color: #40a9ff;
    cursor: pointer;
  }

  .showDetailColor {
    color: #606266;
    cursor: auto;
  }

  .el-dialog /deep/ .el-dialog__body {
    padding: 5px;
  }
</style>
