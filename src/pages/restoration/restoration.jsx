import { PiShieldStarFill } from 'react-icons/pi'
import bgImage from '../../assets/images/Background_Page_2.png'
import iconAI from '../../assets/images/Geometry Icon copy.png'
import LineDot from '../../components/layout/components/header/lineDot'
import PutYourImg from '../../components/pages/restoration/putYourImg'
import { RiImageCircleAiFill } from 'react-icons/ri'
import { GiAmphora, GiOilySpiral } from 'react-icons/gi'

const Restoration = () => {
    let arrData = [
        {
            id: 1,
            icon: <PiShieldStarFill size={50} />,
            text1: "Безопастность оригинала",
            text2: "Мы не изменяем оригинал, работаем только с ее копией"
        },
        {
            id: 2,
            icon: <RiImageCircleAiFill size={50} />,
            text1: "Современные ИИ-технологии",
            text2: "Алгоритмы исскуственного интелекта бережно восстанавливают детали и узоры." 
        },
        {
            id: 4,
            icon: <GiOilySpiral size={50} />,
            text1: "Культурная ценность для будущих поколений",
            text2: "Мы сохраняем традицию и историю для будущего" 
        }
    ]
  return (
    <div>
        <div style={{ backgroundImage: `url(${bgImage})`}} className="w-full text-[#2d2217] flex bg-no-repeat bg-cover bg-center h-250">
            <div className='flex items-start justify-between w-full pt-5'>
                <div className='pl-[10%] w-[38%] flex flex-col items-start mt-15'>
                    <img src={iconAI} className='w-10 mb-5'/>
                    <b className='text-[45px] font-serif'>Бережная реставрация культурных изображений</b>
                    <LineDot className="my-5 w-full"/>
                    <p>Загрузите исходное изображение, выберите силу реставрации и посмотрите результат только после завершения обработки</p>
                    <div className='flex flex-col gap-5 mt-8'>
                        {arrData.map(elem => (
                            <div key={elem.id} className='flex items-start gap-5'>
                                <div className="w-[70px] h-[70px] flex items-center justify-center text-[#5c4213]">
                                    {elem.icon}
                                </div>
                                <div className='w-[90%]'>
                                    <b>{elem.text1}</b>
                                    <p className='text-[14px]'>{elem.text2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[60%] pr-[5%] mt-10'>
                    <PutYourImg/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Restoration