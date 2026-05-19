import bgImage from '../../../../assets/images/image (4).png'
import logo from '../../../../assets/images/Logo.png'
import iconAI from '../../../../assets/images/Geometry Icon copy.png';
import { MapPin, Send } from 'lucide-react';
import LineDot from '../header/lineDot';
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import { GiCheckedShield } from 'react-icons/gi';
import { HiBuildingLibrary } from 'react-icons/hi2';
const Footer = () => {
  let arrData = [
    {
      id: 1,
      icon: <GiCheckedShield size={40} className='text-[#94681f]'/>,
      text1: "Подлинность важнее всего",
      text2: "Мы сохроняем историческую правду артефакта." 
    },
    {
      id: 2,
      icon: <HiBuildingLibrary size={90} className='text-[#94681f] text-[90px]'/>,
      text1: "Современные ИИ-технологии",
      text2: "Алгоритмы исскуственного интелекта бережно восстанавливают детали и узоры." 
    },
    {
      id: 3,
      icon: <GiCheckedShield size={80} className='text-[#94681f]'/>,
      text1: "Музейный подход",
      text2: "Профессиональный взгляд на сохранение культурного наследия." 
    },
    {
      id: 4,
      icon: <GiCheckedShield size={80} className='text-[#94681f]'/>,
      text1: "Культурная ценность для будущих поколений",
      text2: "Мы сохраняем традицию и историю для будущего" 
    }
  ]
  return (
    <div>
        <footer className='relative'>
            <div style={{ backgroundImage: `url("${bgImage}")`}} className="w-full py-30 px-28 bg-no-repeat bg-cover bg-center h-250">
                <div className='flex justify-between my-20 py-5 mt-0 px-5 border-1 border-[#b69354] rounded-2xl'>
                  {arrData.map((elem, ind) => (
                    <div className={`w-[23%] flex items-start gap-5 px-10 ${ind == arrData.length - 1 ? 'border-r-0' : 'border-r-1 border-[#b69354]'}`}>
                      {elem.icon}
                      <div>
                        <p className='text-[25px] bg-red-400'>{elem.text1}</p>
                        <p>{elem.text2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              <div className='flex justify-around'>
                <div className='w-[50%]'>
                  <div className='flex items-center'>
                    <img src={logo} className='w-30 -ml-9'/>
                    <div>
                      <p className='font-serif text-[25px] font-bold'>Ornava</p>
                      <p className='text-[#b17912]'>Реставрация культурных изображений</p>
                    </div>
                  </div>
                  <p>Ornava - платформа на базе искусственного интеллекта для бережноц реставрации исторических орнаментов, ковров, текстильных узоров, рукописей и культурных артефактов, текстильных узров, рукописей и культурных артефактов с сохранением подлинности и традиций.</p>
                </div>
                <div className='w-fit h-fit pl-15 border-l-1 border-[#cd9b3f]'>
                  <p className='text-[#b17912] font-bold text-[25px]'>СВЯЖИТЕСЬ С НАМИ</p>
                  <LineDot className="w-full my-2"/>
                  <div className='flex flex-col gap-4 mt-5'>
                    <p className='flex items-center gap-3'><MdLocationOn size={24} className='text-[#b17912]'/>Душанбе, республика Таджикистан</p>
                    <a href={`https://t.me/codingiTojikona`} className='flex items-center gap-3'><FaTelegramPlane size={24} className='text-[#b17912]'/>https://t.me/codingiTojikona</a>
                    <a href={`https://www.instagram.com/kavsaracademy.tj?igsh=NzJsYWIxaTF0eDJ2`} className='flex items-center gap-3'><RiInstagramFill  size={24} className='text-[#b17912]'/>kavsaracademy.tj</a>
                    <p onClick={() => navigator.clipboard.writeText("(+992) 205122525")} className='flex items-center gap-3'><FaPhoneAlt   size={23} className='text-[#b17912]'/>(+992) 205122525</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#6a4f27] h-17 w-full flex justify-between items-center text-[#e3dac1] absolute bottom-0 z-10 right-0 shadow-[0_0px_30px_30px_#e3dac1]'>
              <div className='border-t-3 border-[#e3dac1] w-full pt-4 pb-3 px-30 flex justify-between items-center'>
                <p className='w-[33%]'>© 2026 Ornava. Все права защищены.</p>
                <div className='flex gap-3 items-center w-[33%] justify-center'>
                  <img src={iconAI} className='h-7'/>
                  <p>Сохраняем наследие. Сохраняем историю.</p>
                </div>
                <div className='flex gap-5 w-[30%] justify-end'>
                  <FaInstagram size={24}/>
                  <FaTelegramPlane size={24}/>
                </div>
              </div> 
            </div>
        </footer>
    </div>
  )
}

export default Footer