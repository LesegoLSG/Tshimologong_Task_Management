import React from 'react';
import { ButtonProps } from './Properties';


const Button: React.FC<ButtonProps> = ({ text, color, handleAddClick }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: color,
        textAlign: "center",
        color: "white",
        width: "80px",
        height: "30px",
        borderRadius: "5px",
        cursor: "pointer",
    }
    return (
        <div className="flex justify-center items-center">
            <button style={buttonStyle} onClick={handleAddClick}>{text}</button>
        </div>
    )
}

export default Button