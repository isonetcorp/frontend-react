import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, onConfirm }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="modal-content">
                    <p>{message}</p>
                    <div className="modal-actions">
                    {
                        onConfirm && 
                            <button
                                className="confirm-btn"
                                onClick={onConfirm}>
                                Click en X para Salir.
                            </button>
                    }
                        <button
                            className="close-btn-success"
                            onClick={onClose}>
                            X
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ModalInfo;