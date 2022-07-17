
function Sugestao(props){
    console.log(props);
    return (
        <div class="sugestao">
        <div class="usuario">
          <img src={props.img} />
          <div class="texto">
            <div class="nome">{props.userName}</div>
            <div class="razao">{props.UserStatus}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );
}





//Sidebar component
function Sidebar(){
    return (
        <div class="sidebar">
          <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestao img="assets/img/bad.vibes.memes.svg"  userName="bad.vibes.memes" UserStatus="Segue você"/>
            <Sugestao img="assets/img/chibirdart.svg" userName="chibirdart" UserStatus="Segue você"/>
            <Sugestao img="assets/img/razoesparaacreditar.svg" userName="razoesparaacreditar" UserStatus="Novo no Instagram"/>
            <Sugestao img="assets/img/adorable_animals.svg"  userName="adorable_animals" UserStatus="Segue você"/>
            <Sugestao img="assets/img/smallcutecats.svg" userName="smallcutecats" UserStatus="Segue você"/>
            
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}

export default Sidebar;