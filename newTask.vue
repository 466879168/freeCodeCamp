<template>
  <div class="new-task" v-loading="loading">
    <el-form
      :model="addForm"
      ref="addForm"
      label-width="120px"
      class="add-form"
      :rules="rules">
      <el-form-item label="推广任务" prop="task">
        <el-input
          v-model="addForm.task"
          autocomplete="off"
          placeholder="输入任务名称"
          :disabled="!isAdd"
        ></el-input>
      </el-form-item>
      <el-form-item label="推广邮件模板" prop="title">
        <el-select
          v-model="addForm.title"
          filterable
          placeholder="选择邮件模板"
          :disabled="!isAdd"
        >
          <el-option
            v-for="item in template"
            :key="item.id"
            :label="item.title"
            :value="item.title"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="推广公司">
        <el-input
          v-model="addForm.name"
          autocomplete="off"
          placeholder="显示推广公司"
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="推广联系人组" prop="group">
        <el-select v-model="addForm.group" filterable placeholder="选择联系人组"
                   :disabled="!isAdd">
          <el-option
            v-for="item in groups"
            :key="item.id"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="推广时间" prop="value1">
        <el-date-picker
          v-model="addForm.value1"
          type="date"
          placeholder="请选择日期"
          style="width:100%"
          :disabled="!isAdd">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer bottom_but">
      <el-button @click="clean" class="clean">取消</el-button>
      <el-button type="primary" @click="save('addForm')" :disabled="!isAdd">保存</el-button>
    </div>
  </div>
</template>

<script>
  import {
    getEmailTemplate,
    getEmailContactPerson,
    addEmailTask,
    getEmailPromoteList
  } from "@/api/table";

  export default {
    name: "newTask",
    props: {
      currentId: {
        type: String,
        default: ""
      },
      isAdd: {
        type: Boolean,
        default: true
      },
      newTaskTemplate: {
        type:Array,
        default: function(){
          return []
        }
      },
      newTaskPerson:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
    data() {
      return {
        addForm: {
          //添加任务所需的任务名称
          task: "",
          name: "",
          title: "",
          group: "",
          value1: ""
        },
        template: [],

        groups: [],
        //创建人ID
        founderId: this.$store.state.user.userInfo.id,
        //添加任务所需的公司id
        companyId: "",
        //添加任务所需的邮件推广id
        templateId: "",
        loading:false,
        rules: {
          task: {
            required: true,
            message: "请输入任务名称",
            trigger: "blur"
          },
          title: {
            required: true,
            message: "选择邮件模板",
            trigger: "change"
          },
          group: {
            required: true,
            message: "选择联系人组",
            trigger: "change"
          },
          value1: {
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        }
      };
    },
    methods: {
      clean() {
        this.$emit("clearDialog");
      },
      save(formName) {
        let params = {
          name: this.addForm.task,
          company_id: this.companyId,
          creator: this.founderId,
          promotion_time: this.time,
          template_id: this.templateId,
          contact_group_id: this.groupId,
          attribute: 1
        };
        this.$refs[formName].validate(valid => {
          if (valid) {
            addEmailTask(params).then(res => {
              if (res.success) {
                this.$emit("closeDialog");
              }
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    },
    created() {
      if(!this.isAdd){
        this.loading=true
        let params={
          task_id:this.currentId
        }
        getEmailPromoteList(params).then(res => {
          let data=res.data[0]
          let date=new Date(data.promotion_time*1000)
          let year=date.getFullYear()
          let month=date.getMonth()+1
          let day=date.getDate()
          let time=`${year}-${month}-${day}`
          this.addForm.task=data.promotion_task_name
          this.addForm.name=data.company_name_en
          this.addForm.title=data.title
          this.addForm.group=data.contact_group_name
          this.addForm.value1=time
          this.loading=false
        })
      }else{
        console.log(this.newTaskTemplate)
        this.template=this.newTaskTemplate
        console.log(this.newTaskPerson)
        this.groups=this.newTaskPerson
      }
    },
    watch: {
      title() {
        if(this.isAdd){
          let temporary = this.template.find(item => {
            return item.title === this.addForm.title;
          });
          this.addForm.name = temporary.company_name_en;
          this.companyId = temporary.company_id;
          this.templateId = temporary.id;
        }
      },
    },
    computed: {
      //添加任务所需的时间戳
      time() {
        return Date.parse(this.addForm.value1) / 1000;
      },
      title() {
        return this.addForm.title
      },
      //推广联系人组ID
      groupId() {
        let temporary = this.groups.find(item => {
          return item.name === this.addForm.group;
        });
        return temporary.id

      }
    }
  };
</script>

<style scoped>
  .add-form {
    padding: 20px 30px 0;
  }

  .dialog-footer {
    padding: 10px 30px 10px 0;
  }
</style>
