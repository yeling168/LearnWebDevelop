import React, { Component } from "react";
import url from "../utils/url";

class PostList extends Component{
    componentDidMount(){
        this.refreshPostList();
    }

    refreshPostList(){
        //调用后台API获取列表数据，并将返回的数据设置到state中
        get(url.getPostList()).then(data=>{
            if(!data.error){
                this.setState({
                    posts:data,
                    newPost:false
                })
            }
        })
    }
}