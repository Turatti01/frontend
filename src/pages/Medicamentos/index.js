import React, { useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../api'
import './styles.css';
import image1 from '../../Assets/cachorro-sorrindo.png' 
import { FiHome, FiTrash2 } from "react-icons/fi"
// import { GiDogBowl } from "react-icons/fi";
//import StorageIcon from '@material-ui/icons/Storage';
export default function Medicamentos(){
    const history = useHistory()
    const [pets, setPets] = useState([]);
    const [medicamentos, setMedicamentos] = useState([]);
    let { id } = useParams();

    useEffect(()=>{
        async function fetchData() {
        const resp = await api.get(`/medicamentos.list/${id}`);
            setMedicamentos(resp.data);
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
                <Link className="butao"  to={`/EditMed/${id}`}>Cadastrar Medicamento</Link>
            <main className="profile-container">

         <ul>
               {medicamentos.map(medicamentos=> 
               <li key={medicamentos.id}> 
                 <strong>Nome:</strong>{medicamentos.nome}
                 <strong>Data da Primeira dose: </strong>{medicamentos.data1}
                 <strong>Data da Segunda dose: </strong>{medicamentos.data2}
                 <strong>Descrição:</strong>{medicamentos.descricao}

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
