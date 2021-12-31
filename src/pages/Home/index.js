import React, { useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import api from '../../api'
import './styles.css';
import image1 from '../../Assets/cachorro-sorrindo.png'; 
import { FiHome } from "react-icons/fi";
// import { GiDogBowl } from "react-icons/fi";
//import StorageIcon from '@material-ui/icons/Storage';

export default function Home(){
    const [vacina, setVacina] = useState([]);
    const history = useHistory()
    let { id } = useParams();

    function logout() {
      localStorage.clear()
      history.push('/')
    }

    useEffect(()=>{
        async function fetchData() {
            const resp = await api.get(`/vacina.list/${id}`);
            setVacina(resp.data);
        }
        fetchData();
    }, []);

    
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
            <h2>Sisi</h2>
        </center>
        <Link to={`/Vacina/${id}`}><FiHome size={16}/><span>Vacinas</span></Link>
        <Link to='/Medicamentos'><FiHome size={16}/><span>Medicamentos</span></Link>
    </nav>
    
        </div>
  </div>


    );
}
