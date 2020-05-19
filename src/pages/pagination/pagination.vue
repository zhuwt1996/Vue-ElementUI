<template>
  <div>
    <div>
      <span>页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="50" small></el-pagination>
    </div>
    <div>
      <span>大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="3000" :pager-count="10"></el-pagination>
    </div>

    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="200"
        layout="total, sizes, prev, pager, next, jumper"
        :total="2000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  }
};
</script>

<style scoped>
</style>