import { useRef } from 'react';
import './styles.css';
import { NavBar } from '../../components/navbar';
import { Container } from '../../components/container';
import { Button } from '../../components/button';
import presentationImage from '../../assets/images/presentation-image.png';
import htmlImage from '../../assets/images/habilities/html.png';
import cssImage from '../../assets/images/habilities/css.png';
import jsImage from '../../assets/images/habilities/js.png';
import tsImage from '../../assets/images/habilities/ts.png';
import reactImage from '../../assets/images/habilities/react.png';
import nextImage from '../../assets/images/habilities/next.png';
import pythonImage from '../../assets/images/habilities/python.png';
import nodeImage from '../../assets/images/habilities/node.png';
import mongoImage from '../../assets/images/habilities/mongo.png';
import postgresImage from '../../assets/images/habilities/postgres.png';
import nestImage from '../../assets/images/habilities/nest.png';
import goImage from '../../assets/images/habilities/go.png';
import gitImage from '../../assets/images/habilities/git.png';
import dockerImage from '../../assets/images/habilities/docker.png';
import awsImage from '../../assets/images/habilities/aws.png';
import gcpImage from '../../assets/images/habilities/gcp.png';
import azureImage from '../../assets/images/habilities/azure.png';
import scrumImage from '../../assets/images/habilities/scrum.png';
import englishImage from '../../assets/images/habilities/united-kingdom.png';
import solidImage from '../../assets/images/habilities/solid.png';
import figmaImage from '../../assets/images/habilities/figma.png';
import uxImage from '../../assets/images/habilities/ux.png';
import courseraImage from '../../assets/images/coursera.jpg';
import dhImage from '../../assets/images/dh.jpg';
import fatecImage from '../../assets/images/fatec.jpg';
import rocketseatImage from '../../assets/images/rocketseat.jpg';
import senaiImage from '../../assets/images/senai.jpg';
import udemyImage from '../../assets/images/udemy.jpg';
import { Divider } from '../../components/divider';
import { InfoBox } from '../../components/info-box';
import { HabilityChart } from '../../components/hability-chart';
import { AnimatedDiv } from '../../components/animated-div';

export const Home = () => {
  const historyRef = useRef(null)
  const capacitiesRef = useRef(null)
  const contactRef = useRef(null)

  const handleScheduleInterviewClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5519995545043&text=Ol%C3%A1!%20Vamos%20marcar%20uma%20entrevista?%20Abra%C3%A7o.", '_blank');
  }

  const handleDownloadCVClick = () => {
    window.open("https://drive.google.com/file/d/1VkmLwkOazm7CvhxSWU19MVOarsQjR1NA/view?usp=sharing", '_blank');
  }

  return (
    <main>
      <header>
        <NavBar 
          historyRef={historyRef}
          capacitiesRef={capacitiesRef}
          contactRef={contactRef}
        />
      </header>
      <section>
        <AnimatedDiv>
          <Container>
            <>
              <div className="presentation">
                <div>
                  <p className="office">Programador Sênior</p>
                  <h1>Guilherme Sartori</h1>
                  <p className='description'>GESTÃO DE TI E UX DESIGN: HABILIDADES DO PROGRAMADOR QUE QUER ESCALAR SUA EMPRESA.</p>
                  <Button text='Agendar Entrevista' handleClick={handleScheduleInterviewClick} />
                </div>
                <div>
                  <img src={presentationImage} alt="Imagem 2D de um programador" />
                </div>
              </div>
              <Divider />
            </>
          </Container>
        </AnimatedDiv>
      </section>
      <section className='achievements' ref={historyRef}>
        <Container>
          <>
            <AnimatedDiv>
              <>
                <h2>Tudo Que Eu Já Fiz</h2>
                <p>Minha longa jornada na área de desenvolvimento de sistemas me tornou um <span>especialista em frontend</span>, com habilidades excepcionais em <span>backend</span>. </p>
                <p>Minha <span>formação em Gestão de TI</span> e <span>UX Design</span> me permite criar soluções de alto impacto para os usuários finais. Cada projeto em que participo é uma oportunidade de gerar valor e inovar, unindo <span>conhecimento técnico</span> com <span>visão estratégica</span>.</p>
              </>
            </AnimatedDiv>
            <AnimatedDiv>
              <div className='info-box-container'>
                <InfoBox quantity={10} text="Anos de Experiência" />
                <InfoBox quantity={20} text="Projetos Entregues" />
                <InfoBox quantity={5} text="Equipes Lideradas" />
                <InfoBox quantity={30} text="Cursos e Certificações" />
              </div>
            </AnimatedDiv>
            <Divider />
          </>
        </Container>
      </section>
      <section className='impact' ref={capacitiesRef}>
        <Container>
          <>
            <AnimatedDiv>
              <>
                <h2>Tudo Que Eu Posso Fazer Por Você</h2>
                <p>Imagine ter um <span>Programador Sênior</span> versátil na sua equipe que compreende o desenvolvimento de sistemas de forma completa e pode <span>atuar com maestria</span> em qualquer etapa do projeto. </p>
                <p>Com minhas habilidades, cada decisão é pensada para proporcionar uma experiência única e <span>entregar o máximo de valor</span> para o seu usuário. Estou pronto para trazer inovação e eficiência, ajudando sua empresa a se destacar no mercado e <span>alcançar patamares ainda mais elevados</span>.</p>
                <p className='alert'>*As porcentagens são para ilustrar meu nível de familiaridade e proficiência em cada tecnologia.</p>
              </>
            </AnimatedDiv>

            <div className="habilities-container">
              <AnimatedDiv>
                <div className="habilities-container-column">
                  <div className="habilities-list">
                    <h4>FrontEnd</h4>
                    <HabilityChart name='HTML' percentage={90} img={htmlImage}/>
                    <HabilityChart name='JS' percentage={90} img={jsImage}/>
                    <HabilityChart name='CSS' percentage={85} img={cssImage}/>
                    <HabilityChart name='ReactJs' percentage={85} img={reactImage}/>
                    <HabilityChart name='TS' percentage={80} img={tsImage}/>
                    <HabilityChart name='NextJs' percentage={60} img={nextImage}/>
                  </div>
                  <div className="habilities-list">
                    <h4>BackEnd</h4>
                    <HabilityChart name='NodeJs' percentage={75} img={nodeImage}/>
                    <HabilityChart name='NestJs' percentage={75} img={nestImage}/>
                    <HabilityChart name='PostgreSQL' percentage={70} img={postgresImage}/>
                    <HabilityChart name='MongoDB' percentage={50} img={mongoImage}/>
                    <HabilityChart name='Python' percentage={30} img={pythonImage}/>
                    <HabilityChart name='GoLang' percentage={30} img={goImage}/>
                  </div>
                </div>
              </AnimatedDiv>
              <AnimatedDiv>
                <div className="habilities-container-column">
                  <div className="habilities-list">
                    <h4>DevOps</h4>
                    <HabilityChart name='Git' percentage={90} img={gitImage}/>
                    <HabilityChart name='Docker' percentage={60} img={dockerImage}/>
                    <HabilityChart name='AWS' percentage={40} img={awsImage}/>
                    <HabilityChart name='GCP' percentage={30} img={gcpImage}/>
                    <HabilityChart name='Azure' percentage={20} img={azureImage}/>
                  </div>
                  <div className="habilities-list">
                    <h4>Complementares</h4>
                    <HabilityChart name='Scrum' percentage={80} img={scrumImage}/>
                    <HabilityChart name='SOLID' percentage={70} img={solidImage}/>
                    <HabilityChart name='Figma' percentage={70} img={figmaImage}/>
                    <HabilityChart name='UX' percentage={65} img={uxImage}/>
                    <HabilityChart name='Inglês' percentage={65} img={englishImage}/>
                  </div>
                </div>
              </AnimatedDiv>
            </div>
            <Divider />
          </>
        </Container>
      </section>
      <section className='lets-talk' ref={contactRef}>
        <AnimatedDiv>
          <Container>
            <>
              <h2>E Aí, Bora Bater Um Papo?</h2>
              <p>Agora é com você! Me chame para conversar, pois estou interessado em saber sobre sua empresa.</p>

              <div className="button-container">
                <Button text='Baixar Currículo' variant="outlined" handleClick={handleDownloadCVClick} />
                <Button text='Agendar Entrevista' handleClick={handleScheduleInterviewClick} />
              </div>

              <Divider />
            </>
          </Container>
        </AnimatedDiv>
      </section>
      <section className='projects'>
        <Container>
          <>
            <AnimatedDiv>
              <>
                <h2>Meus Seis Últimos Projetos</h2>
                <p>Se você ainda tem dúvidas, aqui estão alguns vídeos dos seis últimos projetos em que trabalhei. São projetos de alto valor e impacto para os clientes que se beneficiaram.</p>
              </>
            </AnimatedDiv>

            <div className="projects-list">
              <AnimatedDiv>
                <div className="projects-row"> 
                  <div className="project-item">
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/K_eIIqefffs?si=xbzcJXOUq39rjwRk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ border: "none", borderStartStartRadius: 32, borderStartEndRadius: 32 }}></iframe>
                    <div className="project-description">
                      <h5>BeSystem</h5>
                      <p className="instituition">BlackElephant Brasil LTDA</p>
                      <p>Projeto feito para bares, pizzarias e restaurantes. Um PDV que permite o usuário criar pedidos, gerenciar o caixa e cadastrar os produtos do comercio.</p>
                      <p className='project-time'>Aproximadamente 4 meses.</p>
                      <div className="project-tecnologies"></div>
                    </div>
                  </div> 
                  <div className="project-item">
                  <iframe width="100%" height="250" src="https://www.youtube.com/embed/YB_ptrOXE3g?si=jWSoSMFqZutZCWXB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ border: "none", borderStartStartRadius: 32, borderStartEndRadius: 32 }}></iframe>
                    <div className="project-description">
                      <h5>Câmera Arcure Ômega</h5>
                      <p className="instituition">Quanyx Digital</p>
                      <p>Foi criado um Script que recuperava as informações de uma câmera de alta tecnologia com sensores de distância e mapa de pontos em 3D e enviava essas informações para um banco de dados. Ao mesmo tempo em que armazenava os vídeos gerados no armazenamento interno do computador de bordo da NVIDEA.</p>
                      <p className='project-time'>Aproximadamente 6 meses.</p>
                      <div className="project-tecnologies"></div>
                    </div>
                  </div> 
                </div>
              </AnimatedDiv>
              <AnimatedDiv>
                <div className="projects-row"> 
                  
                  <div className="project-item">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe src="https://drive.google.com/file/d/1eOuVs9frqbjcIgOWEnJRL3AWSx4pFol-/preview" width="100%" height="250" allow="autoplay" style={{ border: "none", borderStartStartRadius: 32, borderStartEndRadius: 32 }}></iframe>
                    <div className="project-description">
                      <h5>Sistema CaaS</h5>
                      <p className="instituition">Fatec Campinas</p>
                      <p>Software ERP para docerias. Projeto de TCC feito para solucionar os problemas de um cliente real. </p>
                      <p className='project-time'>Aproximadamente 3 meses.</p>
                      <div className="project-tecnologies"></div>
                    </div>
                  </div> 
                  <div className="project-item">
                    <div className="video-not-exists">
                      <p>O projeto não possui vídeo de demonstração, infelizmente. :(</p>
                    </div>
                    <div className="project-description">
                      <h5>NosConformes</h5>
                      <p className="instituition">DM11</p>
                      <p>Sistema de gerenciamento das análises de vulnerabilidades das empresas. No sistema é permitido o usuário fazer upload de documentos e receber um score de quão vulnerável é a empresa dele naquele momento de acordo com as melhores práticas do mercado e as leis de segurança e proteção para o setor de TI.</p>
                      <p className='project-time'>Aproximadamente 6 meses.</p>
                      <div className="project-tecnologies"></div>
                    </div>
                  </div>  
                </div>
              </AnimatedDiv>
              <AnimatedDiv>
                <div className="projects-row"> 
                  <div className="project-item">
                    <div className="video-not-exists">
                      <p>O projeto não possui vídeo de demonstração, infelizmente. :(</p>
                    </div>
                    <div className="project-description">
                      <h5>Organigramas</h5>
                      <p className="instituition">Orys</p>
                      <p>O objetivo do projeto era criar um organograma interativo com filtros dinâmicos e personalizáveis para ser utilizado no SharePoint da Microsoft.</p>
                      <p className='project-time'>Aproximadamente 3 meses.</p>
                      <div className="project-tecnologies"></div>
                    </div>
                  </div> 
                  <div className="project-item">
                    <div className="video-not-exists">
                      <p>O projeto não possui vídeo de demonstração, infelizmente. </p>
                    </div>
                    <div className="project-description">
                      <h5>Projeto Darwin</h5>
                      <p className="instituition">Orys</p>
                      <p>Redesign das telas do SAP. Sistema feito para criar uma nova maneira de interagir com a ferramenta. O projeto foi feito para interagir via API com o banco de dados do SAP. </p>
                      <p className='project-time'>Aproximadamente 9 meses.</p>
                      <div className="project-tecnologies"></div>
                    </div>
                  </div> 
                </div>
              </AnimatedDiv>
            </div>

            <Divider />
          </>
        </Container>
      </section>
      <section className='experience'>
        <Container>
          <>
            <AnimatedDiv>
              <>
                <h2>Empresas Que Se Beneficiaram Das Minhas Habilidades</h2>
                <p>Ao longo da minha carreira eu pude ajudar muitas empresas. Porém, nada disso importa se eu não puder ajudar a sua. rsrs :D</p>
              </>
            </AnimatedDiv>
            <div className="timeline">
              <ul>
                <li>
                  <AnimatedDiv>
                    <div className="main-timeline-content">
                      <h5>Programador Sênior</h5>
                      <p className="company-name">Orys</p>
                      <p>Levantamento de requisitos diretamente com o cliente. Criação de layouts de telas usando a ferramenta Figma. Desenvolvimento de soluções compatíveis com React e Next.js.</p>
                    </div>
                  </AnimatedDiv>
                  <div className="timeline-date">
                    <h6>Jul/2023 - Jul/2024</h6>
                  </div>
                </li>
                <li>
                  <AnimatedDiv>
                    <div className="main-timeline-content">
                      <h5>Gestor de TI</h5>
                      <p className="company-name">BlackElephant Brasil LTDA</p>
                      <p>Gerenciamento de equipes de desenvolvimento. Organização de atividades. Motivação da equipe. Reuniões de planejamento e validação. Levantamento de requisitos. Criação de layouts e desenvolvimento de sistemas com React e Next.js.</p>
                    </div>
                  </AnimatedDiv>
                  <div className="timeline-date">
                    <h6>Ago/2022 - Jul/2023</h6>
                  </div>
                </li>
                <li>
                  <AnimatedDiv>
                    <div className="main-timeline-content">
                      <h5>Freelancer</h5>
                      <p className="company-name">Nômade Digital</p>
                      <p>Captação de clientes através de plataformas de freelance, networking e outros meios. Levantamento de requisitos e criação de layouts que resolvam os problemas. Desenvolvimento dos sistemas, aplicativos e funcionalidades que eram requisitadas.</p>
                    </div>
                  </AnimatedDiv>
                  <div className="timeline-date">
                    <h6>Jul/2019 - Ago/2022</h6>
                  </div>
                </li>
                <li>
                  <AnimatedDiv>
                    <div className="main-timeline-content">
                      <h5>Professor</h5>
                      <p className="company-name">DigitalHouse</p>
                      <p>Criação de conteúdos de aula, como exercícios e provas. Orientação dos alunos em sala de aula. Ministração de aulas em grupo. Coordenação de grupos de projetos para que os alunos se formem capacitados.</p>
                    </div>
                  </AnimatedDiv>
                  <div className="timeline-date">
                    <h6>Jul/2018 - Jul/2019</h6>
                  </div>
                </li>
                <li>
                  <AnimatedDiv>
                    <div className="main-timeline-content">
                      <h5>Programador Jr.</h5>
                      <p className="company-name">MutantBr</p>
                      <p>Suporte e correção aos bugs apontados pelos clientes. Desenvolvimento de novas funcionalidades e requisitos levantados pelo time de projetos. Atuação com frontend e backend utilizando ASP e banco de dados SQL Server.</p>
                    </div>
                  </AnimatedDiv>
                  <div className="timeline-date">
                    <h6>Set/2015 - Jul/2018</h6>
                  </div>
                </li>
                <div style={{ clear: "both" }}></div>
              </ul>
            </div>
            <Divider />
          </>
        </Container>
      </section>
      <section className='courses'>
        <Container>
          <>
            <AnimatedDiv>
              <>
                <h2>Se Hoje Sou Grande, É Porque Me Apoiei Nos Ombros De Gigantes</h2>
                <p>Eu me formei em inúmeros cursos desde que eu iniciei minha jornada como programador, mas aqui irei citar os que foram mais importantes para minha vida.</p>
              </>
            </AnimatedDiv>

            <div className="courses-list">
              <AnimatedDiv>
                <div className="courses-row"> 
                  <div className="course-item">
                    <img src={fatecImage} alt="" />
                    <div className="course-description">
                      <h5>Gestão da Tecnologia da Informação</h5>
                      <p className="instituition">Fatec Campinas</p>
                      <p>Curso de nível superior (graduação). O curso é focado em formar um gestor para a área de TI. O curso aborda temas como gestão de projetos, programação, gestão financeira e muito mais.</p>
                    </div>
                  </div> 
                  <div className="course-item">
                    <img src={dhImage} alt="" />
                    <div className="course-description">
                      <h5>Design de Experiência de Usuário (UX)</h5>
                      <p className="instituition">DigitalHouse</p>
                      <p>Curso de nível tecnico focado na formação de profissionais de excelência para a área de UX Design. O curso aborda temas como pesquisa, etinografia, prototipação, eurística e outras coisas.</p>
                    </div>
                  </div> 
                </div>
              </AnimatedDiv>
              <AnimatedDiv>
                <div className="courses-row"> 
                  <div className="course-item">
                    <img src={rocketseatImage} alt="" />
                    <div className="course-description">
                      <h5>Programação FullStack JavaScript</h5>
                      <p className="instituition">RocketSeat</p>
                      <p>Curso de nível tecnico feito para evoluir um programador Júnior ao nível de Pleno. Na trilha é abordado, além da parte de código, a parte de SOLID e Clean Code. Conceitos que não são vistos em cursos tradicionais.</p>
                    </div>
                  </div> 
                  <div className="course-item">
                    <img src={senaiImage} alt="" />
                    <div className="course-description">
                      <h5>Mecatrônica</h5>
                      <p className="instituition">SENAI - Roberto Mange</p>
                      <p>Curso técnico com foco na preparação do aluno para trabalhar na indústria. São ensinados conceitos como eletrônica, mecânioca e programação aos alunos. </p>
                    </div>
                  </div>  
                </div>
              </AnimatedDiv>
              <AnimatedDiv>
                <div className="courses-row"> 
                <div className="course-item">
                    <img src={udemyImage} alt="" />
                    <div className="course-description">
                      <h5>Cursos de Programação</h5>
                      <p className="instituition">Udemy</p>
                      <p>A Udemy é uma plataforma que possui inúmeros cursos e, lá dentro, eu já pude fazer cursos das mais variádas áreas. Pude aprender sobre banco de dados MySQL e MongoDB (por exemplo), programação com PHP e Laravel, WordPress, GoLang, Python e, as que mais me interessavam que era NodeJs e React.</p>
                    </div>
                  </div> 
                  <div className="course-item">
                    <img src={courseraImage} alt="" />
                    <div className="course-description">
                      <h5>Desenvolvimento Básico</h5>
                      <p className="instituition">Coursera</p>
                      <p>Este foi o curso que iniciou minha jornada na programação. Pude aprender o básico de HTML, CSS e JS. Fui do absoluto zero ao suficiente para iniciar o desenvolvimento web. </p>
                    </div>
                  </div> 
                </div>
              </AnimatedDiv>
            </div>
            <Divider />
          </>
        </Container>
      </section>
      <section className='presentation-bottom'>
        <Container>
          <>
            <AnimatedDiv>
              <>
                <h2>Eu Ainda Não Te Convenci?</h2>
                <p>Então eu vou me apresentar um pouco melhor. Dê play no vídeo abaixo e, em seguida, me convide para conversar.</p>
              </>
            </AnimatedDiv>

            <AnimatedDiv>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe src="https://drive.google.com/file/d/1PalDhd9D-1epjuGILhG7LGAA8C9DyZN8/preview" width="1000" height="420" allow="autoplay" style={{ border: "none", marginTop: 40, borderRadius: 32 }}></iframe>
            </AnimatedDiv>

            <AnimatedDiv>
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title, react/style-prop-object */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1468098448227!2d-47.01361072468505!3d-23.055078679150952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf32e539ad4b6b%3A0xaf43b7c24d3ac7b8!2sR.%20Rubi%2C%20468%20-%20Vila%20Santa%20Fe%2C%20Vinhedo%20-%20SP%2C%2013280-000!5e0!3m2!1spt-BR!2sbr!4v1720229736058!5m2!1spt-BR!2sbr" width="1000" height="400" style={{ border: 0, marginTop: 40}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </AnimatedDiv>
            
            <AnimatedDiv>
              <div className="button-container">
                <Button text='Baixar Currículo' variant="outlined" handleClick={handleDownloadCVClick} />
                <Button text='Agendar Entrevista' handleClick={handleScheduleInterviewClick} />
              </div>
            </AnimatedDiv>

            <Divider />
          </>
        </Container>
      </section>
      <section className='gratefull'>
        <AnimatedDiv>
          <Container>
            <>
              <h2>Gratidão! 🤗</h2>
              <p>Sou grato por você ter lido até aqui e saiba que, se você tem interesse em me contratar é porque eu tenho as habilidades e o fit-tecnico-cultural que você está buscando na sua empresa. </p>
              <p>Aguardo seu contato e, tomara que nós possamos crescer muito juntos ainda. Até logo!</p>
            </>
          </Container>
        </AnimatedDiv>
      </section>
      <footer>
        <Container>
          <p>Feito com ❤️ por Guilherme Sartori</p>
        </Container>
      </footer>
    </main>
  );
}