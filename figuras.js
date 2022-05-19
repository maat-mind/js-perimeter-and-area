console.group("Cálculo perímetro y área de figuras geométricas");

// Calculo del area y perímetro de un cuadrado con lados = ladoCuadrado
console.group("Cuadrado");

const ladoCuadrado = 15;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.log("El perímetro del cuadrado mide: " + perimetroCuadrado(ladoCuadrado) + "cm.");

console.log("El área del cuadrado mide: " + areaCuadrado(ladoCuadrado) + "cm^2.");

console.groupEnd();

// Area y perímetro de un triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm y " + ladoTriangulo2 + "cm, además su base mide: " + baseTriangulo + "cm, con una altura de: " + alturaTriangulo + " cm.");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
console.log("El perímetro del triángulo es: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + "cm.");

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log("El área del triángulo es: " + areaTriangulo(baseTriangulo, alturaTriangulo) + "cm^2.");

console.groupEnd();

// Area y perímetro de un círculo
console.group("Círculo");

const diametro = 10;
const pi = Math.PI;
const radio = diametro / 2;

console.log("El diámetro del círculo es de: " + diametro + "cm, por lo tanto su radio es de: " + radio + "cm.");

const perimetroCirculo = (diametro, pi) => diametro * pi;
console.log("El perímetro (circunferencia) del círculo es de: " + perimetroCirculo(diametro, pi) + "cm.");

const areaCirculo = (pi, radio) => pi * (radio * radio);
console.log("El área del círculo es: " + areaCirculo(pi, radio) + "cm^2.");

console.groupEnd();

console.groupEnd();