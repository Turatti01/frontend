import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import api from '../../api';
//import { FiPower, FiTrash2 } from 'react-icons/fi'
//import { FiLogIn } from 'react-icons/fi';
import './styles.css'; 
export default function Selecionar(){
  useEffect(()=>{
    async function getUserPets(){
        // const response = await api.get(`/userPets\/${localstorag.getitem('userId')}`).then(response => response.data);
        // if(response.length>0){
        //     setUrl(response[0].url)
        // }
    }
    getUserPets()
},[])

  return (
    <div className="back">
      <header>

        {/* {pets.map
        
        } */}

        <Link className="button" to="/CadAnimal"> Cadastrar novo animal </Link>
      </header>
      <div id="rectangle" > <center> Foto do animal </center> </div>

    </div>
  );
        }
