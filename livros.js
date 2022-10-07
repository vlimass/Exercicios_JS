/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log("CATEGORIZAR LIVROS-------");

const countBooksByCategory = () => {
    let stringValue = '';
    
    booksByCategory.forEach((category) => {
        stringValue += `> ${category.category}: ${category.books.length}\n`;
    })

    return stringValue;
}

const countAuthors = () => {
    let authors = [];

    for (let category of booksByCategory) {
        for(let book of category.books){ 
            if(authors.indexOf(book.author) === -1){
                authors.push(book.author)
            }
        }
    }

    return authors.length;
}

const showAuthorBooks = (author) => {
    let books = []; 
    let stringValue = `Livro(s) de ${author}:\n`;

    for (let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === author && books.indexOf(book.title) === -1){
                books.push(book.title);
            }
        }
    }
    
    for(let book of books){
        stringValue += `> ${book}\n`;
    }

    return stringValue;
}

console.log(`Número de categorias: ${booksByCategory.length}`);
console.log(`Número de livros por categoria:\n${countBooksByCategory()}`);
console.log(`Número de autores: ${countAuthors()}`);
console.log(showAuthorBooks('Stephen R. Covey'));

