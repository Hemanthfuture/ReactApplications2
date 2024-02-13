import './App.css';
import sideMenu from './components/SideBar/menuData';
import ChangeTheTheme from './components/ChangeTheme';
import Accordian from './components/accordian';
import GetRandomColor from './components/RandomColorGenerator';
import StarRating from './components/starRating';
import ImageSlider from './components/imageSlider';
import LoadMore from './components/LoadMoreData';
import SideViewBar from './components/SideBar';
import QrGenerator from './components/QrCodeGenerator';
import ScrollBarPercentage from './components/ScrollIndicator';
import tabData from './components/CustomTabs/data';
import Tabs from './components/CustomTabs/Tabs';
import data from './components/accordian/data';
import ModelTest from './components/custom-model-popup/ModelTest';

function App() {
  return (
    <div className="App">
      <Accordian/>
      {/* <GetRandomColor/> */}
      <StarRating 
      noOfStars={10}
      />
      {/* <ImageSlider
      url={"https://picsum.photos/v2/list"}
      page={1}
      limit={10}
      /> */}
      {/* <LoadMore/> */}
      <SideViewBar menudata={sideMenu}/>
      {/* <QrGenerator/> */}
      <ChangeTheTheme />
      {/* <ScrollBarPercentage url={'https://dummyjson.com/products?limit=100'}/> */}
      <Tabs tData={tabData}/>
      <ModelTest/>


      
    </div>
  );
}

export default App;
