
import styled from '@emotion/styled';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../App';

const ToastWrapper = styled(ToastContainer)({
    '.Toastify__toast': {
        backgroundColor: "#353B46",
        width: 400,
        height: "max-content",
        color: "#FFFFFF !important",
        padding: "16px",
        borderRadius: 10,
        textAlign: 'start'
    },
})


const ToastComponent = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <ToastWrapper
            position="bottom-left"
            autoClose={5000}
            pauseOnHover
            closeOnClick={false}
            theme={theme}
            closeButton
        />
    )
}

export default ToastComponent