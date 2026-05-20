import logo from '../../../../assets/images/logo.png'
import Switch from './switch';
import LanguageSwitch from './languageSwitch';
import LineDot from './lineDot';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Header = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState(null);
    const scrollTo = (id) => {
        setActiveSection(id);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            setActiveSection(null)
        }, 1000)
    };
  return (
    <header className='sticky top-0 z-20 flex text-[#2d2217] justify-between items-center px-10 bg-[#f4ede4] dark:bg-[#e7bf91] dark:border-[#a5764a] dark:text-[#483720] border-b-2 border-[#e8caad]'>
        <div className='flex items-center'>
            <img src = {logo} className='w-30 mt-2'/>
            <div>
                <p className='font-serif font-semibold text-[25px]'>Ornava</p>
                <p>{t("title")}</p>
            </div>
        </div>
        <div className='w-[30%] flex justify-between items-start'>
            <button onClick={() => scrollTo('home')} className={activeSection === 'home' ? 'text-[#8f7445]' : ''}>
                <p className='font-medium pb-1'>{t("opportunities")}</p>
                {activeSection === 'home' && <LineDot/>}
            </button>
            <button onClick={() => scrollTo('process')} className={activeSection === 'process' ? 'text-[#8f7445]' : ''}>
                <p className='font-medium pb-1'>{t("process")}</p>
                {activeSection === 'process' && <LineDot/>}
            </button>
            <button onClick={() => scrollTo('restoration')} className={activeSection === 'restoration' ? 'text-[#8f7445]' : ''}>
                <p className='font-medium pb-1'>{t("restoration")}</p>
                {activeSection === 'restoration' && <LineDot/>}
            </button>
            <button onClick={() => scrollTo('aboutUs')} className={activeSection === 'aboutUs' ? 'text-[#8f7445]' : ''}>
                <p className='font-medium pb-1'>{t("about")}</p>
                {activeSection === 'aboutUs' && <LineDot/>}
            </button>
        </div>
        <div className='flex items-center gap-5'>
            <LanguageSwitch/>
            <Switch/>
        </div>
    </header>
  )
}

export default Header