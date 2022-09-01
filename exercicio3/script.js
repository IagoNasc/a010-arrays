const Array1 = [22, 01, 03, 02, 09, 11]
const Array2 = ['Boa tarde', 'Tudo bem?']
const Array3 = [22, 01, 03, 'Boa tarde', true]

//Cópias
const Array1Cópia = (Array1.slice())
const Array2Cópia = (Array2.slice())
const Array3Cópia = (Array3.slice())

Array1Cópia.push(1)
Array2Cópia.splice(1, 1)
Array3Cópia.splice(1, 1)



console.log(Array1);
console.log(Array1Cópia);
console.log(Array2);
console.log(Array2Cópia);
console.log(Array3);
console.log(Array3Cópia);