const javascript = {};
Object.defineProperty(javascript, "name", {
    enumerable: true,
    //Habilita as enumerações das propriedas dos objetos (enumerable).
    value: "JavaScript"
});
console.log(javascript);
console.log(Object.keys(javascript));
console.log(Object.values(javascript));
console.log(Object.entries(javascript));
