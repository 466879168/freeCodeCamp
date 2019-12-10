<template>
  <div class="check">
    <el-form :model="form" :inline="true">
      <el-form-item label="Company Name:">
        <el-autocomplete
                v-model="name"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入5个以上字符"
                @select="handleSelect"
                :trigger-on-focus="false"
                style="width: 300px"
        ></el-autocomplete>
        <!--          <el-input v-model="name" autocomplete="off" style="width: 300px" placeholder="请输入5个以上字符"></el-input>-->
        <el-button :disabled="isdisable" @click="query">check</el-button>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelBtn">Cancel</el-button>
      <el-button type="primary" @click="save" :disabled="isdisable">Save</el-button>
    </div>
  </div>
</template>

<script>
  import {queryCompanyName} from "../../api/table"

  export default {
    name: "checkName",
    data() {
      return {
        form: {},
        timeout:  null,
        companyList:{},
        isShow:false
      }
    },
    computed: {
      name: {
        get() {
          return this.$store.state.settings.checkCrmName
        },
        set(val) {
          this.$store.commit("settings/changeCheckCrmName", val)
        }
      },
      isdisable() {
        if (this.name === "") {
          return true
        } else {
          if (this.name.length > 5) {
            return false
          } else {
            return true
          }
        }
      }
    },
    methods: {
      save() {
        if(this.companyList.company_name!== "" &&this.companyList.oss_name!==""){
          this.$alert("该公司资源已被占用",{
            confirmButtonText: '确定'
          })
        }else{
          this.$bus.$emit("changeBtn", this.name)
          this.$emit("changeBtn")
        }

      },
      cancelBtn() {
        this.$emit("cancelBtn")
      },
      query() {
        this.isShow=true
      },
      querySearchAsync(queryString, cb) {
        queryCompanyName({
          company_name: this.name
        }).then(res => {
          for (let i = 0; i <res.data.length ; i++) {
            res.data[i].value=res.data[i].company_name
          }
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(res.data);
          }, 1000 * Math.random());
        })
      },
      handleSelect(item) {
        this.companyList=item
        console.log(this.companyList);
      }
    },
    destroyed() {
      this.isShow=false
    }
  }
</script>

<style scoped>
  .dialog-footer {
    text-align: right;
    margin-top: 10px;
  }
  ul,li{
    list-style: none;
  }
</style>
