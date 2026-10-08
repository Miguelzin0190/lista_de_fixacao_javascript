const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// Os resultados são diferentes porque || entende 0 um valor false e usa 10 como alternativa,
// e o ?? apenas retorna 10 se o valor da quantidade for null.