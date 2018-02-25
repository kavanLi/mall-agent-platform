<template>
  <el-main>
    <el-form
      :model="ReginForm"
      ref="ReginForm"
      :rules="rule"
      class="regform"
      label-width="0">

      <h3>user register</h3>

      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ReginForm.username"
          placeholder="username">
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ReginForm.password"
          placeholder="password">
        </el-input>
      </el-form-item>

      <el-form-item prop="confirmpassword">
        <el-input
          type="password"
          v-model="ReginForm.confirmpassword"
          placeholder="confirmpassword">
        </el-input>
      </el-form-item>

      <el-form-item prop="email">
        <el-input
          type="email"
          v-model="ReginForm.email"
          placeholder="email">
        </el-input>
      </el-form-item>

      <el-form-item prop="tel">
        <el-input
          type="text"
          v-model.number="ReginForm.tel"
          placeholder="tel">
        </el-input>
      </el-form-item>

      <el-form-item prop="name">
        <el-input
          type="text"
          v-model="ReginForm.name"
          placeholder="name">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          @click.native.prevent="submit"
          :loading="logining"
          type="success"
          class="submitBtn"
          round>
          register
        </el-button>
        <el-button
          @click.native.prevent="reset"
          type="primary"
          class="resetBtn"
          round>
          reset
        </el-button>
        <hr>
        <p>I already have a account,<span class="to" @click="tologin">to login</span></p>      
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
import { ReginUser } from "../api/api"

export default {
  data() {
    let confirmpasswordCheck = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("password is required"));
      } else if (value !== this.ReginForm.password) {
        return callback(new Error("password don't match again password"));
      } else {
        return callback();
      }
    };
    let telCheck = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("tel number is required"));
      } else if (!Number.isInteger(value)) {
        return callback(new Error("tel digits must be number"));
      } else if (value.toString().length !== 11) {
        return callback(new Error("tel length must be 11"));
      } else {
        callback();
      }
    };
    return {
      ReginForm: {
        username: "",
        password: "",
        confirmpassword: "",
        tel: "",
        email: "",
        name: ""
      },
      logining: false,
      rule: {
        username: [
          {
            required: true,
            max: 14,
            min: 7,
            message: "username is required, length is 7-14",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "password is required",
            trigger: "blur"
          }
        ],
        confirmpassword: [
          {
            required: true,
            validator: confirmpasswordCheck,
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            validator: telCheck,
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "please input correct email format(XXX@XXX.com)",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            max: 12,
            min: 2,
            message: "name is required, best choice is chinese",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.ReginForm.validate(valid => {
        if (valid) {
          this.logining = true;
          // console.log("start writing data...");
          // 这是要注册的数据
          let ReginParams = {
            username: this.ReginForm.username,
            password: this.ReginForm.password,
            tel: this.ReginForm.tel,
            email: this.ReginForm.email,
            name: this.ReginForm.name
          };
          // 调用接口, 执行axios请求获取返回的数据
          ReginUser(ReginParams).then(res => {
            // 让注册按钮不要再转了
            this.logining = false;
            // 让页面给个提示
            this.$message({
              type: "success",
              message: "注册成功"
            });
            let user = res.data
            console.log(res)
            // 将返回的数据注入内存
            sessionStorage.setItem("user", JSON.stringify(user))
            // 跳转到我的信息的页面
            this.$router.push("/manger/my")
          })
        } else {
          console.log("submit error");
        }
      });
    },
    reset() {
      this.$refs.ReginForm.resetFields();
    },
    tologin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
  .regform {
    width: 310px;
    margin: 20px auto;
    padding: 30px 30px 0 30px;
    box-shadow: 0 0 10px #b4bccc;
    border-radius: 25px;
    background-color: #fff;
  }

  .submitBtn {
    width: 65%;
  }
  .to {
    color: #fa5555;
    cursor: pointer;
  }
</style>
