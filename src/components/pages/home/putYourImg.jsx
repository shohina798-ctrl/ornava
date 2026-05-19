import img from '../../../assets/images/detal2_page_1.png';
import { CloudUpload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FileInput from '../../public/fileInput';
import { useState } from 'react';
const PutYourImg = () => {
    let {t} = useTranslation()
    const [base64, setBase64] = useState(null);
  return (
    <div className='w-full h-full text-[#2d2217] text-center'>
        <div className='relative border-1 p-5 rounded-2xl bg-[#faf1e6] border-[#e7cdab] h-full shadow-[0_0px_60px_1px_#e7cdab]'>
            <div className='p-2 border-[#dca966] border-2 h-full flex items-center justify-center'>
                <img src = {img} alt='' className='w-40 absolute top-[1px] -left-4'/>
                <img src = {img} alt='' className='w-40 absolute top-[1px] -right-4 -scale-x-100'/>
                <img src = {img} alt='' className='w-40 absolute bottom-[1px] -left-4 -scale-y-100'/>
                <img src = {img} alt='' className='w-40 absolute bottom-[1px] -right-4 -scale-y-100 -scale-x-100'/>
                <div className='border-[#e7cdab] border-1 rounded-2xl m-7'>
                    <div className='p-8 w-full'>
                        {base64 && (
                            <div className='flex flex-col items-center relative'>
                                <img src = {base64} className='w-full'/>
                                <div className='w-full flex justify-end mt-5 absolute -bottom-15 right-0'>
                                    <button onClick={() => setBase64(null)} className='text-white bg-[#be944b] px-5 py-2 rounded-4xl'>{t("remove")}</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='p-5'>
                        {!base64 && (
                            <div className='flex flex-col gap-4 items-center'>                   
                                <CloudUpload className='w-20 h-20 text-[#be944b]'/>
                                <b className='text-[18px]'>{t("upload_title")}</b>
                                <p>{t("upload_hint")}</p>
                                <label className='text-white bg-[#be944b] px-5 py-2 rounded-4xl cursor-pointer'>
                                    {t("upload_button")}
                                    <FileInput className="hidden" onFile={(base) => setBase64(base)} />
                                </label>
                                <p>{t("upload_formats")}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PutYourImg