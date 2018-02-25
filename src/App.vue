<template>
  <div id="app">
    <!-- element-ui 容器布局 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 头部组件渲染 -->
        <header-ly></header-ly>
      </el-header>
      <!-- 中间主要区域容器 -->
      <el-container>
        <!-- 添加一个element-ui 内置的过渡动画 -->
        <transition name="el-zoom-in-center">
          <!-- 通过路由渲染不同内容的页面 -->
          <router-view></router-view>
        </transition>
      </el-container>
      <!-- 底部 -->
      <el-footer>
        <!-- 底部组建渲染 -->
        <footer-ly></footer-ly>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderLy from "@/components/Header";
import FooterLy from "@/components/Footer";
export default {
  name: "App",
  components: {
    HeaderLy,
    FooterLy
  }
};
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>
