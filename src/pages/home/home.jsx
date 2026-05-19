import bgImage from '../../assets/images/home.png'
import geometryIcon from '../../assets/images/Geometry Icon copy.png'
import { Settings } from 'lucide-react'
import PutYourImg from '../../components/pages/home/putYourImg'
import HomeFooter from '../../components/pages/home/homeFooter'
import { useTranslation } from 'react-i18next'

const Home = () => {
    let { t } = useTranslation()
  return (
    <div>
        <div style={{ backgroundImage: `url(${bgImage})`}} className="w-full -mt-33 flex items-center bg-no-repeat bg-cover bg-center h-250">
            <div className='ml-[13%] mr-[5%] text-[#2d2217] flex justify-between'>
                <div className='w-[65%] flex flex-col gap-10'>
                    <div className='text-[#be944b] font-bold px-5 py-2 gap-3 flex items-center border-[#cfa253] w-fit pr-10 border-1 rounded-4xl'>    
                        <img src = {geometryIcon} alt="" className='w-8'/>
                        <p>{t("ai_title")}</p>
                    </div>
                    <b className='text-[55px]'>{t("main_title")}</b>
                    <p className='font-medium w-[57%]'>{t("description")}</p>
                    <div className='flex items-center gap-10 font-medium'>
                        <button className='flex items-center gap-3 text-white bg-[#be944b] px-5 py-2 rounded-4xl w-fit shadow-[0_0px_20px_0_#b38041] hover:-mt-2'>
                            <Settings/>
                            <p>{t("start_restoration")}</p>
                        </button>
                        <button className='flex items-center gap-3 bg-[#edeae6] border-1 border-[#be944b] px-5 py-2 rounded-4xl w-fit shadow-[0_0px_20px_-4px_#be944b] hover:-mt-2'>
                            <p>{t("learn_features")}</p>
                        </button>
                    </div>
                </div>
                <div className='w-[40%]'>
                    <PutYourImg/>
                </div>
            </div>
        </div>
        <section id="features">
            <HomeFooter/>
        </section>
    </div>
  )
}

export default Home