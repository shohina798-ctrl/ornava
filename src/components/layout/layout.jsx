import Header from './components/header/header'
import Restoration from '../../pages/restoration/restoration'
import Home from '../../pages/home/home'
import Footer from './components/footer/footer'
import Process from '../../pages/process/process'


const Layout = () => {
  return (
    <div>
        <Header/>
        <section id="home">
            <Home/>
        </section>
        <section id="restoration">
            <Restoration/>
        </section>
        <div className='relative w-full shadow-[0px_0px_28px_32px_#f1e3d1] h-1 bg-[#f1e3d1] z-10'></div>
        <section id="process">
            <Process/>
        </section>
        <div className='relative w-full shadow-[0px_0px_28px_32px_#f5e0c0] h-1 bg-[#f5e0c0] z-10'></div>
        <section id="footer">
          <Footer/>
        </section>
    </div>
  )
}

export default Layout