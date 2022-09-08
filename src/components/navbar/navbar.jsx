import React from "react";
import { useNavigate} from 'react-router-dom';

import './navbar.css';


const NavBar = () => {
    
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }
    const handleSobre = () => {
        navigate('/');
    }
    const handleServicos = () => {
        navigate('/');
    }
    const handleContato = () => {
        navigate('/');
    }
    
    return (
        <div className="nav">
            <div className="lista">
                <ul className="opcoes">
                    <li className="op" onClick={handleHome}>HOME</li>
                    <li className="op" onClick={handleSobre}>SOBRE</li>
                    <li className="op" onClick={handleServicos}>SERVIÇOS</li>
                    <li className="op" onClick={handleContato}>CONTATO</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;