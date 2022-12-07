import React from "react";

export function Button({BtnText, BtnIcon}) {
    return (
        <button className='Btn'>
            {BtnText}
            {BtnIcon}
        </button>
    );
};
