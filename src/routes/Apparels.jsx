import { useSelector } from "react-redux"
import HomeItem from "../components/HomeItem"

const Apparels =()=>{

  const allItems=useSelector(store=>store.items)
  let filterItem=[]
  allItems.forEach(item => {
     if(item.category==="clothing")
    filterItem.push(item)
    return filterItem
  })

  return(
    <div className="items-container">

      {filterItem.map((item)=><HomeItem key={item.id} item={item}/>)}
    </div>
  )
}
export default Apparels