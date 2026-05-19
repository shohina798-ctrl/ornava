import { TbCloudUpload } from 'react-icons/tb'
import bgImage from '../../assets/images/image_c.png'
import LineDot from '../../components/layout/components/header/lineDot'
import { ArrowRight, Download, SlidersHorizontal, Sparkles } from 'lucide-react'

const Process = () => {
  let arrData = [
    {
      id: 1,
      icon: <TbCloudUpload size={70}/>,
      name: "Загрузка",
      text: "Загрузите изображение культурного артефакта, текстиля, орнамента или рукописи."
    },
    {
      id: 2,
      icon: <SlidersHorizontal size={70}/>,
      name: "Выбор силы реставрации",
      text: "Выберите подходящую силу реставрации или включите ИИ-режим для автоматическоого анализа"
    },
    {
      id: 3,
      icon: <Sparkles size={70}/>,
      name: "Бережное восстановление",
      text: "Загрузите изображение культурного артефакта, текстиля, орнамента или рукописи."
    },
    {
      id: 4,
      icon: <Download size={70}/>,
      name: "Просмотр и скачивание",
      text: "Загрузите изображение культурного артефакта, текстиля, орнамента или рукописи."
    }
  ]
  return (
    <div>
      <div style={{ backgroundImage: `url(${bgImage})`}} className="relative w-full z-1 flex bg-no-repeat bg-cover bg-center h-250">
        <div className='pl-[8%] text-[#2d2217] pt-30 w-full'>
          <div className='w-[40%] bg-[#ebe0d4a0] shadow-[0_0_40px_35px_#ebe0d4a0]'>
            <p className='text-[50px] font-bold'>Спокойный рабочий процесс реставрации</p>
            <LineDot className="w-full my-3"/>
            <p className='mr-15'>Ornava использует передовые ИИ технологии для бережной реставрации культурных артефактов с сохранением их подлинности и исторической ценности.</p>
          </div>
          <div className='flex justify-between mt-15'>
            {arrData.map((elem, ind) => (
              <div className='w-[25%] flex'>
                <div key={elem.id} className='border-1 w-[70%] border-[#bda285a8] rounded-2xl p-5 flex flex-col justify-center items-center text-center gap-4 bg-[#efe4cf92]'>
                  <div className='w-40 h-40 relative border-1 bg-[#ffe9d49a] text-[#c87e35] border-[#c87e35c2] rounded-[50%] flex items-center justify-center'>
                    {elem.icon}
                    <p className='absolute -bottom-4 m-auto w-10 h-10 flex items-center justify-center bg-[#c87e35] text-white rounded-[50%]'>{ind + 1}</p>
                  </div>
                  <p className='text-[25px] font-bold'>{elem.name}</p>
                  <LineDot className="w-40"/>
                  <p>{elem.text}</p>
                </div>
                {ind != arrData.length - 1 && (
                  <div className='mx-5 flex mt-20 justify-center h-fit rounded-[50%] bg-[#ece5cfa2] shadow-[0_0_20px_10px_#ece5cfd2] text-[#ab733b]'>
                    <ArrowRight size={53}/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process