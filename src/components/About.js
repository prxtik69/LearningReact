import React, { useState } from 'react';

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState({
        color: '#3d3d3b',
        backgroundColor: 'white'
    });

    const [btnText, setBtntext] = useState('Enable Dark Mode');

    const style = () => {
        if (darkMode.color === 'white') {
            setDarkMode({
                color: '#3d3d3b',
                backgroundColor: 'white'
            })
            setBtntext('Enable Dark Mode');

        }

        else {
            setDarkMode({
                color: 'white',
                backgroundColor: '#3d3d3b'
            })
            setBtntext('Disable Dark Mode');
        }
    }
    return (
        <>
            <div className="container text-center my-5" style={darkMode}>
                <h1>This is Paragraph</h1>
                <button onClick={style} className='btn btn-primary'>{btnText}</button>
            </div>
        </>
    );
}
