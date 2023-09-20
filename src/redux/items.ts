import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type itmesType={
    id:number,
    item:string
}
type initState={
    isEditOption:{
        status:boolean,
        itemId?:number
    },
    items:itmesType[]
}
type editType={
    id:number,
    item:string
}

const initialState:initState={
    isEditOption:{
        status:false,
    },
    items:[]
}

const items=createSlice({
    name:"appitems",
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<string>)=>{
            state.items.push({
                id:state.items.length!=0 ? state.items[state.items.length-1].id+1 : 1010 ,
                item:action.payload
            })
        },
        deleteItem:(state,action:PayloadAction<number>)=>{
            state.items=state.items.filter((itme)=>itme.id!=action.payload)
        },
        setEditStatus:(state,action:PayloadAction<number>)=>{
            state.isEditOption.status=true,
            state.isEditOption.itemId=action.payload
        },
        editItem:(state,action:PayloadAction<editType>)=>{
            state.items=state.items.map((item)=>{
                if(item.id==action.payload.id){
                    state.isEditOption.status=false
                    delete state.isEditOption.itemId
                    return action.payload
                }
                return item
            })
        }
    }

})

export const{addItem,deleteItem,setEditStatus,editItem}=items.actions
export default items.reducer