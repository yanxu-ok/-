<template>
    <div>
        <!-- 图标 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 游戏分类
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <!-- 列表分类 -->
            <div class="tags-wrap">
                <tagList
                    v-for="(category, index) in categorys"
                    :key="index"
                    :label="category.label"
                    :list="category.list"
                    @send="categoryClick"
                />
            </div>
            <!-- 表格区域 -->
            <el-table
                :data="filterDate"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column label="图片" align="center" prop="picture"></el-table-column>
                <el-table-column prop="gameId" label="游戏编号" width="80" align="center"></el-table-column>
                <el-table-column prop="gameName" label="游戏名称" align="center"></el-table-column>
                <el-table-column label="游戏类别" align="center" prop="gameCategory"></el-table-column>
                <el-table-column prop="gameCompany" label="开发公司" align="center"></el-table-column>
                <el-table-column label="上市时间" align="center" prop="gameDevelopDate"></el-table-column>
                <el-table-column prop="gamePlatForm" label="游戏平台" align="center"></el-table-column>
                <el-table-column prop="gameMode" label="游戏模式" align="center"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>-->
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="游戏名称">
                    <el-input v-model="form.gameName"></el-input>
                </el-form-item>
                <el-form-item label="游戏类别">
                    <el-input v-model="form.gameCategory"></el-input>
                </el-form-item>
                <el-form-item label="游戏平台">
                    <el-input v-model="form.gamePlatForm"></el-input>
                </el-form-item>
                <el-form-item label="游戏模式">
                    <el-input v-model="form.gameMode"></el-input>
                </el-form-item>
                <el-form-item label="开发公司">
                    <el-input v-model="form.gameCompany"></el-input>
                </el-form-item>
                <el-form-item label="上市时间">
                    <el-input v-model="form.gameDevelopDate"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import tagList from '_c/TagList';
import { GamesTable } from '@/api/GamesTable';
import { Category } from '@/api/Category';
export default {
    components: {
        tagList
    },
    name: 'GamesTable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            categorys: [],
            arr: ['全部', '全部', '全部'] // 这个是类别数组
        };
    },
    computed: {
        //游戏列表条件过滤
        filterDate() {
            return this.tableData.filter(item => {
                //根据三种条件过滤
                if (this.arr[0] == this.arr[1] && this.arr[1] == this.arr[2]) {
                    return item;
                } else {
                    return item.gameCategory == this.arr[0] || item.gamePlatForm == this.arr[1] || item.gameMode == this.arr[2];
                }
            });
        }
    },
    created() {
        Category()
            .then(res => {
                var newCategorys = [];
                var arr1 = res.slice(0, 5);
                arr1.unshift({ id: 0, label: '全部' });
                var arr2 = res.slice(5, 8);
                arr2.unshift({ id: 0, label: '全部' });
                var arr3 = res.slice(8, 12);
                arr3.unshift({ id: 0, label: '全部' });
                newCategorys.push(
                    { label: '游戏类型', list: arr1 },
                    {
                        label: '游戏模式',
                        list: arr2
                    },
                    {
                        label: '游戏平台',
                        list: arr3
                    }
                );
                this.categorys = newCategorys;
                // console.log(newCategorys);
            })
            .catch(err => {
                console.log('出错');
            });
    },
    mounted() {
        //表格
        GamesTable()
            .then(res => {
                this.tableData = res;
            })
            .catch(err => {
                console.log('出错');
            });
    },
    methods: {
        // 触发搜索按钮
        // handleSearch() {
        //     this.$set(this.query, 'pageIndex', 1);
        // },
        // 删除操作

        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            console.log(val); // 所有的信息
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            //row 是行信息
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        // // 分页导航
        // handlePageChange(val) {
        //     this.$set(this.query, 'pageIndex', val);
        // }
        //点击类别触发的事件
        categoryClick(tag, level) {
            switch (level) {
                case '游戏类型':
                    //动态的取赋值
                    this.$set(this.arr, 0, tag.label);
                    // this.arr[0] = tag.label;
                    break;
                case '游戏平台':
                    this.$set(this.arr, 1, tag.label);
                    break;
                case '游戏模式':
                    this.$set(this.arr, 2, tag.label);
                    break;
            }
            // console.log(this.arr);
        }
    }
};
</script>

<style scoped>
.tags-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
    margin-top: 15px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
