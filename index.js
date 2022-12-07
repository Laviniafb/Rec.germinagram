//Apresentando o aside
const add = document.querySelector(".postadd");
console.log(add);
add.addEventListener("click", mostrarAside)
const post = document.querySelector("aside");
function mostrarAside(){
   post.style.display= "flex";
}


//Fazendo o aside desaparecer
post.addEventListener("click", removerAside);
function removerAside(e){
    if (e.target == this){
      ocultarAside()
    }
}
function ocultarAside(){
  post.style.display = 'none'
}


//Limitando o numero de caracteres do input de texto
const formText = document.querySelector(".comentario-form");
console.log(formText);
formText.setAttribute("maxlength","200");


//"Postando" os valores adicionados ao input
const btnpost = document.querySelector(".postar");
console.log(btnpost)
btnpost.addEventListener("click", addPost)


// Função para adicionar os articles(posts) ao section
function addPost(e){
e.preventDefault();
const parte = document.querySelector(".secao-posts")

if(formText == null && document.querySelector("#campo-foto")== null){
  window.alert("Adicione algum conteudo para poder realizar a postagem") // o alerte tem como objetivo avisar quando os forms estão vazios, mas não está funcionando
}else{
  parte.innerHTML += `
<article class="post">
          <div class="post-info">
            <div class="usuario-info">
              <div class="avatar"></div>
              <div class="nome-hora">
                <p class="nome">Joana da Silva Peixoto</p>
                <p class="hora">00 horas atrás</p>
              </div>
            </div>
            <p class="comentario">
              ${formText.value }
            </p>
          </div>
          <img class="post-imagem" src="${url}" alt="" />
          <div class="post-interacoes">
            <div class="container-like">
              <img class="like-btn" src="like.svg" alt="like" />
              <p class="descricao-like">Curtir</p>
            </div>
            <div class="container-coment">
              <img class="coment-btn" src="comentario.svg" alt="like" />
              <p class="descricao-comentario">Comentários</p>
            </div>
          </div>
        </article>
`

//função para curtir
const curtir = document.querySelector(".container-like")
curtir.addEventListener("click",deslike)

function deslike(e){
  if(e.target.classList.contains("Curtir")){
    const like = document.querySelector(".container-like")
    like.innerHTML = (`<img class="like-btn" src="like-solid.svg" alt="deslike">
    <p class="descricao-like">descurtir</p>`)
  }else{
    const like = document.querySelector(".container-like")
    like.innerHTML = `<img class="like-btn" src="like.svg" alt="like" />
      <p class="descricao-like">Curtir</p>`
  }
  e.target.classList.toggle("Curtir")
}
}
post.style.display = 'none'
}// O curtir está funcionando apenas quando o click for na div


//Função para apresentar a imagem no form
const inputImg = document.querySelector("#campo-foto")
inputImg.addEventListener("change", mostrarImagem)
let url;
function mostrarImagem(e){
  url = e.target.files[0].name

  const img = document.createElement("img");
  img.setAttribute("src",`${url}`);
  img.classList.add("imagem-form");

  const secaoImg = document.querySelector(".container-imagem");
  inputImg.style.display = "none";
  secaoImg.appendChild(img);

}