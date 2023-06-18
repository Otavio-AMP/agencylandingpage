import Link from "next/link"
import Image from "next/image"
import agencyLogo from "../../../public/agencyLogo.svg"

export default function Header() {

    return(
        <header className="flex flex-row items-center justify-around w-full border-b border-purple-900 py-5">
           <Image src={agencyLogo} height={60} width={174} alt="agency logo" />
           <div className="flex gap-10">
                <Link className="hover:text-greenHighlight" href={'/'}>Home</Link>
                <Link className="hover:text-greenHighlight" href={'/'}>O que fazemos</Link>
                <Link className="hover:text-greenHighlight" href={'/'}>Cases</Link>
           </div>
           <button className="bg-greenShade px-5 py-2 rounded hover:bg-greenHighlight">Fale conosco</button>
        </header>
    )
}