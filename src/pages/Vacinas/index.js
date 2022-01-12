import React from "react";
import "./styles.css";
import Header from "../../components/Header";

export default function Vacinas() {
  return (
    <div className="dashboard-page">
      <Header />
      <div className="content dashboard">
        <div style={{ width: "100%", padding: 20 }}>
          <div className="vacina-wrapper">
            <h3>Para que serve a vacinação?</h3>
            <div>
              Seguir um calendário vacinal completo e efetivo é fundamental para
              garantir a saúde e a longevidade do seu animal de estimação, além
              de impedir a disseminação de doenças como: a raiva, a leptospirose
              ou a giardíase em seres humanos. Vaciná-los preventivamente também
              evita doenças que podem deixar sequelas nos animais como, por
              exemplo, a leucemia felina.
            </div>

            <h3 style={{ marginTop: 50 }}>Classificação das vacinas</h3>
            <div>
              <div>
                Há três tipos de classificação de vacinas: essenciais,
                complementares (ou não essenciais) e não recomendadas :
              </div>
              <div>
                <strong>essenciais:</strong> As essenciais devem ser aplicadas
                em todos os cães e gatos, indiferentemente de raça, tamanho ou
                idade, pois são vacinas que, em geral, previnem doenças fatais,
                de grande incidência ou com potencial de passarem aos seres
                humanos (zoonoses)
              </div>
              <div>
                <strong>complementares:</strong> As vacinas complementares são
                indicadas de acordo com a avaliação comportamental do animal,
                região em que vive e seu risco de exposição, seguindo os
                critérios do médico veterinário
              </div>
              <div>
                <strong>não recomendadas:</strong> As vacinas não recomendadas
                são, principalmente, aquelas que apresentam poucos estudos
                clínicos sobre sua eficácia ou que protegem contra doenças pouco
                relevantes
              </div>

              <div
                style={{
                  marginTop: 50,
                  display: "flex",
                  flexDirection: "row",
                  gap: 50,
                }}
              >
                <div style={{ width: "50%" }}>
                  <h3>Para cães</h3>
                  <div>
                    É importante ter em mente que os cães precisam de cuidados
                    com vacinas durante toda sua vida. O protocolo de aplicação
                    de vacinas deve começar ainda filhote, com até dois meses de
                    vida. A segunda dose precisa ser dada ao animal até os três
                    meses. E a terceira dose, aos quatro. Após essas primeiras 3
                    doses, o animal precisará de reforços anuais das seguintes
                    vacinas: V8, V10 e V12, que serão responsáveis por prevenir
                    várias doenças.
                  </div>
                  <h3 style={{ marginTop: 30 }}>
                    Quais as doenças que as vacinas V8 e V10 protegem?
                  </h3>
                  <div>
                    A vacina V8 e V10 não protegem contra 10 doenças diferentes,
                    mas contra 8 ou 10 vírus diferentes. Sendo:
                  </div>
                  <ul>
                    <li>Parvovirose</li>
                    <li>Coronavirose</li>
                    <li>Cinomose</li>
                    <li>Parainfluenza</li>
                    <li>Adenovirose</li>
                    <li>Hepatite Infecciosa</li>
                    <li>
                      Leptospirose: No caso da V10 são 4 tipos diferentes de
                      Leptospirose, a doença é uma zoonose e pode ser
                      transmitida para o homem, inclusive, pode ser fatal.
                    </li>
                  </ul>
                </div>
                <div style={{ width: "50%" }}>
                  <h3>Para gatos</h3>
                  <div>
                    A vacinação nos gatos começa aos dois meses de vida, e deve
                    ter reforço aos três meses. Depois disso, as doses são
                    anuais. No caso deles, há quatro vacinas disponíveis: V3,
                    V4, V5 e a vacina de raiva.A V4 previne as mesmas doenças
                    que a vacina V3, além da proteção contra a Clamidiose. Já a
                    V5, engloba as mesmas doenças que a V3 e a V4, mais a
                    proteção contra a Leucemia Felina. A antirrábica é igual a
                    fornecida aos cães.
                  </div>

                  <h3 style={{ marginTop: 30, marginBottom: 15 }}>
                    Quais as doenças que as vacinas V3, V4 e V5 protegem?
                  </h3>
                  <li>Calicivirose</li>
                  <li>Rinotraqueíte</li>
                  <li>Clamidiose</li>
                  <li>Clamidiose</li>
                  <li>FeLV </li>

                  <h3 style={{ marginTop: 30 }}>
                    Qual das 3 vacinas eu aplico então?
                  </h3>
                  <div>
                    A indicação dos veterinários é aplicar a vacina V4, porém é
                    sempre importante a avaliação da veterinária para
                    identificar quais as vacinas que seu gatinho deve receber.
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ marginTop: 50 }}>Em caso de atrasos das vacina</h3>
                <div>
                  Caso o dono esqueça de levar o animal para vacinar na data
                  correta, ele deverá entrar em contato com um médico
                  veterinário para seguir com o protocolo correto para o caso
                  específico daquele animal. No entanto, é importante estar em
                  dia com a vacinação do seu bichinho e levar ele sempre no
                  veterinário.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
