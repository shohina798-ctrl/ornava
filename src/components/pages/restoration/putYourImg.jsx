import { useTranslation } from 'react-i18next';
import img from '../../../assets/images/detal2_page_1.png';
import { useState } from 'react';
import { Bubbles, Check, CloudUpload, Dumbbell, Folders, Leaf, Scale, ShieldCheck, Sparkles, X } from 'lucide-react';
import FileInput from '../../public/fileInput';
import Switch from '../../ui/switch';
import LineDot from '../../layout/components/header/lineDot';
import { postRestoration } from '../../../api/api';
import { useMutation } from '@tanstack/react-query';

const PutYourImg = () => {
    let {t} = useTranslation()
    const [base64, setBase64] = useState(null);
    const [file, setFile] = useState(null); 
    let [strength, setStrength] = useState(1);
    let [checkbox, setCheckbox] = useState(false);
    let strengthRestauration = [
        {
            id: 1,
            icon: <Leaf className='text-[#7e5229] w-10 h-10'/>,
            name: 'Консервативная',
            text: 'Максимальная точность с мягким улучшением. Сохраняет подлинность.'
        },
        {
            id: 2,
            icon: <Scale className='text-[#7e5229] w-10 h-10'/>,
            name: 'Сбалансированная',
            text: 'Более четкие детали с сохранением оригинала. Оптимальный баланс.'
        },
        {
            id: 3,
            icon: <Dumbbell className='text-[#7e5229] w-10 h-10'/>,
            name: 'Сильная',
            text: 'Более выраженное восстановление для сильно состаренных изображений.'
        }
    ]
    const { mutate, isPending } = useMutation({
        mutationFn: postRestoration,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({
            file: file,
            mode: strength,
            useAi: checkbox
        });
    };
  return (
    <div className='w-full h-full text-[#2d2217] text-center'>
        <div className='relative border-1 p-5 rounded-2xl bg-[#faf1e6] border-[#e7cdab] h-full'>
            <form onSubmit={handleSubmit} className='p-2 border-[#dca966] border-2 h-full flex flex-col'>
                <img src = {img} alt='' className='w-40 absolute top-[1px] -left-4'/>
                <img src = {img} alt='' className='w-40 absolute top-[1px] -right-4 -scale-x-100'/>
                <img src = {img} alt='' className='w-40 absolute bottom-[1px] -left-4 -scale-y-100'/>
                <img src = {img} alt='' className='w-40 absolute bottom-[1px] -right-4 -scale-y-100 -scale-x-100'/>
                <div className='mt-6'>
                    <p className='font-medium text-[20px] text-[#7e5229] font-serif'>Загрузка и настройки</p>
                    <LineDot className="w-30 my-3 m-auto"/>
                </div>
                <div className='border-[#e7cdab] border-dashed border-2 rounded-2xl mx-7'>
                    <div className='w-full'>
                        {base64 && (
                            <div className='flex flex-col p-6 items-center relative'>
                                <img src = {base64} className='h-45'/>
                                <div className=''>     
                                <button
                                    type="submit"
                                    disabled={!base64 || isPending}
                                    className='text-white text-[14px] flex items-center gap-2 bg-[#be944b] px-5 py-3 rounded-4xl mt-5 disabled:opacity-50 absolute -bottom-7 right-5'
                                >
                                    <Bubbles className='h-5'/>
                                    {isPending ? 'Обработка...' : 'Начать реставрацию'}
                                </button>
                                </div>
                                <X onClick={() => setBase64(null)} className='absolute top-5 right-5 text-[#ff5500]'/>
                            </div>
                        )}
                    </div>
                    <div className='p-5'>
                        {!base64 && (
                            <div className='flex flex-col gap-4 items-center'>                   
                                <CloudUpload className='w-20 h-20 text-[#be944b]'/>
                                <b className='text-[18px]'>{t("upload_title")}</b>
                                <p>{t("upload_hint")}</p>
                                <label className='text-white bg-[#ae7718] px-5 py-2 rounded-4xl cursor-pointer'>
                                    <p className='flex items-center gap-5'><Folders/>{t("upload_button")}</p>
                                    <FileInput className="hidden" onFile={(base, file) => {setBase64(base); setFile(file)}} />
                                </label>
                                <p>{t("upload_formats")}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='px-5'>
                    <LineDot className="w-30 my-3 m-auto"/>
                    <p className='font-medium font-serif text-[13px]'>ВЫБЕРИТЕ СИЛУ РЕСТАВРАЦИИ</p>
                    <div className='flex justify-between my-5'>
                        {strengthRestauration.map(elem => (
                            <div key={elem.id} onClick={() => setStrength(elem.id)} className={`relative w-[32%] flex flex-col justify-center items-center gap-2 p-3 rounded-2xl ${strength === elem.id ? 'border-[#c58d2c] bg-[#f7e9d6] border-2' : 'border-[#dca966] border'}`}>       
                                {elem.icon}
                                <b className='text-[15px]'>{elem.name}</b>
                                <p className='text-[14px]'>{elem.text}</p>
                                {strength === elem.id && (
                                    <div className='bg-[#bf831b] text-white rounded-tr-2xl p-2 rounded-bl-4xl absolute -top-[0.5px] -right-[1px]'><Check className='h-4'/></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-3 mb-7'>
                        <div className='flex justify-between items-center border-[#e7cdab] border-2 rounded-2xl px-5 py-2'>
                            <div className='flex items-center gap-5'>
                                <Sparkles className='text-[#e3a350] w-8 h-8'/>
                                <div className='flex flex-col items-start'>
                                    <p className='text-[#39342b] text-[14px]'><b>ИИ-реставрация </b>(рекомендуется)</p>
                                    <p className='text-[14px]'>Улучшает четкость изображения с приоритетом сохранения оригинала.</p>
                                </div>
                            </div>
                            <Switch setCheckbox={setCheckbox} />
                        </div>
                        <div className='flex justify-between items-center border-[#e7cdab] border-2 rounded-2xl px-5 py-2'>
                            <div className='flex items-center gap-5'>
                                <ShieldCheck className='text-[#e3a350] w-13 h-13'/>
                                <p className='text-[#39342b] text-start text-[14px]'><b>Ornava уважает подлинность культурного наследия </b>и использует ИИ только для бережного восстановления, а не изменения оригинала.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PutYourImg