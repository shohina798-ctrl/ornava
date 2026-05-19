import { Moon, Sun } from 'lucide-react'
import useDarkSide from '../../../../hooks/useDark';
import { useTranslation } from 'react-i18next';

const Switch = () => {
    const [colorTheme, setDarkSide] = useDarkSide();
    const handleChangerTheme = () => {
        setDarkSide(colorTheme);
    }
    let {t} = useTranslation();
  return (
    <div>
        <div>
            <div onClick={() => handleChangerTheme()} className='shadow-sm rounded-4xl border-1 border-[#e3d0b2] bg flex gap-3 items-center w-fit py-[7px]  bg-[#F5EBDD] px-5'>
                <div>
                    {colorTheme === 'dark' ?
                    <Moon className="w-6 h-6 text-transparent fill-white bg-[#B07B2D] rounded-[50%] w-9 h-9 p-2"/>
                    :
                    <Sun className="w-6 h-6 text-white fill-white bg-[#B07B2D] rounded-[50%] w-9 h-9 p-2"/>
                    }
                </div>
                <p className='text-[#2d2217] font-medium'>{colorTheme === "dark" ? t("dark") : t("light")}</p>
            </div>
        </div>
    </div>
  )
}

export default Switch