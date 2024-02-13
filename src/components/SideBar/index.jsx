import './style.css';
import MenuList from "./MenuList"
export default function SideViewBar({menudata}){
    return(
        <div className="sideViewBarBody">

        <div className="SideViewBar">
            <MenuList menulist={menudata}/>
        </div>
        <h1 className='sideViewH1'>TreeView Side Bar</h1>
        </div>
    )
}