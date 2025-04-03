import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {


  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="card 1" description="Chotha Bheem" />
        <Card title="card 2" description="Chutki" />
        <Card title="card 3" description="Nobita" />
        <Card title="card 4" description="Suzuka" />
      </div>
      <Footer/>
    </>
  )
}

export default App



