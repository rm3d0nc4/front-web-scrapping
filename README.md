# Teste - Netshoes Scrapping
Este readme descreve o web scrapper construído para o site da [Netshoes]( www.netshoes.com.br).

## Desafio
O desafio consiste em realizar uma requisição em uma página de um produto, pegar o html e extrair informações deste produto (título, preço, imagem, descrição).
- Exemplo: A requisição neste [Produto](https://www.netshoes.com.br/camiseta-dc-shoes-square-star-masculina-preto-PFI-3243-006) deve retornar os seguintes dados:
![enter image description here](https://github.com/rm3d0nc4/front-web-scrapping/blob/main/src/assets/images/netshoes-pagina-produto.png)
	- **Título**:  Camiseta DC Shoes Square Star Masculina - Preto
	- **Preço**: 64.99
	- **Imagem**: https://static.netshoes.com.br/produtos/camiseta-dc-shoes-square-star-masculina/06/PFI-3243-006/PFI-3243-006_zoom1.jpg?ts=1695613462&ims=544x
	- **Descrição**: Em modelagem oversized e com estampa exclusiva, a camiseta masculina DC Shoes Square Star leva a atitude do skate style ao seu visual. Além disso, é uma opção prática e confortável para aproveitar diferentes momentos, do dia a dia ao lazer. Garanta a sua!

## Solução

A solução construída consiste de dois módulos (backend e fronted) que atuam em conjunto, a fim de tornar a interação com o scrapper o mais intuitivo possível.
### Backend 
[repositório](https://github.com/rm3d0nc4/scrapping-api)

 O primeiro trata-se de uma **API** construída em Java utilizando Spring Boot para receber a URL do produto, fazer o web scrapping da página e devolver os dados em forma de um objeto (Json). Nela, há apenas um único endpoint (GET /get-product) que recebe a url do produto em um *query parameter* chamado **url**. A API foi publicada no [Render](https://render.com) e está disponível neste [link](https://netshoes-scrapping-api.onrender.com). Segue abaixo a url a ser utilizada para o srapping dos dados:


**Observação: a primeira chamada na url pode demorar um pouco mais para retornar o resultado. Nas próximas chamadas, o resultado deve ser quase instantâneo, a depender a conexão com internet** 

```
https://netshoes-scrapping-api.onrender.com/get-product?url{url-do-produto}
```
- Exemplo de requisição:
	- Url
		``https://netshoes-scrapping-api.onrender.com/get-product?url=https://www.netshoes.com.br/camiseta-forum-basica-masculina-laranja-E36-4167-042?sellerId=0&promoted=true``
	- Resposta:
```json
{
	"title":"Camiseta Forum Básica Masculina - Laranja",
	"price":99.99,
	"imageUrl":"https://static.netshoes.com.br/produtos/camiseta-forum-basica-masculina/42/E36-4167-042/E36-4167-042_zoom1.jpg?ts=1674140165&ims=544x",
	"description":"Confortáveis e descoladas as Camisetas Forum, trazem praticidade para emendar estações e ocasiões com modernidade. Elaboradas em malha algodão, ultramacia e irresistivelmente elegante, possuem modelagem regular, logo e acabamento prespontado. Versáteis, são daqueles must heve para todos os dias. Aposte!"
}
```
### Frontend 
[repositório](https://github.com/rm3d0nc4/front-web-scrapping)

Já o segundo módulo trata-se de uma interface frontend desenvolvida em [ReactJS](https://react.dev) para consumir a API e  fornecer uma interface amigável para que o usuário consiga visualizar as informações extraídas. O seu deploy foi feito dentro do próprio GitHub, através da ferramenta [GitHub Pages](https://pages.github.com) e está disponível neste [link](https://rm3d0nc4.github.io/front-web-scrapping/).

**Observação: a primeira chamada na url pode demorar um pouco mais para retornar o resultado. Nas próximas chamadas, o resultado deve ser quase instantâneo, a depender a conexão com internet**
![Página Inicial](https://github.com/rm3d0nc4/front-web-scrapping/blob/main/src/assets/images/pagina-inicial-web.png)
![Página Inicial](https://github.com/rm3d0nc4/front-web-scrapping/blob/main/src/assets/images/pagina-incial-web-resultado.png)
