import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Navbar title='BLOG' title2='NEWS'/>
    <div className="CONTAINER">
    <Textform HEADING='TYP THE TEXT TO ANALYZE'/> 
    </div>
    </>
  )
}

export default App;