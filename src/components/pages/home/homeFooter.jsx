import { Cpu, Landmark, Library, SquaresIntersect } from "lucide-react"
import { useTranslation } from "react-i18next"

const HomeFooter = () => {
    let {t} = useTranslation()
    const data = [
        {
            id: 1,
            icon: <Landmark className="w-full h-full"/>,
            text1: t("footer.1_title"),
            text2: t("footer.1_desc")
        },
        {
            id: 2,
            icon: <SquaresIntersect className="w-full h-full"/>,
            text1: t("footer.2_title"),
            text2: t("footer.2_desc")
        },
        {
            id: 3,
            icon: <Library className="w-full h-full"/>,
            text1: t("footer.3_title"),
            text2: t("footer.3_desc")
        },
        {
            id: 4,
            icon: <Cpu className="w-full h-full"/>,
            text1: t("footer.4_title"),
            text2: t("footer.4_desc")
        }
    ]
    return (
    <div>
        <div className="p-10 flex justify-between text-[#2d2217] backdrop-blur-md bg-[#f9f0e5d8] shadow-[0px_-5px_35px_30px_#f9f0e5]">
            {data.map((elem, ind) => (
                <div key={elem.id} className={`flex gap-5 items-start px-10 ${ind == data.length - 1 ? '' : 'pr-10 border-r-1 border-[#dcc5a4]' }`}>
                    <p className="text-[#a56d17] w-25">{elem.icon}</p>
                    <div>
                        <p className="font-bold">{elem.text1}</p>
                        <p>{elem.text2}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomeFooter