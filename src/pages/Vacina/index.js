import React, { useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../api'
import './styles.css';
import image1 from '../../Assets/cachorro-sorrindo.png' 
import { FiHome, FiTrash2 } from "react-icons/fi"
// import { GiDogBowl } from "react-icons/fi";
//import StorageIcon from '@material-ui/icons/Storage';
export default function Vacina(){
    const history = useHistory()
    const [vacina, setVacina] = useState([]);
    const [pets, setPets] = useState([]);
    let { id } = useParams();

    useEffect(()=>{
        async function fetchData() {
        const resp = await api.get(`/vacina.list/${id}`);
            setVacina(resp.data);
        }
        fetchData();
    }, []);
   
  function logout() {
    localStorage.clear()
    history.push('/')
  }

    return (
        <div className="dashboard-page">
        <header class="vsf">
        <div class="left">
        <h3>Help <span>Pet </span></h3>
        </div>
        <div class="right">
        <a to="#" onClick={logout} class="sair_btn">Sair</a>
        </div>
        </header>    
        <div class="content dashboard">    
                <nav class="sidebar">
                <center>
                    <img src={image1} class="image" alt=""/>
                    <h2> Sisi </h2>
                </center>

                <a href='/Vacina'><FiHome size={16}/><span>Vacinas</span></a>
                <a href='/Medicamentos'><FiHome size={16}/><span>Medicamentos</span></a>
                 </nav>
                <Link className="butao"  to={`/CadVac/${id}`}>Cadastrar Vacina</Link>
            <main className="profile-container">

         <ul>
               {vacina.map(vacina=> 
               <li key={vacina.id}> 
                 <strong>Nome:</strong>{vacina.nome}
                 <strong>Data da Primeira dose: </strong>{vacina.data1}
                 <strong>Data da Segunda dose: </strong>{vacina.data2}
                 <strong>Descrição:</strong>{vacina.descricao}

                 <button type="button" >
                        <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
              </li>
          )}
        </ul>
    </main>
    </div> 
    </div>
    );
}
