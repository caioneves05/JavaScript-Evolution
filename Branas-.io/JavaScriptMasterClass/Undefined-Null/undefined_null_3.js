const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
book.available = undefined;
console.log(book);
console.log("available" in book);

//Não atribua para undefined ou null com a inteção de apagar uma propriedade.
