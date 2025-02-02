import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import UsersPage from "./pages/UsersPage"
import ProductsPage from "./pages/ProductsPage"

const PageRoutes = () =>
(
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:userId" element={<ProductsPage />} />
        </Routes>
    </Router>
)


export default PageRoutes