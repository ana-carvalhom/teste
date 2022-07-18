function StoryUser(props){
    console.log(props);
   
    
    return (
        <div class="story">
        <div class="imagem">
        <img src={props.urlImagem} />
      </div>                   
    <div class="usuario"> {props.title} </div>    
    </div>
    )
}


function Stories(){
    const story = [
    <StoryUser urlImagem="assets/img/9gag.svg" title="9gag"/>,
    <StoryUser urlImagem="assets/img/meowed.svg" title="meowed"/>,
    <StoryUser urlImagem="assets/img/barked.svg" title="barked"/>,
    <StoryUser urlImagem="assets/img/nathanwpylestrangeplanet.svg" title="nathanwpylestrangeplanet"/>,
    <StoryUser urlImagem="assets/img/wawawicomics.svg" title="wawawicomics"/>,
    <StoryUser urlImagem="assets/img/respondeai.svg" title="respondeai"/>,
    <StoryUser urlImagem="assets/img/filomoderna.svg" title="filomoderna"/>,
    <StoryUser urlImagem="assets/img/memeriagourmet.svg" title="memeriagourmet"/>          
    ]

    const newItems = [
    {urlImagem: 'assets/img/9gag.svg', title:'9gag'},
    {urlImagem:'assets/img/meowed.svg', title:'meowed'},
    {urlImagem:'assets/img/barked.svg', title:'barked'},
    {urlImagem:'assets/img/nathanwpylestrangeplanet.svg', title:'nathanwpylestrangeplanet'},
    {urlImagem:'assets/img/wawawicomics.svg', title:'wawawicomics'},
    {urlImagem:'assets/img/respondeai.svg', title:'respondeai'},
    {urlImagem:'assets/img/filomoderna.svg', title:'filomoderna'},
    {urlImagem:'assets/img/memeriagourmet.svg', title:'memeriagourmet'} 
    
    ]
    
    const arrayStory = newItems.map((item) => {
        return <StoryUser urlImagem={item.urlImagem} title={item.title}/>;
    })

    return (

        <div class="stories">        
          {arrayStory}  
          
       <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}

export default Stories;