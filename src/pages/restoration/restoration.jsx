import bgImage from '../../assets/images/Background_Page_2.png'
import iconAI from '../../assets/images/Geometry Icon copy.png'
import LineDot from '../../components/layout/components/header/lineDot'
import PutYourImg from '../../components/pages/restoration/putYourImg'

const Restoration = () => {
  return (
    <div>
        <div style={{ backgroundImage: `url(${bgImage})`}} className="w-full text-[#2d2217] flex bg-no-repeat bg-cover bg-center h-250">
            <div className='flex items-start justify-between w-full pt-5'>
                <div className='pl-[10%] w-[38%] flex flex-col items-start mt-15'>
                    <img src={iconAI} className='w-10 mb-5'/>
                    <b className='text-[45px] font-serif'>Бережная реставрация культурных изображений</b>
                    <LineDot className="my-5 w-full"/>
                    <p>Загрузите исходное изображение, выберите силу реставрации и посмотрите результат только после завершения обработки</p>
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