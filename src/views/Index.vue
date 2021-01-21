<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <!--动态读取router里面的东西-->
            <!--使用route动态设置菜单栏-->
            <el-menu router :default-openeds="['0', '1']">
                <!--router里面有几个对象就有几个submenu-->
                <!--for循环   v-for-->
                <!--取到routes   $router.options.routes-->
                <!--在$router.options.routes 后面设置index属性，获取当前对象的下标，作为index属性-->
                <!--(index,item)  拿到下标的方式，index写在item的后面，item还是对象，index是下标-->
                <!--index="index+''   使得导航一和导航二的  index不一样，  就不会同时打开，而是分别打开-->
                <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show">
                    <!--导航 name 不能写死   写成{{item.name}}-->
                    <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
                    <!--导航的下一层页面  添加el-item   遍历它的children属性   可以动态生成菜单-->
                    <!--children 里面也要加一个index， 不然点击不了-->
                    <!--class="is-active"   全部变为选项蓝色-->
                    <el-menu-item v-for="(item_child,index_child) in item.children" :index="item_child.path"
                                  :class="$route.path==item_child.path?'is-active':''">{{item_child.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <!--main在这里加<router-view></router-view>  显示page1234的内容-->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>