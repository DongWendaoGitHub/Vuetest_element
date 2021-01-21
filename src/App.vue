<template>
  <div id="app">
    <router-view></router-view>
<!--    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        &lt;!&ndash;动态读取router里面的东西&ndash;&gt;
        &lt;!&ndash;使用route动态设置菜单栏&ndash;&gt;
        <el-menu>
          &lt;!&ndash;router里面有几个对象就有几个submenu&ndash;&gt;
          &lt;!&ndash;for循环   v-for&ndash;&gt;
          &lt;!&ndash;取到routes   $router.options.routes&ndash;&gt;
          &lt;!&ndash;在$router.options.routes 后面设置index属性，获取当前对象的下标，作为index属性&ndash;&gt;
          &lt;!&ndash;(index,item)  拿到下标的方式，index写在item的后面，item还是对象，index是下标&ndash;&gt;
          &lt;!&ndash;index="index+''   使得导航一和导航二的  index不一样，  就不会同时打开，而是分别打开&ndash;&gt;
          <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
            &lt;!&ndash;导航 name 不能写死   写成{{item.name}}&ndash;&gt;
            <template slot="title"><i class="el-icon-setting"></i>{{index}}-{{item.name}}</template>
         &lt;!&ndash;导航的下一层页面  添加el-item   遍历它的children属性   可以动态生成菜单&ndash;&gt;
            &lt;!&ndash;children 里面也要加一个index， 不然点击不了&ndash;&gt;
            <el-menu-item v-for="(item_child,index_child) in item.children" :index="index+'-'+index_child">{{item_child.name}}</el-menu-item>
          </el-submenu>
        </el-menu>


&lt;!&ndash;        <el-menu :default-openeds="['1', '3']">&ndash;&gt;
&lt;!&ndash;          <el-submenu index="1">&ndash;&gt;
&lt;!&ndash;            <template slot="title"><i class="el-icon-message"></i>导航一</template>&ndash;&gt;
&lt;!&ndash;            <el-menu-item-group>&ndash;&gt;
&lt;!&ndash;              <template slot="title">分组一</template>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="1-1">选项1</el-menu-item>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="1-2">选项2</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;
&lt;!&ndash;            <el-menu-item-group title="分组2">&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="1-3">选项3</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;
&lt;!&ndash;            <el-submenu index="1-4">&ndash;&gt;
&lt;!&ndash;              <template slot="title">选项4</template>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="1-4-1">选项4-1</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-submenu>&ndash;&gt;
&lt;!&ndash;          </el-submenu>&ndash;&gt;
&lt;!&ndash;          <el-submenu index="2">&ndash;&gt;
&lt;!&ndash;            <template slot="title"><i class="el-icon-menu"></i>导航二</template>&ndash;&gt;
&lt;!&ndash;            <el-menu-item-group>&ndash;&gt;
&lt;!&ndash;              <template slot="title">分组一</template>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="2-1">选项1</el-menu-item>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="2-2">选项2</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;
&lt;!&ndash;            <el-menu-item-group title="分组2">&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="2-3">选项3</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;
&lt;!&ndash;            <el-submenu index="2-4">&ndash;&gt;
&lt;!&ndash;              <template slot="title">选项4</template>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="2-4-1">选项4-1</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-submenu>&ndash;&gt;
&lt;!&ndash;          </el-submenu>&ndash;&gt;
&lt;!&ndash;          <el-submenu index="3">&ndash;&gt;
&lt;!&ndash;            <template slot="title"><i class="el-icon-setting"></i>导航三</template>&ndash;&gt;
&lt;!&ndash;            <el-menu-item-group>&ndash;&gt;
&lt;!&ndash;              <template slot="title">分组一</template>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="3-1">选项1</el-menu-item>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="3-2">选项2</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;
&lt;!&ndash;            <el-menu-item-group title="分组2">&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="3-3">选项3</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;
&lt;!&ndash;            <el-submenu index="3-4">&ndash;&gt;
&lt;!&ndash;              <template slot="title">选项4</template>&ndash;&gt;
&lt;!&ndash;              <el-menu-item index="3-4-1">选项4-1</el-menu-item>&ndash;&gt;
&lt;!&ndash;            </el-submenu>&ndash;&gt;
&lt;!&ndash;          </el-submenu>&ndash;&gt;
&lt;!&ndash;        </el-menu>&ndash;&gt;

      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>DongWendao</span>
        </el-header>

        <el-main>
          &lt;!&ndash;main在这里加<router-view></router-view>  显示page1234的内容&ndash;&gt;
          <router-view></router-view>
&lt;!&ndash;          <el-table :data="tableData">&ndash;&gt;
&lt;!&ndash;            <el-table-column prop="date" label="日期" width="140">&ndash;&gt;
&lt;!&ndash;            </el-table-column>&ndash;&gt;
&lt;!&ndash;            <el-table-column prop="name" label="姓名" width="120">&ndash;&gt;
&lt;!&ndash;            </el-table-column>&ndash;&gt;
&lt;!&ndash;            <el-table-column prop="address" label="地址">&ndash;&gt;
&lt;!&ndash;            </el-table-column>&ndash;&gt;
&lt;!&ndash;          </el-table>&ndash;&gt;
        </el-main>
      </el-container>
    </el-container>-->
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2020-01-17',
        name: 'DongWendao',
        address: '百慕大三角'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>