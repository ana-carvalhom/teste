import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";



function Corpo(){
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
            </div>
    )
}


function Esquerda(){
    return (
        <div class="esquerda">
          <Stories />
         <Posts />
        </div>
    )
}; 




export default Corpo;