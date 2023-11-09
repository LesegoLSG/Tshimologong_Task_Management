import React from 'react';
import { ButtonProps } from './Properties';
import { transform } from 'typescript';


const Button: React.FC<ButtonProps> = ({ text, color, handleAddClick }) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor: color,
        textAlign: "center",
        color: "white",
        width: "8rem",
        height: "2.5rem",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };




    return (
        <div className="flex justify-center items-center">
            <button
                style={buttonStyle}
                onClick={handleAddClick}

            >{text}</button>
        </div>
    )
}

export default Button