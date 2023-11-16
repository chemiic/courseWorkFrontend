import NavMenu from "@/components/menu/NavMenu";
import Image from "next/image";
import logo from "@/public/logo.svg";
import NavbarActions from "@/components/menu/navbar-actions";
import Container from "@/components/ui/container";
import Link from "next/link";
const Menu = () => {
    return  (
        <div className={`border-b overflow-hidden`}>
            <Container>
                <div className={`flex justify-between items-center px-4 sm:px-6`}>
                    <div className={`flex sm:gap-6`}>
                        <Link href="/">
                          <Image src={logo} alt="CATBOX" className={`max-w-[80px] sm:max-w-[125px]`}/>
                        </Link>
                        <NavMenu/>
                    </div>
                    <NavbarActions/>
                </div>
            </Container>
        </div>
    )

}
export default Menu;