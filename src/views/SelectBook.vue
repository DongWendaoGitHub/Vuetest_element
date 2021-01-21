<template> <!--里面只能有一个根节点   可以用div-->
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="书名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="publish"
                    label="出版社"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="pages"
                    label="页数"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格"
                    width="120">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="alter(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="5"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            /*删除图书--方法*/
            /*直接调接口*/
            deleteBook(row){
                const _this = this
                axios.delete('http://localhost:8181/book/deleteById/'+row.id).then(function (resp) {
                    _this.$message('删除成功');
                    //_this.$router.push(('/SelectBook'));//跳转到删除后的图书界面
                    window.location.reload();
                })
            },

            alter(row) {
                /*跳转到update界面*/
                this.$router.push({
                    path: '/BookUpdate',
                    query:{
                        id:row.id
                    }
                })
            },
            /*定义一个page方法*/
            page(currentPage){
                const _this = this
                axios.get('http://localhost:8181/book/findAll/'+currentPage+'/5').then(function (resp) {
                    _this.tableData = resp.data.content
                    _this.total = resp.data.totalElements
                })
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/book/findAll/1/5').then(function (resp) {
                _this.tableData = resp.data.content
                _this.total = resp.data.totalElements
            })
        },
        data() {
            return {
                total: null,
                tableData: null
            }
        }
    }
</script>

<!--mune 与 route 的绑定-->
<!--1.<el-menu> 标签添加route属性-->
<!--2.在页面中添加<route-view> 标签   ， 他是一个容器，动态渲染你的route-->
<!--怎么去控制跳转   <el-menu-item>  标签的index的值就是要跳转的  取下标自动跳转-->