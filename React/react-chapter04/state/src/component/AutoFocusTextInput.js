import React,{ Component } from 'react';

class AutoFocusTextInput extends Component{
    // constructor(props){
    //     super(props);   
    // }
    
    componentDidMount(){
        //通过ref让input自动获取焦点
        this.textInput.focus();
        console.log(this);
    }

    render(){
        return (
            <div>
                <input type="text" ref={(input)=>{this.textInput=input;}}></input>
            </div>
        )
    }
}

export default AutoFocusTextInput;