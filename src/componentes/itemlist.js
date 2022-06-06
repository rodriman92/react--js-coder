import { Item } from "./item"
export const Itemlist = ({items}) =>{
    return(
        <div>
           
      { items.map ( (item) => <Item item={item} />) }
    
        </div>
    )
}