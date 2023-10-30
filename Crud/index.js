


// [CRUD] javascript
const miniTwitter = {
    usuarios: [
        {
            username: 'JoaoMoraisxD'
        }
    ],
    posts: [
        {
            owner: 'JoaoMoraisxD',
            content: 'Meu primeiro tweet'
        }
    ]
};
// CREAT

// Criando um post utilizando push para inserir dados no array de posts e inserindo um id para localizar determinados posts
function criaPosts(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPosts({owner: 'JoaoMoraisxD', content: 'Segundo tweet'});
// READ

//Aqui foi criada uma funçao para ler os post criados passando a rota.
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts())

// UPDATE

//funçao criada para atualizar determinado post utilizando metodo find aonde temos um arrow function que retorna uma validação para identificar o id do que deja atualizar
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    })
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo;
}
atualizaContentDoPost(1, 'Novo conteúdo do tweet')
console.log(pegaPosts)
// DELETE

function apagaPost(id){
    const ListaDePostsAtualizada = pegaPosts().filter((postAtual)=> {
        return postAtual.id !== id;
    })

    miniTwitter.posts = ListaDePostsAtualizada;
}

apagaPost(1);
console.log(pegaPosts());
