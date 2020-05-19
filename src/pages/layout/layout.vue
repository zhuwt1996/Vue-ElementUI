<!-- 
el-row 

el-col  通过span控制占比(总24份)
 -->
<template>
  <div>
    <div>
        <h3>普通</h3>
    <span>el-col  通过:span控制占比(总24份)</span>
    <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
        <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="8">
        <div class="grid-content bg-purple"></div>
        </el-col>
    </el-row>
    </div>
    <div>
        <h3>分栏间隔</h3>
        <span>使用el-row的gutter属性</span>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        
    </div>

    <div>
        <h3>偏移</h3>
        <span>使用el-row的offset属性</span>
        <el-row :gutter="20">
            <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        
    </div>

    <h3>通过 flex 布局来对分栏进行灵活的对齐</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
/* @import url("//unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css"); */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>