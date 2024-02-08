import { useNavigate, Link } from "react-router-dom";
import {Icon, Home2, Car} from 'iconsax-react'
import { Box, Container } from "./styles";

interface MenuItemProps {
    href: string;
    icon: Icon;
}

const MenuItem: React.FC<MenuItemProps> = ({icon}) => {

    //const navigate = useNavigate()
    const IconComponent = icon

    return (
            <Box>
                <IconComponent size={20} color='green' />
            </Box>
    )
}

const TabMenu: React.FC = () => {

    return (
        <Container>
            <MenuItem icon={Home2} href=""/>
            <MenuItem icon={Car} href="" />
        </Container>
    )
}

export default TabMenu;
