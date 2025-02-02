import { useState } from 'react';
import UsersTable from '../components/UsersTable';
import UserProductsTable from '../components/UserProductsTable';

const UsersPage = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);

    return (
        <div>
            <h1>Users</h1>
            <UsersTable onUserSelect={setSelectedUserId} />
            {selectedUserId && (
                <div>
                    <h2>Products</h2>
                    <UserProductsTable userId={selectedUserId} />
                </div>
            )}
        </div>
    );
};

export default UsersPage;
