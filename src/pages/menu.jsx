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
              <li><a href="/cadastro">Mural</a></li>
              <li><a href="/cadastro">Contatos</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-shield-check"></i>
            <a href="#" onClick={toggleSeguranca} >Segurança</a>
            <ul style={{ display: segurancaAberto ? "block" : "none" }}>
              <li><a href="/cadastro">CFTV</a></li>
              <li><a href="/cadastro">Portaria</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-calendar2-check"></i>
            <a href="#" onClick={toggleAgendamentos}   >Agendamentos</a>
            <ul style={{ display: agendamentosAberto ? "block" : "none" }}>
              <li><a href="/cadastro">Salas</a></li>
              <li><a href="/cadastro">Veículos</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-paperclip"></i>
            <a href="#" onClick={toggleDocumentos} >Documentos</a>
            <ul style={{ display: documentosAberto ? "block" : "none" }}>
              <li><a href="/cadastro">Políticas RH</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-shuffle"></i>
            <a href="#" onClick={toggleProcessos}>Processos</a>
            <ul style={{ display: processosAberto ? "block" : "none" }}>
              <li><a href="/cadastro">ITs</a></li>
              <li><a href="/cadastro">Workflow</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-bar-chart"></i>
            <a href="#"  onClick={toggleDash}>Dashboards</a>
            <ul style={{ display: dashAberto ? "block" : "none" }}>
              <li><a href="/cadastro">KPI Vendas</a></li>
              <li><a href="/cadastro">Produtividade</a></li>
            </ul>
          </li>
          
          <li>
            <i className="bi bi-box-arrow-in-right"></i>
            <a href="#" onClick={toggleAcesso}>Acesso</a>
            <ul  style={{ display: acessoAberto ? "block" : "none" }}> 
              <li><a href="/cadastro">ERP</a></li>
              <li><a href="/cadastro">CRM</a></li>
            </ul>
          </li>
          <li>
          
          <i className="bi bi-house"></i>
          <a href="/home">Home</a>

          </li>
        </ul>
       
      </div>
    </main>
  );
}

export default Menu;
