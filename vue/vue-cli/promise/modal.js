//弹出窗体

let confirm=popupManager.confirm('您确定么?');

confirm.promise
.then(()=>{
    //do confirm staff
});

//窗体构造函数

class Confirm{
    constructor(){
        this.promise=new Promise((resolve,reject)=>{
            this.confirmButton.onClick=resolve;
            this.cancelButton.onClick=reject;
        })
    }
}