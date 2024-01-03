import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/products' element={<Products />} />
            <Route path='/customers' element={<Customers />} />
        </Routes>
    );
}

export default App
