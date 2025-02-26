import { useState } from "react";

function Menu() {
  const [comunicacaoAberto, setComunicacaoAberto] = useState(false);

  const toggleComunicacao = () => {
    setComunicacaoAberto(!comunicacaoAberto);}
    const [segurancaAberto, setSegurancaAberto] = useState(false);

  const toggleSeguranca = () => {
    setSegurancaAberto(!segurancaAberto);}
    const [agendamentosAberto, setAgendamentosAberto] = useState(false);

    const toggleAgendamentos = () => {
      setAgendamentosAberto(!agendamentosAberto);}  
      const [documentosAberto, setDocumentosAberto] = useState(false);

    const toggleDocumentos = () => {
      setDocumentosAberto(!documentosAberto);}  
      const [processosAberto, setProcessosAberto] = useState(false);

      const toggleProcessos = () => {
        setProcessosAberto(!processosAberto);}  
        const [dashAberto, setDashAberto] = useState(false);

        const toggleDash = () => {
          setDashAberto(!dashAberto);}
          const [acessoAberto, setAcessoAberto] = useState(false);

        const toggleAcesso = () => {
          setAcessoAberto(!acessoAberto);}  
     
  

  return (
    <main id='menu'>
      <div id="itens">
        <ul>
          <li>
            <i className="bi bi-file-earmark-text"></i>
            <a href="#" onClick={toggleComunicacao}>Comunicação</a>
            
            <ul style={{ display: comunicacaoAberto ? "block" : "none" }}>
              <li><a href="#">Mural</a></li>
              <li><a href="#">Contatos</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-shield-check"></i>
            <a href="#" onClick={toggleSeguranca} >Segurança</a>
            <ul style={{ display: segurancaAberto ? "block" : "none" }}>
              <li><a href="#">CFTV</a></li>
              <li><a href="#">Portaria</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-calendar2-check"></i>
            <a href="#" onClick={toggleAgendamentos}   >Agendamentos</a>
            <ul style={{ display: agendamentosAberto ? "block" : "none" }}>
              <li><a href="#">Salas</a></li>
              <li><a href="#">Veículos</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-paperclip"></i>
            <a href="#" onClick={toggleDocumentos} >Documentos</a>
            <ul style={{ display: documentosAberto ? "block" : "none" }}>
              <li><a href="#">Políticas RH</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-shuffle"></i>
            <a href="#" onClick={toggleProcessos}>Processos</a>
            <ul style={{ display: processosAberto ? "block" : "none" }}>
              <li><a href="#">ITs</a></li>
              <li><a href="#">Workflow</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-bar-chart"></i>
            <a href="#"  onClick={toggleDash}>Dashboards</a>
            <ul style={{ display: dashAberto ? "block" : "none" }}>
              <li><a href="#">KPI Vendas</a></li>
              <li><a href="#">Produtividade</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-box-arrow-in-right"></i>
            <a href="#" onClick={toggleAcesso}>Acesso</a>
            <ul  style={{ display: acessoAberto ? "block" : "none" }}> 
              <li><a href="#">ERP</a></li>
              <li><a href="#">CRM</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Menu;
