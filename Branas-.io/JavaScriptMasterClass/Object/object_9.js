const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English",
    available: true
};
for (let key in book) {
    //percorrendo propriedades desse objeto.
    console.log(book[key]);
}
