"use strict";
//Find in array: sum, min and max, replace min and max - create custom functions.

let arraNamber = [1, 3, 5, 9, 15, 66];

showArray(arraNamber);

document.write('<br>');
reversArray();

document.write('<br>');
sumArray();

document.write('<br>');
getMaxValue()

document.write('<br>');
getMinValue()

function showArray(showArray) {
	let x = "";

	for(let i = 0; i < showArray.length; i++) {

		x += showArray[i] + ' ';
	}

	document.write(`Числовой массив: ${x}`);
}

function reversArray() {
	arraNamber.reverse();
	let x = "";

	arraNamber.forEach(function(item, index, arr) {
		x += item + ' ';
	});

	document.write(`Меняем местами max min: ${x}`);
}

function sumArray() {
	let sum = 0;

	for(let i = 0; i < arraNamber.length; i++) {

		sum += arraNamber[i];
	}

	document.write(`Сумма чисел массива: ${sum}`);
}

function getMaxValue() {
	let max = arraNamber[0];

	for(let i = 0; i < arraNamber.length; i++) {
		if(max < arraNamber[i]) max = arraNamber[i];	
	}

	document.write(`Максимальное число в массиве: ${max}`);
}

function getMinValue() {
	let min = arraNamber[0];

	for(let i = 0; i < arraNamber.length; i++) {
		if(min > arraNamber[i]) min = arraNamber[i];	
	}

	document.write(`Минимальное число в массиве: ${min}`);
}



//Create function which will return function with callback in arguments
document.write('<br>');
document.write('<br>');
sumToNambers(numberSquared, 3, 4);

function sumToNambers(callback, value1=0, value2 = 0) {
	let sum = value1 + value2;
	callback(sum);
}

function numberSquared(sum) {
	let squared = sum * 2;
	document.write(`Выполнение работы функции, которая вызванная колбэком: ${squared}`);
}


// Create a function that will replace all number dividing three with ‘foo’, 
//dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.

document.write('<br>');
document.write('<br>');

let arr = [1, 4, 9, 20, 28, 21, 34, 332]

showArray(arr);

document.write('<br>');
replace();

function replace() {
	let x = "";

	for(let i = 0; i < arr.length; i++) {
		if(arr[i] % 3 === 0  &&  arr[i] % 7 === 0) { 
			arr[i] = 'foobar';
		} else if (arr[i] % 3 === 0) {
			arr[i] = 'foo';
		} else if (arr[i] % 7 === 0) {
			arr[i] = 'bar';
		}

		x += arr[i] + ' ';
	}

	document.write(`Замена элементов массива - строками: ${x}`);
}



//Create function with 2 string params. It must check 
//if letters in the first correspond to the number of matches in second and return %
document.write('<br>');
document.write('<br>');

function matchLetters(form) {
	let str1, str2, result, sum;

	result = 0;
	str1 = form.string1.value.toLowerCase().trim();
	str2 = form.string2.value.toLowerCase().trim();

	for(let i = 0; i < str1.length; i++) {

		for(let j = 0; j < str2.length; j++) {
			if(str1.charAt(i) == str2.charAt(j)) {
				++result;
			}
		}

	}

	result = result/(str1.length + str2.length)*100
	if(str1 == str2) {
		result = 100;
	}

	alert(`Совпадение слов: ${result}%`);
}



