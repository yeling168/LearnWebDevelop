<template>
    <div>
        <input type="file" class="upFile" ref="fileExcel" accept=".xlsx,.xls" @change="uploadFile"/>
        <el-button type="primary" @click="handleClick">导入</el-button>
    </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
    props:{
        breforeUpload:Function,
        onSuccess:Function
    },
    data() {
        return {
            excelList:{
                header:null,
                results:null
            }
        }
    },
    methods:{
        handleClick() {
            this.$refs.fileExcel.click()
        },
        generateData({header,results}) {
            this.excelList.header = header;
            this.excelList.results = results
            this.onSuccess && this.onSuccess(this.excelList)
        },
        uploadFile(e){
            const file = e.target.files[0]
            this.$refs.fileExcel.value = null
            this.readData(file)
        },
        readData(file) {
            return new Promise(resolve =>{
                const readfile = new FileReader()
                readfile.onload = e =>{
                    const data = e.target.result
                    const workbook = XLSX.read(data,{type:'array'})
                    const firstSheetName = workbook.SheetNames[0]
                    const worksheet = workbook.Sheets[firstSheetName]
                    
                }
            })
        }
    }
}
</script>