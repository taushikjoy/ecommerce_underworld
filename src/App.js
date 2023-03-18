import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
function App() {
  //const user = false;
   const user = useSelector(state => state.user.currentUser);
  return (
    <div className='App'>
      {/* testing */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/:category' element={<ProductList />} />
        <Route exact path='/products' element={<ProductList />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
