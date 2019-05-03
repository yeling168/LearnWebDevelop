//widget.js

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