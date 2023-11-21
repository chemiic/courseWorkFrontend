import {type FC} from 'react';
import CartButton from "@/components/menu/CartButton";
import AuthButton from "@/components/menu/AuthButton";

const NavbarActions: FC = () => {

    return (
        <div className="ml-auto flex items-center gap-x-4 mr-10 lg:mr-0">
            <CartButton/>
            <AuthButton/>
        </div>
    );
};

export default NavbarActions;
