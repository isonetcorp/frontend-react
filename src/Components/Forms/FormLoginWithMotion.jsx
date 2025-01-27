import { useState } from "react";
import { motion } from "framer-motion"; // Asegúrate de importar "framer-motion" correctamente
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/features/form/formSlice";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
    const formData = useSelector((state) => state.form.formData);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormData({ name, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password === "mod7USIP-CESAR") {
            setModalMessage(`Hola, Bienvenido ${formData.username}`);
        } else {
            setModalMessage("Username/Password incorrectos!!!");
        }
        setShowModal(true);
        console.log("Datos del formulario", formData);
    };

    const onCloseModalInfo = () => {
        setShowModal(false); // close
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                message={modalMessage}
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <motion.table
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <thead>
                        <tr>
                            <th colSpan="2"><h3>{titleForm}</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label>Module:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="module"
                                    value={formData.module}
                                    onChange={handleChange}
                                    disabled
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Username:</label></td>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr >
                            <td><label>Password:</label></td>
                            <td>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                               
                                    
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="show-password-btn"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">
                                <motion.button
                                    type="submit"
                                    className="show-password-btn"
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Login
                                </motion.button>
                            </td>
                        </tr>
                    </tfoot>
                </motion.table>
            </form>
        </motion.div>
    );
};

export default FormWithMotionAndHook;
