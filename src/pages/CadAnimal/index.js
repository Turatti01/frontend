import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../api'

import './styles.css'
// import logoImg from '../../assets/logo.svg'

export default function CadAnimal() {
   const history = useHistory();
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [temperamento, setTemperamento] = useState('');
  const [castrado, setCastrado] = useState('');

    async function handleRegister(e){
        e.preventDefault();
        try{
            await api.post('/pets.create', {nome, raca, idade, temperamento, castrado});
            alert("Animal Cadastro")
            history.push('/home');
        }catch(err){
            alert("Oops, algo deu errado")
        }
    }
  return (
      
    <div className="new-incident-container">
      <div className="content">
        <section>
          <h1> Cadastrar novo animal </h1>
          <p> Informe os dados do animal para realizar o cadastro. </p>
          <Link className="back-link" to="/Selecionar">
            Voltar para Selecionar
          </Link>
        </section>
        <form onSubmit={handleRegister} >
          <input placeholder="Nome do animal" value={nome} onChange={e => setNome(e.target.value)}/>
          <input placeholder="Raça do animal"  value={raca} onChange={e => setRaca(e.target.value)} />
          <input placeholder="Idade do animal" value={idade} onChange={e => setIdade(e.target.value)} />
          <input placeholder="Temperamento do animal" value={temperamento} onChange={e => setTemperamento(e.target.value)} />
          <input placeholder="Animal casterado?" value={castrado} onChange={e => setCastrado(e.target.value)} />
          <button className="button" typ="submit"> Cadastrar </button>
        </form>
      </div>
    </div>
  )
}