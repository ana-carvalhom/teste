
function Sugestao(props){
    console.log(props);
    return (
        <div class="sugestao">
        <div class="usuario">
          <img src={props.img} />
          <div class="texto">
            <div class="nome">{props.userName}</div>
            <div class="razao">{props.userStatus}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    );
}


function Sidebar(){
    const sugestao = [
            <Sugestao 
            img="assets/img/bad.vibes.memes.svg"  
            userName="bad.vibes.memes" 
            userStatus="Segue você"
            />,
            <Sugestao 
            img="assets/img/chibirdart.svg" 
            userName="chibirdart" 
            userStatus="Segue você"
            />,
            <Sugestao 
            img="assets/img/razoesparaacreditar.svg" 
            userName="razoesparaacreditar" 
            userStatus="Novo no Instagram"
            />,
            <Sugestao 
            img="assets/img/adorable_animals.svg"  
            serName="adorable_animals" 
            userStatus="Segue você"
            />,
            <Sugestao 
            img="assets/img/smallcutecats.svg" 
            userName="smallcutecats" 
            userStatus="Segue você"
            />,
    ]

    const newItem = [
        {
        img:"assets/img/bad.vibes.memes.svg",  
        userName:"bad.vibes.memes", 
        userStatus:"Segue você"
    },
    {
        img:"assets/img/chibirdart.svg", 
        userName:"chibirdart", 
        userStatus:"Segue você"
    },
    {
        img:"assets/img/razoesparaacreditar.svg", 
        userName:"razoesparaacreditar", 
        userStatus:"Novo no Instagram"
    },
    {
        img:"assets/img/adorable_animals.svg",  
        userName:"adorable_animals", 
        userStatus:"Segue você"
    },
    {
        img:"assets/img/smallcutecats.svg", 
        userName:"smallcutecats", 
        userStatus:"Segue você"
    }


    ]

    const arraySugestoes = newItem.map((item) => {
        return  (<Sugestao 
        img={item.img}
        userName={item.userName} 
        userStatus={item.userStatus}
        />);
    })

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
        {arraySugestoes}
            
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