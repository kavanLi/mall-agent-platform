<template>
  <el-main>
    <el-form
      :model="LoginForm"
      ref="LoginForm"
      :rules="rule"
      label-width="0"
      class="login-form">
      <h3>user login system</h3>

      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="LoginForm.username" 
          placeholder="username">
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="LoginForm.password"
          placeholder="password">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          @click.native.prevent="submit"
          :loading="logining"
          type="danger" 
          class="submitBtn" 
          round>
          login
        </el-button>
        <el-button
          @click.native.prevent="reset" 
          type="primary" 
          class="resetBtn" 
          round>
          reset
        </el-button>
        <hr>
        <p>not have a account, get hurry to <span class="to" @click="toregin">registry</span></p>
      </el-form-item>

    </el-form>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      LoginForm: {
        username: "",
        password: ""
      },
      logining: false,
      rule: {
        username: [
          {
            required: true,
            max: 14,
            min: 7,
            message: "username is required, length is 7-14 digits",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "password is required",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.LoginForm.validate(valid => {
        if (valid) {
          this.logining = true;
          console.log("start getting server data");
        } else {
          console.log("submit error");
        }
      })
    },
    reset() {
      this.$refs.LoginForm.resetFields();
    },
    toregin() {
      this.$router.push("/regin");
    }
  }
};
</script>

<style scoped>
  .login-form {
    width: 310px;
    margin: 20px auto;
    padding: 30px 30px 0 30px;
    box-shadow: 0 0 35px #b4bccc;
    border-radius: 25px;
    background-color: #fff;
  }

  .submitBtn {
    width: 65%;
  }

  .to {
    color: #67c23a;
    cursor: pointer;
  }
</style>
