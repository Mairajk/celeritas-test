import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';

const UserProductsTable = ({ userId }) => {

    const dispatch = useDispatch();

    const { products, status } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts(userId));
    }, [userId, dispatch]);

    if (status === 'loading') return <CircularProgress />;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product._id}>
                            <TableCell>{product.productName}</TableCell>
                            <TableCell>${product.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserProductsTable;
