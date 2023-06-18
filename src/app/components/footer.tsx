import Image from 'next/image'
import agencyLogo from "../../../public/agencyLogo.svg"
import brazilFlag from "../../../public/brazilFlag.png"
import instagramIcon from "../../../public/Icon-instagram.svg"
import facebookIcon from "../../../public/Icon-facebook-f.svg"
import linkedinIcon from "../../../public/Icon-linkedin.svg"
import youtubeIcon from "../../../public/Icon-youtube.svg"

export default function Footer() {
    return(
        <footer className="flex flex-col items-center justify-between bg-footerPurple w-full pt-10 pb-4 px-20 gap-5">
            <div className='flex flex-row items-center justify-between w-full'>
                <Image src={agencyLogo} height={60} width={174} alt="agency logo" />
                <Image src={brazilFlag} height={20} width={20} alt="brazil flag" />
            </div>
            <div className='flex flex-row items-center justify-between w-full'>
                <span>0800 800 800</span>
                <span className='text-greenHighlight'>MENU</span>
                <span className='text-greenHighlight'>CONTEÚDO</span>
                <span className='text-greenHighlight'>SOCIAL</span>
            </div>
            <div className='flex flex-row items-center justify-between w-full mb-20'>
                <span>comercial@agencia.com.br</span>
                <div className="flex flex-col">
                    <span>
                        Quem somos
                    </span>
                    <span>
                        Cases
                    </span>
                </div>
                <div className="flex flex-col">
                    <span>
                        E-books
                    </span>
                    <span>
                        Fórmulas prontas
                    </span>
                </div>
                <div className="flex flex-row gap-5">
                    <Image src={instagramIcon} width={25} height={25} alt='instagram icon' />
                    <Image src={facebookIcon} width={15} height={15} alt='facebook icon'/>
                    <Image src={linkedinIcon} width={23} height={23} alt='linkedin icon'/>
                    <Image src={youtubeIcon} width={30} height={30} alt='youtube icon'/>
                </div>
            </div>
            <span>2023 AGENCIA - Todos os direitos reservados.</span>
        </footer>
    )
}