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

const areaTriangulo = (base, altura) => ((base * altura) / 2);
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

// calcular cuadrado en html

function calcularCuadrado() {
  // recibe el valor lado del input en html
  const lado = parseInt(document.getElementById("lado-cuadrado").value);
  // ejecuta las funciones para el cálculo del perímetro y área del cuadrado
  const perimetro = perimetroCuadrado(lado);
  const area = areaCuadrado(lado);

  // regresa a dos input diferentes el resultado de las funciones
  document.getElementById("perimetro-cuadrado").value = perimetro;
  document.getElementById("area-cuadrado").value = area;
}

// calcular triángulo en html

function calcularTriangulo() {
  // valores
  const lado1 = parseInt(document.getElementById("lado1").value);
  const lado2 = parseInt(document.getElementById("lado2").value);
  const base = parseInt(document.getElementById("base").value);
  const altura = parseInt(document.getElementById("altura").value);
  // funciones
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  const area = areaTriangulo(base, altura);
  // resultado
  document.getElementById("perimetro-triangulo").value = perimetro;
  document.getElementById("area-triangulo").value = area;
}

// calcular triángulo en html

function calcularCirculo() {
  // valores
  const diametro = parseInt(document.getElementById("diametro").value);
  const radio = diametro / 2;
  const pi = Math.PI;
  // funciones
  const perimetro = perimetroCirculo(diametro, pi);
  const area = areaCirculo(pi, radio);
  // resultado
  document.getElementById("perimetro-circulo").value = perimetro;
  document.getElementById("area-circulo").value = area;
}
