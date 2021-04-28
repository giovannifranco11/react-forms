import  React from 'react';

import './masinfo.style.css';

const MasInfo = (props) => {
    return (
        <div className="masinfo-container">
            <b>GÉNERO</b>
            {props.categoryMasInfo}
            <div className="hola"> 🔴 Animadas</div>
            <div className="hola"> 🔴 Terror</div>
            <div className="hola"> 🔴 Drama</div>
            <div className="hola"> 🔴 Acción</div>
            
            
            
               
            
        </div>
        
    );
    
}

export default MasInfo ;