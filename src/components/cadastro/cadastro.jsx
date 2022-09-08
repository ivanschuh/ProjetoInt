import React from "react";
import { useNavigate} from 'react-router-dom';

import './cadastro.css';

const BotaoCadastro = () => {

    const navigate = useNavigate();

    const handleAgenda = () =>{
        navigate('/SignIn')
    }
    
    return (
        <button className="buttonC" onClick={handleAgenda}><div className="text">Agendar Horário Agora</div></button>
    )
}

export default BotaoCadastro;