<template>
    <div class="rolesControl">
        <el-card>
            <el-button type="primary" @click="addRolesTab">添加权限</el-button>
            <el-table
            class="mtop30"
            :data="rolesTab"
            stripe
            border
            style="width:100%">
            <el-table-column prop="key" label="身份"></el-table-column>
            <el-table-column prop="description" label="说明"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="editRoles(scope.$index,scope.row)">编辑</el-button>
                    <el-button type="warning" @click="deleteRoles(scope.$index)" :disabled="isAdmin(scope.row)"></el-button>
                </template>
            </el-table-column>
            </el-table>
        </el-card>
        <el-dialog title="权限编辑" :visible.sync="diaIsShow" class="diaForm">
            <el-form :ref="rolesForm" :model="formData" :rules="rules" label-width="140px">
                <el-form-item label="身份" prop="key">
                    <el-input type="text" placeholder="请输入要添加的身份类别" v-model="formData.key"></el-input>
                </el-form-item>
                <el-form-item label="说明" prop="description">
                    <el-input type="text" placeholder="请输入相关说明" v-model="formData.description"></el-input>
                </el-form-item>
                <el-form-item label="菜单">
                    <el-tree :data="treeData" ref="tree" node-key="name" :props="defaultProps" show-checkbox :check-strictly="false"></el-tree>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="changeRoles('rolesForm',editType)">确认</el-button>
                    <el-button @click="diaIsShow=false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import {getAllRolse} from '@api/roles'
import {asyncRoutes,currencyRoutes} from '@/router'
export default {
    data() {
        return {
            rolesTab:[],
            diaIsShow:false,
            formData:{},
            editType:'update',
            rules:{
                key:[{
                    required:true,
                    message:'请输入要添加的身份类别',
                    trigger:'blur'
                }],
                description:[{
                    required:true,
                    message:'请输入相关说明',
                    trigger:'blur'
                }]
            },
            editIndex:0,
            allRoute:[...currencyRoutes,...asyncRoutes],
            treeData:[],
            defaultProps:{
                label:'label',
                children:'children'
            }
        }
    },
    created() {
        this._getAllRolse()
        this.treeData=this.getTreeData(this.allRoute)
    },
    methods:{
        _getAllRolse() {
            getAllRolse().then(res =>{
                this.rolesTab = res.data.allRoles
            })
            .catch(error =>{
                this.$message.error(error)
            })
        }
    }
}
</script>