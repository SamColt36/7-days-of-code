
# 🚀 Projeto: Página de Agradecimento
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)![](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
<img title="a Node" alt="Banner NodeJs" src="./docs/images/_banner.png"
style="max-width: 600px">   

É muito importante sempre praticar nossos conhecimentos após aprender conceitos novos em um curso ou por conta própria, colocando a mão na massa mesmo! Uma pergunta que você provavelmente já se fez algum dia é: "Tá, terminei esse curso, e agora? O que eu faço?". Por esse motivo eu trouxe esse desafio, para você colocar em prática tudo o que você sabe de HTML e CSS até agora! Vamos abordar muitos conceitos importantes, como Flexbox, Grid, entre muitos outros. Então, bora começar?

## 🌐 Visão Geral

O escopo do projeto é o seguinte: uma empresa de TI quer desenvolver uma página destinada a novas contratações e contratou você para desenvolvê-la. Para isso, te enviaram um layout no Figma. O Figma é um software que muitos designers utilizam para criar protótipos. E a partir desse protótipo que eu vou disponibilizar, você vai transformá-lo em código e dar vida real ao projeto! Beleza?

Não se preocupe, porque você não vai precisar editar nada no Figma ou nem mesmo baixar o aplicativo. Basta acessar [esse link](https://www.figma.com/file/mm3MLozvUDGhDRTxSLlGL5/7daysOfCode-HTML-CSS?type=design&node-id=0-1&mode=design) e você já vai conseguir visualizar o layout! Lá, você também poderá visualizar todos os valores para espaçamento, cores do projeto, tamanhos de texto, e muito mais!

Agora que você já abriu o Figma do projeto, você conseguiu ver o que a empresa espera que você entregue ao final dos próximos 7 dias.


## 📸 Capturas de tela
<img  src="./docs/images/screenshot.png"  style="width: 500px">

## 📁 Clonar repositório

Clone este repositório via Bash, usando:

✅ HTTPS:

```bash
git clone https://github.com/SamColt36/7-days-of-code
```

✅ SSH:

```bash
git clone git@github.com:SamColt36/7-days-of-code
```

✅ GitHub CLI:

```bash
gh repo clone SamColt36/7-days-of-code
```

✅ Download ZIP.

## 📶 Status

O projeto encontra-se em:

> Finalizado

## 🌐 Acessar o projeto

Acesse a última versão disponível pelo [link](https://7-days-of-code-kappa.vercel.app/)🔗.

## 📂 Estrutura de diretórios

Foi pensada uma estrutura que segue o seguinte diagrama. Os arquivos compilados por padrão vão para o diretório `docs/`.

    -docs/
    ---images/
    -src/
    ---pages/
    ---styles/
    ---scripts/
    -*.config.js
    -README.md
    -LICENSE
    -.gitignore

## 🔧 Instalação

O projeto utiliza o _webpack_ como empacotador de códigos. O _Webpack_ nada mais é do que um empacotador de módulos/códigos. Seu grande diferencial é que ele foi criado para juntar arquivos de JavaScript que são utilizados dentro de um navegador. Sua principal utilidade é para projetos voltados para web focados em módulos de sua aplicação.

Para fazer a instalação das dependências usadas nesse projeto, tais como: _webpack_ e o _tailwindcss_, é necessário ter o NodeJS instalado. Até a data atual, esse último pode ser obtido através do link:

> [Node.js — Download Node.js® (nodejs.org)](https://nodejs.org/en/download)

Para obter as referências das dependências usadas o arquivo _package.json_ pode ser usado, e para mais detalhes use o _package-lock.json_, ambos na raiz do projeto.

_Foi usada a sintaxe do CJS nos quando aos arquivos de configuração._

## 🛠️ Abrir e rodar

Após as devidas instalações e configurações presentes nos arquivos `*.config.js`, caso queira alterar o projeto é necessário recompilar os arquivos para gerar uma nova saída (por _default_ no diretório `docs/`). Pensando nisso, o arquivo _package.json_ conta com dois _scripts_:

```json
"scripts": {
	"build": "webpack --config webpack.config.js",
	"watch": "webpack --watch"
},
```

- **build**: Apenas compila e gera as saídas
- **watch**: Assiste as mudanças no código e compila.

Por fim e não menos importante, rode no terminal um desses dois _scripts_ usando:

```bash
$ npm run build
```

ou

```bash
$ npm run watch
```

## 👥 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE ou acesse [MIT License (mit-license.org)](https://mit-license.org/) para obter detalhes.
