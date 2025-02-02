import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';

const UsersTable = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleUserClick = useCallback((userId) => {
        navigate(`/products/${userId}`);
    }, [navigate]);

    const memoizedUsers = useMemo(() => users, [users]);

    if (status === 'loading') return <CircularProgress />;
    else if (error) return <p>Error: {error}</p>;
    else if (!memoizedUsers.length) return <p>No users found.</p>;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Name</strong></TableCell>
                        <TableCell><strong>Email</strong></TableCell>
                        <TableCell><strong>Phone</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {memoizedUsers.map((user) => (
                        <TableRow
                            key={user._id}
                            onClick={() => handleUserClick(user._id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable; 
