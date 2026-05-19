import { ChartNoAxesCombined, Check, ChevronsLeftRight, Download, Settings2, Sparkles, X } from 'lucide-react';
import bgImage from '../../assets/images/image.png'
import LineDot from '../../components/layout/components/header/lineDot';

const ResultRestauration = ({restoredData}) => {
    console.log(restoredData);
    const API_URL = import.meta.env.VITE_API_URL;
    const imageOriginal = `${API_URL}${restoredData?.originalImageUrl}`;
    const imageResult = `${API_URL}${restoredData?.restoredImageUrl}`;

    const download = () =>
    fetch(imageResult)
    .then(r => r.blob())
    .then(b => {
      const u = URL.createObjectURL(b);
      const a = document.createElement("a");
      a.href = u;
      a.download = "image.png";
      a.click();
      URL.revokeObjectURL(u);
    });

  return (
    <div>
        <div style={{ backgroundImage: `url(${bgImage})`}} className="w-full flex justify-between bg-no-repeat bg-cover bg-center h-250 relative z-1 text-[#2d2217]">   
            <div className='ml-20 mt-30'>
                <b className='text-[45px] font-serif'>Ваша реставрация завершена</b>
                <p className='text-[14px]'>ИИ бережно восстановил изображение, сохранив его оригинальный характер и подлинность.</p>
                <div className='p-5 h-120 rounded-2xl bg-[#fffbf0] border-1 border-[#d49047e8] mt-10 flex items-center relative'>
                    <div className='flex flex-col justify-between h-full'>
                        <p className='bg-[#f0e4ce] w-fit px-5 py-1 rounded-2xl text-[#272115] font-medium'>Оригинал (до)</p>
                        <div className='w-120 h-100'>
                            <img src={imageOriginal} onClick={() => window.open(imageOriginal)} className="w-full h-full object-contain" alt="Оригинал"/>
                        </div>
                    </div>
                    <div className='relative h-100 w-[1px] mx-2 bg-[#d49047e8]'>
                        <div className='absolute top-[49%] -left-3 rounded-[50%] bg-white border-1 border-[] text-[#7b4b1e]'>
                            <ChevronsLeftRight/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between h-full'>
                        <p className='bg-[#f0e4ce] w-fit px-5 py-1 rounded-2xl text-[#272115] font-medium'>Результат (после)</p>
                        <div className='w-120 h-100'>
                            <img src={imageResult} onClick={() => window.open(imageResult)} className="w-full h-full object-contain" alt="Результат"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-62 mr-15 h-120 w-85 bg-[#fffbf0] border-1 border-[#d49047e8] p-5 rounded-2xl relative'>
                <b className='text-[#a57847] font-mono font-bold text-[20px]'>Детали реставрации</b>
                <LineDot className="w-full my-2"/>
                <div className='my-5 mt-5 flex flex-col gap-2'>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex items-center gap-2'>
                            <Settings2 className='text-[#cd8a4c]'/>
                            <p>Режим реставрации</p>
                        </div>
                        <p className='text-[#cd8a4c] border-1 border-[#cd8a4c] bg-[#ffeedc] rounded-2xl py-1 px-3 text-[14px]'>{restoredData?.mode}</p>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex items-center gap-2'>
                            <ChartNoAxesCombined className='text-[#cd8a4c]'/>
                            <p>Уровень восстановления</p>
                        </div>
                        <p className='text-[#9c7046] bg-[#ffeedc] rounded-2xl py-1 px-3 text-[14px]'>{restoredData?.mode == 'Strong' ? '85%' : restoredData?.mode == 'Balanced' ? '57%' : '25%'}</p>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex items-center gap-2'>
                            <Sparkles className='text-[#cd8a4c]'/>
                            <p>Использование ИИ</p>
                        </div>
                        <p className='text-[#9c7046] text-[14px]'>{restoredData?.fallbackUsed ? <Check/> : <X/>}</p>
                    </div>
                    <button onClick={() => d()} className='bg-[#654325] py-2 w-[87%] absolute bottom-5 rounded-full text-white flex items-center gap-2 justify-center hover:mb-1'><Download/>Скачать результат</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultRestauration