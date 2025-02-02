
import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" onClick={() => navigate('/')}>Users</Button>
                <Button color="inherit" onClick={() => navigate('/products')}>Products</Button>


            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
