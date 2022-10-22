import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BackdropBox, ModalBox } from "./Backdrop.styled"
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root")

export const Modal = ({onClose, children}) => {
    const handleEsc = evt => {
        evt.preventDefault()
            if (evt.code === "Escape") {
                onClose()
            }
    }
    const handleClick = evt => {
        if (evt.target === document.querySelector("#\\#backdrop")) {
            onClose()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleEsc)
        window.addEventListener("click", handleClick)

        return () => {
            window.removeEventListener("keydown", handleEsc)
            window.removeEventListener("click", handleClick)};
    }, [handleEsc, handleClick]);

    return createPortal(
        <BackdropBox id="#backdrop">
            <ModalBox>
                {children}
            </ModalBox>
        </BackdropBox>,
        modalRoot
    )
}

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.element
}
