/* 
Objetivo - quando clicarmos na aba temos que mostrar o conteudo
da aba que foi clicada pelo usuarioe esconder o conteudo da aba anterior 

- passo 1 dar um jeito de pagar os elementos que representar as abas no HTML

- passo 2 dar um jeito de identificar o clique no elemento da aba

- passo 3 quando usuarioclicar,desmarcar a aba selecionada

- passo 4 marcar aba clicada como selecionado

- passo 5 esconder o conteudo anterior

- passo 6 mostrar o conteudo da aba selecicionada

*/

// passo 1 dar um jeito de pagar os elementos que representar as abas no HTML
const abas = document.querySelectorAll(".aba")

// passo 2 dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener('click', function (e) {

            if (aba.classList.contains('selecionado')) {
                return;
            }

            // passo 3 quando usuarioclicar,desmarcar a aba selecionada
            const abaSelecionada = document.querySelector('.aba.selecionado')
            abaSelecionada.classList.remove('selecionado')

            // passo 4 marcar aba clicada coo selecionado
            aba.classList.add('selecionado')

            // passo 5 esconder o conteudo  
            const informacaoSelecionada = document.querySelector(
                '.informacao.selecionado'
            )
            
            informacaoSelecionada.classList.remove('selecionado')

            // passo 6 mostrar o conteudo da aba selecionada
            const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
            

            const informacaoASerMostrada = document.getElementById(
                idDoElementoDeInformacoesDaAba
            )
            informacaoASerMostrada.classList.add('selecionado')
        })
})

