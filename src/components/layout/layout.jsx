import Header from './components/header/header'
import Restoration from '../../pages/restoration/restoration'
import Home from '../../pages/home/home'
import Footer from './components/footer/footer'
import Process from '../../pages/process/process'
import ResultRestauration from '../../pages/resultRestauration/resultRestauration'
import { useState } from 'react'

const Layout = () => {
  let [restoredData, setRestoredData] = useState(false);
  return (
    <div>
        <Header/>
        <section id="home">
            <Home/>
        </section>
        <section id="process">
            <Process/>
        </section>
        <div className='relative w-full shadow-[0px_0px_28px_32px_#f1e3d1] h-1 bg-[#f1e3d1] z-10'></div>
        <section id="restoration">
            <Restoration setRestoredData={setRestoredData}/>
        </section>
        <div className='relative w-full shadow-[0px_0px_28px_32px_#f1e3d1] h-1 bg-[#f1e3d1] z-10'></div>
        {restoredData && (
                <div>
                    <section id="resultRestauration">
                        <ResultRestauration restoredData={restoredData}/>
                    </section>
                    <div className='relative w-full shadow-[0px_0px_28px_32px_#eddec8e0] h-1 bg-[#eddec8e0] z-10'></div>
                </div>
            )}
        <section id="aboutUs">
          <Footer/>
        </section>
    </div>
  )
}

export default Layout