import { useParams, useNavigate } from 'react-router-dom';
import UserProductsTable from '../components/UserProductsTable';
import { Button, Typography } from '@mui/material';

const ProductsPage = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate(-1)} variant="contained" color="primary">
                ⬅ Back
            </Button>
            <Typography variant="h4" style={{ margin: '20px 0' }}>
                {userId && `User's`} Products
            </Typography>

            <UserProductsTable userId={userId} />
        </div>
    );
};

export default ProductsPage;
