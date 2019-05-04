//widget.js
import reducer from './widget';

//Actions

const LOAD = "widget/LOAD";
const CREATE = "widget/CREATE";
const UPDATE = "widget/UPDATE";
const REMOVE = "widget/REMOVE";

const initialState = {
  widget: null,
  isLoading: false
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    LOAD:
    //...
    CREATE:
    //...
    UPDATE:
    //...
    REMOVE:
    //...
    default:return state;
  }
}

//Action Creators

export function loadWidget(){
    return {
        type:LOAD
    }
}

export function createWidget(widget){
    return {
        type:CREATE,widget
    }
}

export function updateWidget(widget){
    return {
        type:CREATE,widget
    }
}

export function removeWidget(widget){
    return {
        type:REMOVE,widget
    }
}

//name space

//widget.js

//Actions，定义到types命名空间下

export const types={
    LOAD:'widget/LOAD',
    CREATE:'widget/CREATE',
    UPDATE:'widget/UPDATE',
    REMOVE:'widget/REMOVE'
}

const initialState={
    widget:null,
    isLoading:false
}

//Reducer

export default function reducer(state=initialState,action={}){
    switch(action.type){
        types.LOAD:
        //...
        types.CREATE:
        //...
        types.UPDATE:
        //...
        types.REMOVE:
        //...
        default:return state;
    }
}

//Action Creators,定义到actions命名空间下

export const actions={
    loadWidget:function(){
        return {type:types.LOAD};
    },
    createWidget:createWidget(widget){
        return {
            type:types.CREATE,widget
        }
    },
    updateWidget:function(widget){
        return {
            type:types.UPDATE,widget
        }
    },
    removeWidget:function(widget){
        return {
            type:types.REMOVE,widget
        }
    }
}