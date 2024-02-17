import CoOpNavBar from '../../components/navbar/CoOpNavBar';
import AddProduct from '../../components/shop/addProduct';
import { useState } from 'react';
import CoOpSettingsComp from '../../components/user/CoOpSettingsComp';
  
export default function CoOpSettings() {
    const [showAddProduct, setShowAddProduct] = useState(false);

    const handleAddProductClick = () => {
        setShowAddProduct(true);
    };
    return (
      <>
      <CoOpNavBar />
      <CoOpSettingsComp/>
      <button onClick={handleAddProductClick}>Add a Product</button>
            {showAddProduct && <AddProduct />}
      </>
    )
  }