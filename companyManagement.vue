<template>
  <div>
    <div class="filter-content">
      <div :gutter="20">
        <el-col :span="3">
          <!-- <el-input placeholder="title" v-model="title"></el-input> -->
          <el-autocomplete
            v-model="country"
            suffix-icon="el-icon-search"
            :fetch-suggestions="queryCountry"
            placeholder="国家"
            size="small"
          ></el-autocomplete>
        </el-col>
        <el-col :span="3">
          <el-autocomplete
            class="inline-input"
            v-model="city"
            suffix-icon="el-icon-search"
            :fetch-suggestions="querySearchCity"
            placeholder="城市..."
            size="small"
            :readonly="!countryId"
          ></el-autocomplete>
        </el-col>
        <el-col :span="6">
          <companyName v-model="companyName" :placeTitle="'公司名称'" @pitch="selectCompany"></companyName>
        </el-col>

        <el-col :span="6">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :default-time="['00:00:00']"
          ></el-date-picker>
        </el-col>
        <el-col :span="2" :offset="4">
          <!-- <el-button type="default" class="fr" @click="reset">Reset</el-button> -->
          <el-button type="primary" class="fr" @click="search">Search</el-button>
        </el-col>
      </div>
      <div class="eranBox"></div>
      <div class="checkbox">
        <el-checkbox-group v-model="checkMember" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="item in member" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="checkbox">
        <el-checkbox-group v-model="checkShow" @change="handleCheckedShowChange">
          <el-checkbox v-for="item in showWhere" :label="item" :key="item">{{item}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="table-content" v-loading="loading">
      <el-table :data="tableData" :height="$TABLE_HEIGHT-35" style="width: 100%">
        <el-table-column prop="name_en" label="公司英文名" min-width="300">
          <template slot-scope="scope">
            {{ scope.row.company_name_en | textFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="name_cn" label="公司中文名" min-width="300">
          <template slot-scope="scope">
            {{ scope.row.company_name_cn | textFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="country" label="国家" min-width="140">
          <template slot-scope="scope">
            {{scope.row.country_name_en |textFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="city" label="城市" min-width="140">
          <template slot-scope="scope">
            {{scope.row.city_name_en |textFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="person" label="跟进销售" min-width="140">
          <template slot-scope="scope">
            {{scope.row.oss_user_name |textFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="created_time" label="创建时间" min-width="180">
          <template slot-scope="scope">
            {{scope.row.company_created_time | secondFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="upload_time" label="最后修改时间" min-width="180">
          <template slot-scope="scope">
            {{scope.row.company_updated_time | secondFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="网站显示">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.is_show"
                       :active-value="1"
                       :inactive-value="0"
                       active-text
                       inactive-text>
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="Handle" width="200">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="openDialog">联系人</el-button>

            <el-button type="text" size="small" @click="edit(scope.row)">设置Aila会员</el-button>
            <el-button type="text" size="small" @click="open(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer-content">
      <el-pagination
        layout="total, prev, pager, next"
        :total="total"
        :current-page.sync="currentPage"
        :page-size="15"
      ></el-pagination>
    </div>
    <el-dialog
      title="Add Email Template"
      :visible.sync="addTemplate"
      width="850px"
      :close-on-click-modal="false"
    >
      <el-form ref="addForm" :model="addForm" label-width="120px">
        <el-form-item label="Title">
          <el-input v-model="addForm.title" placeholder="please enter title"></el-input>
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="addForm.type" placeholder="please select type">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Content">
          <el-input
            type="textarea"
            :rows="8"
            placeholder="please enter html"
            v-model="addForm.content"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addTemplate = false">Cancel</el-button>
        <el-button type="primary" @click="saveContent" :loading="addLoading">Save</el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="设置AiLa会员"
      :visible.sync="editTemplate"
      width="850px"
      :close-on-click-modal="false"
    >
      <el-form ref="addForm" :model="addForm" label-width="120px">
        <el-form-item label="Title">
          <el-input v-model="addForm.title" placeholder="please enter title"></el-input>
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="addForm.type" placeholder="please select type">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Content">
          <el-input
            type="textarea"
            :rows="8"
            placeholder="please enter html"
            v-model="addForm.content"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addTemplate = false">Cancel</el-button>
        <el-button type="primary" @click="saveContent" :loading="addLoading">Save</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getCompanyInfoList} from "@/api/table";
  import {queryCountry, handleCountryId, queryCity, handleCityId} from "@/utils/AutoAddress";

  export default {
    name: "EmailTemplate",
    props: {},
    data() {
      return {
        member: ["未激活", "未审核", "普通会员公司", "AiLa会员公司"],
        checkMember: [],
        showWhere: ["前端显示", "前端不显示"],
        checkShow: [],
        isShow: false,
        currentPage: 1,
        hasColumnBtn: true,
        addTemplate: false,
        loading: true,
        addLoading: false,
        saveLoading: false,
        total: 0,
        addForm: {
          title: "",
          type: "",
          content: ""
        },
        editForm: {
          title: "",
          type: "",
          content: "",
          status: ""
        },
        editTemplate: false,
        tableData: [],
        value1: [],
        title: "",
        options: [],
        typeValue: "",
        options1: [],
        statusValue: "",
        country: "",
        queryCountry,
        countryId: "",
        filterCompanyId: "",
        companyName: "",
        city: "",
        cityId: "",
        status:""
      };
    },
    computed: {
      startTime(){
        if(this.value1[0]){
          return Date.parse(this.value1[0]) / 1000
        }else{
          return ""
        }
      },
      endTime(){
        if(this.value1[1]){
          return Date.parse(this.value1[1]) / 1000
        }else{
          return ""
        }
      }
    },
    created() {
    },
    mounted() {
      this.getList();
    },
    watch: {
      currentPage() {
        this.getList();
      },
      country(cb) {
        this.countryId = handleCountryId(cb);
      },
      city() {
        this.cityId = handleCityId(this.city, this.countryId)
      },
      checkMember(){
        if(this.checkMember.length ===0){
          this.status=""
        }else if(this.checkMember.length ===0){

        }
      }
    },
    methods: {
      handleCheckedCitiesChange(value) {

      },
      handleCheckedShowChange(value) {
        console.log(value)
      },
      search() {
        this.currentPage = 1;
        this.getList();
      },
      selectCompany(id) {
        this.filterCompanyId = id;
      },
      openDialog() {
        this.addTemplate = true;
      },
      saveContent() {
        this.addLoading = true;
        this.addLoading = false;
        this.addTemplate = false;
        this.getList();
      },
      saveEditContent() {
        this.saveLoading = true;
        this.saveLoading = false;
        this.editTemplate = false;
        this.getList();
      },
      onEditorChange(e) {
      },
      edit(data) {
        this.editTemplate = true;
        let scope = Object.assign({}, data);
      },
      delete(id) {
      },

      getList() {
        this.loading = true;
        let params = {
          country_id: this.countryId,
          city_id: this.cityId,
          company_name: this.companyName,
          start_time: this.startTime,
          end_time: this.endTime,
          status: this.status,
          is_show: "",
          create_time_sort: '1',
          update_time_sort: '1',
          start: this.currentPage - 1,
          limit: '15',
          nopage: '0'
        };
        console.log(params)
        //this.tableData = res.data;
        getCompanyInfoList(params).then(res => {
          console.log(res)
          this.tableData=res.data
          this.total = res.total_count
          this.loading = false;
        })
      },

      open(id) {
        this.$confirm("confirm deletion?", "prompt", {
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
          type: "warning"
        })
          .then(() => {
            // deleteMailTemplate({
            //   id
            // }).then(res => {
            //   this.$message({
            //     type: "success",
            //     message: "delete success!"
            //   });
            //   this.getList();
            // });
          })
          .catch(() => {
          });
      },
      querySearchCity(queryString, cb) {
        if (!this.countryId) {
          cb([]);
          return;
        }
        queryCity(queryString, cb, this.countryId);
      }
    },

    components: {},
    filters: {}
  };
</script>

<style scoped lang="scss">
  .checkbox {
    font-size: 12px;
    margin: 10px 10px;
  }

  .eranBox {
    width: 100%;
    height: 40px;
  }
</style>
