<template>
  <div class="container login-page">
    <div class="row main-section">
      <div class="col-md-5 col-sm-4 left-side  d-flex justify-content-center align-items-center">
        <img class="background-desktop hidden-xs" src="@/assets/img/design/squares-background.svg">
        <img class="background-desktop visible-xs" src="@/assets/img/design/background-with-squares.svg">
        <div class="logo-section">
          <img class="logo" src="@/assets/img/design/logo.svg">
          <p>Automatically personalize your<br /> website & email to each visitor.</p>
        </div>
      </div>
      <div class="col-md-7 col-sm-8 right-side">
        <p class="signup-notify">Don't have an account?&nbsp;<a href="/#/register">Sign up</a></p>
        <div class="title-section">
          <img class="plants-left hidden-xs" src="@/assets/img/design/plants-left.svg">
          <p>Sign in to DataCue</p>
        </div>
        <form v-on:submit.prevent="loginAction">
          <div class="row">
            <div class="col-12 mt-5">
              <label>Email</label>
              <input type="email"
                        label="Email"
                        placeholder="Email"
                        class="form-control border-input"
                        v-model="userEmail"
                        required>
              </input>
            </div>
            <div class="col-12 mt-4">
              <div class="d-flex justify-content-between">
                <label>Password</label>
                <a @click="isPasswordVisible = !isPasswordVisible" class="hidden-xs">
                  <i :class="isPasswordVisible ? 'fa fa-eye-slash' : 'ti-eye'" class="mr-2" />
                  <label>{{ isPasswordVisible ? 'Hide Password' : 'Show Password' }}</label>
                </a>
              </div>
              <input :type="isPasswordVisible ? 'text' : 'password'"
                        placeholder="Password"
                        class="form-control border-input"
                        v-model="userPassword"
                        required>
              </input>
            </div>
            <div class="col-12 visible-xs mt-2 justify-content-end">
              <a @click="isPasswordVisible = !isPasswordVisible">
                <i :class="isPasswordVisible ? 'fa fa-eye-slash' : 'ti-eye'" class="mr-2" />
                <label>{{ isPasswordVisible ? 'Hide Password' : 'Show Password' }}</label>
              </a>
            </div>
            <div class="col-12 d-flex align-items-center justify-content-between mt-3">
              <p-button slot="footer" nativeType="submit" type="warning" block>Login</p-button>
              <img class="plants-right hidden-xs" src="@/assets/img/design/plants-right.svg">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { sendPost } from '@/utils/api'

export default {
  data() {
    return {
      userEmail: '',
      userPassword: '',
      isPasswordVisible: false,
    };
  },
  methods: {
    loginAction() {
      sendPost('/login', {
        email: this.userEmail,
        password: this.userPassword,
      })
      .then(response => {
        if (response.data.success) {
          localStorage.setItem('Authenticated', true);
          this.$router.push('/dashboard');
        } else {
          alert('Credential error');
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};
</script>
<style lang="scss">
  .login-page {
    height: 100vh;
    display: flex;
    align-items: center;
    @media (max-width: 768px){
      align-items: flex-start;
      padding: 0;
    }
    a {
      label {
        cursor: pointer;
      }
    }
    p {
      margin-bottom: 0;
    }
    .main-section {
      width: 100%;
      height: fit-content;
      @media (max-width: 768px){
        margin-left: 0;
        margin-right: 0;
      }
    }
    .left-side {
      @media (max-width: 768px){
        padding: 0;
      }
      flex-direction: column;
      .logo-section {
        position: absolute;
        text-align: center;
        margin-top: -20px;
        @media (max-width: 768px){
          width: 100%;
          margin-top: 60px;
          img {
            width: 70%;
          }
          p {
            margin-top: 40px;
            font-size: 20px;
          }
        }
        p {
          margin-top: 30px;
          font-weight: 600;
        }
      }
    }
    .right-side {
      padding-left: 80px;
      padding-right: 50px;
      @media (max-width: 768px){
        padding-left: 30px;
        padding-right: 30px;
        margin-bottom: 50px;
      }
      .signup-notify {
        text-align: right;
        font-size: 14px;
        margin-top: 40px;
        @media (max-width: 768px){
          text-align: center;
        }
        a {
          color: #f4c34f;
        }
      }
      .title-section {
        position: relative;
        border-bottom: 2px solid #ebebeb;
        margin-top: 100px;
        padding-bottom: 5px;
        @media (max-width: 768px){
          width: fit-content;
          margin: 60px auto 0;
        }
        img {
          position: absolute;
          width: 20%;
          bottom: 5px;
        }
        p {
          width: 100%;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          @media (max-width: 768px){
            font-size: 26px;
          }
        }
      }
      form {
        button {
          width: auto;
          padding-left: 40px;
          padding-right: 40px;
          @media (max-width: 768px){
            width: 100%;
          }
        }
      }
    }
    .hidden-xs {
      display: none;
      @media (min-width: 768px){
        display: flex;
      }
    }
    .visible-xs {
      display: flex;
      @media (min-width: 768px){
        display: none;
      }
    }
  }
</style>
