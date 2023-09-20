
import { deleteItem, itmesType, setEditStatus } from '../redux/items'
import { useItemDispatch } from '../store/store'


const Data = (item:itmesType ) => {
  console.log("from Data")
  const dispatch=useItemDispatch()
  return (
    <div className='items'>
      <p>{item.item}</p>
      <div className="btns">
        <button onClick={()=>dispatch(deleteItem(item.id))}>Remove</button>
        <button onClick={()=>dispatch(setEditStatus(item.id))}>Edit</button>
      </div>
    </div>
  )
}

export default Data
