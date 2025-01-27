import { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx"; 
import { resetFormData } from "../../store/features/form/formSlice";

const Navigator = () => {

    const formData = useSelector((state) => state.form.formData);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const dispatch = useDispatch();
    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleCloseModal = () => {
        setShowLogoutModal(false);
    };

    const handleConfirmLogout = () => {
        console.log("Usuario cerró sesión");
        dispatch(resetFormData()); // Llama al nuevo reducer para limpiar todos los campos
        setShowLogoutModal(false);
    };
  
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            
            {
                formData.username && <div className="user-info">
                            <span className="nav-link">{`Bienvenido | ${formData.username}`}</span>
                            <button className="show-password-btn" onClick={handleLogoutClick}>Logout</button>
                        </div>
            }

            <ModalInfo
                visible={showLogoutModal}
                message={"¿Estás seguro de que quieres cerrar sesión?"}
                onClose={handleCloseModal}
                onConfirm={handleConfirmLogout}
            />
        </nav>
    );
}

export default Navigator;

