import { useRef,useEffect } from 'react';
import { useItemDispatch, useItemsSelector } from '../store/store'
import Data from './Data';
import { addItem, editItem } from '../redux/items';

const Container = () => {
  console.log("from container")
    const items= useItemsSelector(state=> state.itemsReducer.items);
    const isEditOptionEnable=useItemsSelector(state=> state.itemsReducer.isEditOption)
    const dispatch = useItemDispatch()
    const inputRef=useRef<HTMLInputElement|null>(null)

    const handleClick=()=>{
      const inputElCur=inputRef.current

       if(!isEditOptionEnable.status){
        if(inputElCur && inputElCur.value!="") dispatch(addItem(inputElCur?.value))
       }else{
        if(inputElCur && inputElCur.value!="" ) dispatch(editItem({id:isEditOptionEnable.itemId as number,item:inputElCur?.value}))
       }
       if(inputElCur) inputElCur.value=""
    }

    useEffect(()=>{
      if(isEditOptionEnable.status && inputRef.current){
        const item=items.find(e=> e.id==isEditOptionEnable.itemId)?.item as string
        inputRef.current.value=item
      }
    },[isEditOptionEnable.status])

  return (
    <div className='container'>
      <div className="header">
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>{isEditOptionEnable.status?"Save":"Create"}</button>
      </div>
        {items.length!=0 && (
            <div className="section">
                {items.map((item=>{
                    return <Data key={item.id} {...item}/>
                }))}
            </div>
        )}
    </div>
  )
}

export default Container
