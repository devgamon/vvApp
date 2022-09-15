window.onload = ()=>{
    const url = 'https://virtuallibrary.profrodolfo.com.br/book.php';
    const insert = document.querySelector('.dados');

    function ExibirAcervo(){
         fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            		insert.innerHTML+= `
                        <div class="productBox">
                            <img src="${json[i].capa}">
                            <h2>${json[i].titulo}</h2>
                        </div>
                	`;
            }
        }).catch();
    }
        ExibirAcervo();
}