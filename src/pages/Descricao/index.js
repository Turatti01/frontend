import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";
import "./styles.css";
import image1 from "../../Assets/cachorro-sorrindo.png";
import { FiHome } from "react-icons/fi";
// import { GiDogBowl } from "react-icons/fi";
//import StorageIcon from '@material-ui/icons/Storage';
export default function Descricao() {
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="dashboard-page">
      <header className="vsf">
        <div className="left">
          <h3>
            Help <span>Pet </span>
          </h3>
        </div>
        <div className="right">
          <a to="#" onClick={logout} className="sair_btn">
            Sair
          </a>
        </div>
      </header>
      <div className="content dashboard">
        <nav className="sidebar">
          <center>
            <img src={image1} className="image" alt="" />
            <h2>Sisi</h2>
          </center>
          <a href="/Vacina">
            <FiHome size={16} />
            <span>Vacinas</span>
          </a>
          <a href="/Medicamentos">
            <FiHome size={16} />
            <span>Medicamentos</span>
          </a>
        </nav>
        <main>
          <div>
            <h1> Para que serve a vacinação?</h1>
            <p>
              Seguir um calendário vacinal completo e efetivo é fundamental para
              garantir a saúde e a longevidade do seu animal de estimação, além
              de impedir a disseminação de doenças como a raiva, a leptospirose
              ou a giardíase em seres humanos. Vaciná-los preventivamente também
              evita doenças que podem deixar sequelas nos animais como, por
              exemplo, a leucemia felina.
              <p>
                O “efeito rebanho” causado pela vacinação faz com que quanto
                mais animais forem vacinados, menor seja a chance de doenças
                comuns tomarem grandes proporções. Por isso, é de suma
                importância manter o cartão de vacinação do seu amigo
                atualizado.
              </p>
            </p>
            <br></br>
            <br></br>
            <h2> Classificação das vacinas</h2>
            <br></br>
            <h3>
              Há três tipos de classificação de vacinas: essenciais,
              complementares (ou não essenciais) e não recomendadas :
            </h3>
            <br></br>
            <p>
              essensiais: As essenciais devem ser aplicadas em todos os cães e
              gatos, indiferentemente de raça, tamanho ou idade, pois são
              vacinas que, em geral, previnem doenças fatais, de grande
              incidência ou com potencial de passarem aos seres humanos
              (zoonoses){" "}
            </p>
            <br></br>
            <p>
              complementares: As vacinas complementares são indicadas de acordo
              com a avaliação comportamental do animal, região em que vive e
              outros fatores, seguindo os critérios do médico veterinário{" "}
            </p>
            <br></br>
            <p>
              não recomendadas: As vacinas não recomendadas são, principalmente,
              aquelas que apresentam poucos estudos clínicos sobre sua eficácia
              ou que protegem contra doenças pouco relevantes{" "}
            </p>
            <br></br>
            <h4> Para cães:</h4>
            <p>
              É importante ter em mente que os cães precisarão de cuidados com
              vacinas durante toda sua vida. O protocolo de aplicação de vacinas
              deve começar ainda filhote, com até dois meses de vida. A segunda
              dose precisa ser dada ao animal até os três meses. E a terceira
              dose, aos quatro. Após essas primeiras 3 doses, o animal precisará
              de reforços anuais das seguintes vacinas: V8, V10 e V12, que serão
              responsáveis por prevenir várias doenças{" "}
            </p>
            <br></br>
            <h5> Para Gatos: </h5>
            <p>
              {" "}
              A vacinação nos gatos começa aos dois meses de vida, e deve ter
              reforço aos três meses. Depois disso, as doses são anuais. No caso
              deles, há quatro vacinas disponíveis: V3, V4, V5 e a vacina de
              Raiva. A V4 previne as mesmas doenças que a vacina V3, além da
              proteção contra Clamidiose. Já a V5, engloba as mesmas doenças que
              a V3 e a V4, mais a proteção contra a Leucemia Felina. A
              Antirrábica é igual a fornecida aos cães.
            </p>{" "}
            <br></br>
            <h6> Em caso de atrasos das vacinas</h6>
            <p>
              Caso o dono esqueça de levar o animal vacinar na data correta, ele
              deverá entrar em contato com um médico veterinário para seguir com
              o protocolo correto para o caso específico daquele pet. No
              entanto, é importante estar em dia com a vacinação do seu bichinho
              e levar ele sempre no veterinário.
            </p>
            <br></br>
            <div className="content dashboard">
              <Link className="butaoo" to="/EditVac">
                Cadastre suas vacinas!
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
