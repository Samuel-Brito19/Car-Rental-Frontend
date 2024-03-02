import {Icon, Home2, Car, Profile} from 'iconsax-react'
import { Box, Container } from "./styles";
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
    href: string;
    icon: Icon;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, href }) => {
    const navigate = useNavigate();
    const IconComponent = icon;

    const handleClick = () => {
        if (href) {
            navigate(href);
        }
    };

    return (
        <Box onClick={handleClick}>
            <IconComponent size={20} color='green' />
        </Box>
    );
};


const TabMenu: React.FC = () => {
    return (
        <Container>
            <MenuItem icon={Home2} href='/home'/>
            <MenuItem icon={Car} href="/myrents/:id" />
        </Container>
    )
}

export default TabMenu;
