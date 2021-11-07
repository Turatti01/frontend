import {React, useState} from 'react';
import api from '../../api'
import './styles.css'; 
export default function Home(){
    return (
       <nav>
         <ul>
        <li><a href="sobre">Vacinas</a></li>
        <li>
            <a href="roupas">Vermífugos</a>
            <ul>
                <li>
                    <a href="masculino"></a>
                    <ul>
                        <li><a href="calcas"></a></li>
                        <li><a href="camisetas"></a></li>
                        <li><a href="bermudas"></a></li>
                        <li><a href="tenis"></a></li>
                    </ul>
                </li>
                <li>
                    <a href="feminino"></a>
                    <ul>
                        <li><a href="calcas"></a></li>
                        <li><a href="camisetas"></a></li>
                        <li><a href="bermudas"></a></li>
                        <li><a href="sapatos"></a></li>
                    </ul>
                </li>
                <li>
                    <a href="infantil"></a>
                    <ul>
                        <li><a href="toucas"></a></li>
                        <li><a href="casacos"></a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <a href="brinquedos">Medicamentos</a>
            <ul>
                <li><a href="bonecos"></a></li>
                <li><a href="carrinhos"></a></li>
                <li><a href="bolas"></a></li>
                <li><a href="jogos-de-tabuleiro"></a></li>
            </ul>
        </li>
        <li><a href="contato">Prontuário</a></li>
        <li><a href="contato">Ração</a></li>
        <li><a href="contato">Peso</a></li>
        <li><a href="contato">Cálculo da ração</a></li>
        
    </ul>
</nav>
    );
}