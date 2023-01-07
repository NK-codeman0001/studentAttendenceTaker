import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Student Attendence System</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>New Student</button>
            </div>
        </header>
    )
}

export default Header