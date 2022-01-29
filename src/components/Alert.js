import React from 'react';

export default function Alert(props) {
    const CapitalFirstWord = (word) => {
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        
            props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
                <strong>{CapitalFirstWord(props.alertMessage.type)}</strong> : {props.alertMessage.msg}
            </div>
        
    );
}
