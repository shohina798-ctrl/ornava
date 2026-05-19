import bgImage from '../../../../assets/images/image_f.png'
import logo from '../../../../assets/images/Logo.png'
import iconAI from '../../../../assets/images/Geometry Icon copy.png';
import borderImg from '../../../../assets/images/detal2_page_1.png';
import LineDot from '../header/lineDot';
import { FaInstagram, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiImageCircleAiFill, RiInstagramFill } from 'react-icons/ri';
import { GiAmphora, GiOilySpiral } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { PiShieldStarFill } from 'react-icons/pi';
const Footer = () => {
  let arrData = [
    {
      id: 1,
      icon: <PiShieldStarFill size={60} />,
      text1: "Подлинность важнее всего",
      text2: "Мы сохроняем историческую правду артефакта." 
    },
    {
      id: 2,
      icon: <RiImageCircleAiFill size={60} />,
      text1: "Современные ИИ-технологии",
      text2: "Алгоритмы исскуственного интелекта бережно восстанавливают детали и узоры." 
    },
    {
      id: 3,
      icon: <GiAmphora size={60} />,
      text1: "Музейный подход",
      text2: "Профессиональный взгляд на сохранение культурного наследия." 
    },
    {
      id: 4,
      icon: <GiOilySpiral size={60} />,
      text1: "Культурная ценность для будущих поколений",
      text2: "Мы сохраняем традицию и историю для будущего" 
    }
  ]
  let [copyStyle, setCopyStyle] = useState(false)
  useEffect(() => {
    setTimeout(() => setCopyStyle(false), 500)
  }, [copyStyle])
  return (
    <div>
        <footer className='relative'>
            <div style={{ backgroundImage: `url("${bgImage}")`}} className="w-full px-10 pt-80 bg-no-repeat bg-cover bg-center h-250 -mt-50 z-30">
                <div className='flex justify-between relative my-15 mx-20 mt-0 p-5 border-2 border-[#dfa333] text-[#4f3400]'>
                  <img src = {borderImg} alt="" className='w-30 absolute -top-[15px] -left-[29px]'/>
                  <img src = {borderImg} alt="" className='w-30 absolute -top-[15px] -right-[29px] -scale-x-100'/>
                  <img src = {borderImg} alt="" className='w-30 absolute -bottom-[15px] -left-[29px] -scale-y-100 '/>
                  <img src = {borderImg} alt="" className='w-30 absolute -bottom-[15px] -right-[29px] -scale-x-100 -scale-y-100 '/>
                  {arrData.map((elem, ind) => (
                    <div key={elem.id} className={`w-[25%] flex items-start gap-5 px-5 ${ind == arrData.length - 1 ? 'border-r-0' : 'border-r-1 border-[#dfa333]'}`}>
                      <div className="w-[70px] h-[70px] flex items-center justify-center text-[#875f15]">
                          {elem.icon}
                      </div>
                      <div>
                        <b className='text-[#704f12]'>{elem.text1}</b>
                        <p className='text-[14px] pt-2'>{elem.text2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              <div className='flex justify-around text-[#332306]'>
                <div className='w-[50%]'>
                  <div className='flex items-center'>
                    <img src={logo} className='w-30 -ml-9'/>
                    <div>
                      <p className='font-serif text-[25px] font-bold'>Ornava</p>
                      <p className='text-[#b17912]'>Реставрация культурных изображений</p>
                    </div>
                  </div>
                  <p className='bg-[#ead2b6a0] shadow-[0_6px_40px_20px_#ead2b6a0]'>Ornava - платформа на базе искусственного интеллекта для бережноц реставрации исторических орнаментов, ковров, текстильных узоров, рукописей и культурных артефактов, текстильных узров, рукописей и культурных артефактов с сохранением подлинности и традиций.</p>
                </div>
                <div className='w-fit h-fit pl-15 border-l-1 border-[#cd9b3f] pb-4'>
                  <p className='text-[#b17912] font-bold text-[25px]'>СВЯЖИТЕСЬ С НАМИ</p>
                  <LineDot className="w-full my-2"/>
                  <div className='flex flex-col gap-4 mt-5'>
                    <a href="https://www.google.com/maps/search/?api=1&query=Nemat+Karaboyev+29,+Dushanbe,+Tajikistan" target='_blank' rel="noopener noreferrer" className='flex items-center gap-3'><MdLocationOn size={24} className='text-[#b17912]'/>Душанбе, республика Таджикистан</a>
                    <a href={`https://t.me/codingiTojikona`} target='_blank' rel="noopener noreferrer" className='flex items-center gap-3'><FaTelegramPlane size={24} className='text-[#b17912]'/>codingiTojikona</a>
                    <a href={`https://www.instagram.com/kavsaracademy.tj?igsh=NzJsYWIxaTF0eDJ2`} target='_blank' rel="noopener noreferrer" className='flex items-center gap-3'><RiInstagramFill size={24} className='text-[#b17912]'/>kavsaracademy.tj</a>
                    <a href="tel:+992205122525" className="hover:underline flex items-center gap-3"><FaPhoneAlt size={23} className='text-[#b17912]'/>(+992) 205122525</a>
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
                  <a href={`https://www.instagram.com/kavsaracademy.tj?igsh=NzJsYWIxaTF0eDJ2`} target='_blank' rel="noopener noreferrer"><FaInstagram size={24}/></a>
                  <a href={`https://t.me/codingiTojikona`} target='_blank' rel="noopener noreferrer"><FaTelegramPlane size={24}/></a>
                  <a href="tel:+992205122525"><FaPhoneAlt size={23}/></a>
                </div>
              </div> 
            </div>
        </footer>
    </div>
  )
}

export default Footer