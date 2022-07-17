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
    const urlImagens = [, 
    , 
    "assets/img/barked.svg", 
    "assets/img/nathanwpylestrangeplanet.svg", 
    "assets/img/wawawicomics.svg", 
    "assets/img/respondeai.svg",
    "assets/img/filomoderna.svg",
    "assets/img/memeriagourmet.svg"        
    ]
    return (
        <div class="stories">
               
         <StoryUser urlImagem="assets/img/9gag.svg" title="9gag"/>
         <StoryUser urlImagem="assets/img/meowed.svg" title="meowed"/>
         <StoryUser urlImagem="assets/img/barked.svg" title="barked"/>
         <StoryUser urlImagem="assets/img/nathanwpylestrangeplanet.svg" title="nathanwpylestrangeplanet"/>
         <StoryUser urlImagem="assets/img/wawawicomics.svg" title="wawawicomics"/>
         <StoryUser urlImagem="assets/img/respondeai.svg" title="respondeai"/>
         <StoryUser urlImagem="assets/img/filomoderna.svg" title="filomoderna"/>
         <StoryUser urlImagem="assets/img/memeriagourmet.svg" title="memeriagourmet"/>
  
          
       <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}

export default Stories;