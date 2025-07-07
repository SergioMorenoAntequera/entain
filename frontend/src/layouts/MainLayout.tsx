import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({children}: {children: React.ReactNode}) {
  
  return (<div>
    
    <Header/>

    <div> {children} </div>

    <Footer/>

  </div>)
}

export default MainLayout