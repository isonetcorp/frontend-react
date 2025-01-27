const LandingPage = () => {
    return (
      <div className="landing-page">
        <header className="header">
          <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
        </header>
        <main className="body">
          <section className="welcome">
            <h2>Bienvenido</h2>
        
            <p>
              Este módulo se centra en el uso de <strong>React</strong>,
              incluyendo la creación de <strong>componentes</strong>, el manejo de{" "}
              <strong>hooks</strong>, y el uso de
              <strong> Redux</strong>.
            </p>
          </section>
        
          <section className="topics">
       
            <h2>Temas Cubiertos</h2>
            
            <ul>
              <li>Componentes funcionales y de clase</li>
              <li>
                Uso de <strong>React hooks</strong> como <code>useState</code> y{" "}
                <code>useEffect</code>
              </li>
              <li>
                Creación de <strong>custom hooks</strong> como{" "}
                <code>useForm</code>
              </li>
              <li>
                Gestión de variables de estado con <code>useState</code>
              </li>
              <li>
                Gestión de estado global con <strong>Redux</strong>
              </li>
              <li>
                Integración de <strong>Redux</strong> con React
              </li>
              <li>
                Manejo de <strong>Formularios</strong> en React
              </li>
              <li>
                Publicando nuestra Página con <strong>GitHub Pages</strong>
              </li>
            </ul>
          </section>
     
          <section className="resources">
        
            <h2>Recursos Adicionales</h2>
           
            <p>
              Para profundizar en los temas cubiertos, consulta los siguientes
              recursos:
            </p>
          </section>
        </main>
        <footer className="footer">
          <p>© 2024 Módulo 7. USIP.</p>
        </footer>
      </div>
    );
  };
  
  export default LandingPage;
  