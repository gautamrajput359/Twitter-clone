import Content from "./components/Content"
import Info from "./components/Info"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <div className="main flex">
      <div className="main w-7/12"><Navbar /></div>
      <div className="main w-full border border-x-gray-200 border-y-0"><Content /></div>
      <div className="main w-[80%]"><Info /></div>
    </div>
    </>
  )
}

export default App
