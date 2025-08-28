import React from 'react';
import { Link } from 'react-router';


function Error(props) {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f8f8', color: '#333', textAlign: 'center' }}>

            <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>

            <p style={{ fontSize: '1.5rem' }}>Oops! Page not found.</p>
            
            <Link to="/" style={{marginTop: '20px',padding: '10px 20px',textDecoration: 'none', backgroundColor: '#007bff',color: 'white', borderRadius: '5px'
            }}>
                Go Home
            </Link>
            
        </div>
    );
}

export default Error;