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
                />
            </div>
            <!-- 表格区域 -->
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column label="头像(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.thumb"
                            :preview-src-list="[scope.row.thumb]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="游戏编号" width="80" align="center"></el-table-column>
                <el-table-column prop="name" label="游戏名称" align="center"></el-table-column>
                <el-table-column label="游戏类别" align="center" prop="cat"></el-table-column>
                <el-table-column prop="address" label="开发公司"></el-table-column>
                <el-table-column label="上市时间" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                        >{{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="玩家测评"></el-table-column>
                <el-table-column prop="date" label="游戏平台"></el-table-column>
                <el-table-column prop="date" label="游戏模式"></el-table-column>
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
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="pageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>
        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="游戏名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="游戏类别">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="游戏平台">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="游戏模式">
                    <el-input v-model="form.address"></el-input>
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
export default {
    components: {
        tagList
    },
    name: 'basetable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    cat: '动作'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    cat: '动作'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    cat: '动作'
                }
            ],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1,
            categorys: [
                {
                    label: '游戏类型',
                    list: [
                        { id: 1, label: '全部' },
                        { id: 2, label: '动作' },
                        { id: 3, label: '冒险' },
                        { id: 4, label: '角色扮演' },
                        { id: 5, label: '策略' },
                        { id: 6, label: '竞技类' }
                    ]
                },
                {
                    label: '游戏语言',
                    list: [
                        { id: 1, label: '全部' },
                        { id: 2, label: '简体中文' },
                        { id: 3, label: '繁体中文' },
                        { id: 4, label: 'English' },
                        { id: 5, label: '其他' }
                    ]
                },
                {
                    label: '游戏平台',
                    list: [
                        { id: 1, label: '全部' },
                        { id: 3, label: 'STEAM' },
                        { id: 4, label: 'EPIC' },
                        { id: 5, label: 'ORIGIN' },
                        { id: 6, label: 'WEGAME' }
                    ]
                },
                {
                    label: '游戏模式',
                    list: [{ id: 1, label: '全部' }, { id: 2, label: '单人' }, { id: 3, label: '双人' }, { id: 4, label: '多人' }]
                }
            ]
        };
    },
    methods: {
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
        },
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
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
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
