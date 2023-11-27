var lenguajes = ['Python', 'Java', 'C#', 'JavaScript'];

function imprimeForbasico(lenguajes) {
  var salida = '';
  for (var i = 0; i < lenguajes.length; i++) {
    salida += lenguajes[i] + '\n';
  }
  alert(salida);
}

function imprimeFor(lenguajes) {
  var salida = '';
  for (var i = 0; i < lenguajes.length; i++) {
    salida += lenguajes[i] + ' se encuentra en el índice ' + i + '\n';
  }
  alert(salida);
}

function imprimeForechbasico(lenguajes) {
  var salida = '';
  lenguajes.forEach(function (element) {
    salida += element + '\n';
  });
  alert(salida);
}

function imprimeForech(lenguajes) {
  var salida = '';
  lenguajes.forEach(function (valor, indice) {
    salida += valor + ' se encuentra en el índice ' + indice + '\n';
  });
  alert(salida);
}

function imprimeTamaño(lenguajes) {
  var salida = lenguajes.length;
  alert(salida);
}

function imprimeElemento(lenguajes) {
  var posicion = prompt('Ingrese la posición del elemento:');
  posicion = parseInt(posicion);

  if (isNaN(posicion)) {
    alert('Posición inválida. Ingrese un número válido.');
    return;
  }

  if (posicion >= 0 && posicion < lenguajes.length) {
    alert("El elemento en la posición " + posicion + " es: " + lenguajes[posicion]);
  } else {
    alert("El elemento en la posición " + posicion + " no existe.");
  }
}

function mostrarMenu(){
  let salida = ''
  let elemento = prompt('Ingresa un nuevo lenguaje de programacion')
  lenguajes.push(elemento)
  salida = 'El lenguaje de programación ' + elemento + ' a sido agregado al arreglo '
}

function eliminaElemento(){
  let salida = ''
  let elemento = prompt("Cual es el lenguaje de programacion que deseas elimianar")
  var indice = lenguajes.indexOf(elemento)
  if(indice !== -1){
    lenguajes.splice((indice,1))
    salida = 'Lenguaje eliminado' + elemento
  }else salida = 'El lenguaje no se ha encontrado'
  alert(salida)
  }

function mostrarMenu() {
  var opcion = prompt('Seleccione una opción:' +
    '\n1. Imprimir lenguajes con "for" básico.' +
    '\n2. Imprimir lenguajes con "for" y su índice.' +
    '\n3. Imprimir lenguajes con "forEach" básico.' +
    '\n4. Imprimir lenguajes con "forEach" y su índice.' +
    '\n5. Tamaño del arreglo.' +
    '\n6. Recuperar elemento del arreglo' +
    '\nIngrese el número de la opción:');

  switch (opcion) {
    case '1':
      imprimeForbasico(lenguajes);
      break;
    case '2':
      imprimeFor(lenguajes);
      break;
    case '3':
      imprimeForechbasico(lenguajes);
      break;
    case '4':
      imprimeForech(lenguajes);
      break;
    case '5':
      imprimeTamaño(lenguajes);
      break;
    case '6':
      imprimeElemento(lenguajes);
      break;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
  }
}

mostrarMenu();