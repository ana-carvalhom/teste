function PostUser(props){
console.log(props);

return (
    <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.urlUser} />
                  {props.userTitle}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.urlPost} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src="assets/img/respondeai.svg" />
                  <div class="texto">
                    Curtido por <strong>{props.mainLike}</strong> e <strong>{props.otherLikes}</strong>
                  </div>
                </div>
              </div>
            </div>

)
}

   




function Posts(){

    const post = [
        <PostUser 
        urlUser="assets/img/meowed.svg" 
        userTitle="meowed" 
        urlPost="assets/img/gato-telefone.svg" 
        mainLike="respondeai" 
        otherLikes="outras 101.523 pessoas"
        />,
        <PostUser 
        urlUser="assets/img/barked.svg" 
        userTitle="barked" 
        urlPost="assets/img/adorable_animals.svg" 
        mainLike="adorable_animals" 
        otherLikes="outras 99.159 pessoas"
        />
    ]

    const newItems = [
    {
        urlUser: 'assets/img/meowed.svg', 
        userTitle: 'meowed', 
        urlPost:'assets/img/gato-telefone.svg', 
        mainLike:'respondeai', 
        otherLikes:'outras 101.523 pessoas'
    },
    {
        urlUser:'assets/img/meowed.svg', 
        userTitle: 'barked', 
        urlPost:'assets/img/dog.svg', 
        mainLike:'adorable_animals', 
        otherLikes:'outras 99.159 pessoas'
    }               
        ]
        
        const arrayPosts = newItems.map((item) => {
            return <PostUser 
            urlUser={item.urlUser}
            userTitle={item.userTitle} 
            urlPost={item.urlPost}
            mainLike={item.mainLike}
            otherLikes={item.otherLikes}
            />;
        })



    return (
        <div class="posts">
            {arrayPosts}
          </div>
    );
}

export default Posts;