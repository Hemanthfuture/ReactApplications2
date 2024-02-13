import MenuItem from "./MenuItem";
import './style.css';


export default function MenuList({menulist=[]}){
    return(
        <ul className="MenuListItems">
            {
                menulist&&menulist.length>0?
                menulist.map((menuItem,index)=>{
                    return(
                        <MenuItem key={index} item={menuItem}/>
                    )
                })
                :null
            }
        </ul>
    );
}
