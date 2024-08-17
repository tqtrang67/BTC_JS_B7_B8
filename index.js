let arrayNumber = [];

function submit() {
	let number = document.getElementById("txt_number").value * 1;
	arrayNumber.push(number);

	let tongSoDuong = 0;
	let count = 0;
	let min = arrayNumber[0];
	let minPositive = null;
	let lastEven = -1;

	for (let i = 0; i < arrayNumber.length; i++) {
		let value = arrayNumber[i];
		// 1. Tính tổng số dương
		if (value > 0) {
			tongSoDuong += value;
		}
		// 2. Đếm số dương trong mảng
		if (value > 0) {
			count++;
		}
		// 3. Tìm số nhỏ nhất trong mảng
		if (value < min) {
			min = value;
		}
		// 4. Tìm số dương nhỏ nhất trong mảng
		if (value > 0 && (minPositive === null || value < minPositive)) {
			minPositive = value;
		}
		// 5. Tìm số chẵn cuối cùng trong mảng
		if (value % 2 === 0) {
			lastEven = value;
		}
	}

	// 7. Sắp xếp tăng dần
	let sortedArray = [...arrayNumber].sort(function (a, b) {
		return a - b;
	});

	// 8. Tìm số nguyên tố đầu tiên trong mảng
	function isPrime(num) {
		if (num <= 1) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) return false;
		}
		return true;
	}
	let firstPrime = -1;
	for (let i = 0; i < arrayNumber.length; i++) {
		if (isPrime(arrayNumber[i])) {
			firstPrime = arrayNumber[i];
			break;
		}
	}

	// 10. So sánh số lượng số dương và số âm
	let positiveCount = 0;
	let negativeCount = 0;
	for (let i = 0; i < arrayNumber.length; i++) {
		if (arrayNumber[i] > 0) {
			positiveCount++;
		} else if (arrayNumber[i] < 0) {
			negativeCount++;
		}
	}
	let compare =
		positiveCount > negativeCount
			? "Số dương nhiều hơn"
			: positiveCount < negativeCount
			? "Số âm nhiều hơn"
			: "Số lượng bằng nhau";

	let message = `
        <h2>Mảng: ${arrayNumber}</h2>
        <h2>Tổng số dương: ${tongSoDuong}</h2>
        <h2>Số lượng số dương trong mảng: ${count}</h2>
        <h2>Số nhỏ nhất trong mảng: ${min}</h2>	
        <h2>Số dương nhỏ nhất trong mảng: ${minPositive}</h2>
        <h2>Số chẵn cuối cùng trong mảng: ${lastEven}</h2>
        <h2>Sắp xếp tăng dần: ${sortedArray}</h2>
        <h2>Số nguyên tố đầu tiên trong mảng: ${firstPrime}</h2>
        <h2>Kết quả so sánh số lượng số dương và số âm: ${compare}</h2>
    `;
	document.querySelector("#result").innerHTML = message;
}

// 6. Đổi chỗ
function swapPositions() {
	let position1 = document.getElementById("position1").value * 1;
	let position2 = document.getElementById("position2").value * 1;

	if (
		position1 >= 0 &&
		position2 >= 0 &&
		position1 < arrayNumber.length &&
		position2 < arrayNumber.length
	) {
		let temp = arrayNumber[position1];
		arrayNumber[position1] = arrayNumber[position2];
		arrayNumber[position2] = temp;

		let message = `<h2>Mảng sau khi đổi chỗ phần tử tại vị trí ${position1} và ${position2}: ${arrayNumber}</h2>`;
		document.querySelector("#result").innerHTML = message;
	}
}

// 9. Số lượng số nguyên trong máng
function addRealArray() {
	let realArrayInput = document.getElementById("realArray").value;
	let realArray = realArrayInput.split(",").map(Number);
	let integerCount = 0;

	for (let i = 0; i < realArray.length; i++) {
		if (Number.isInteger(realArray[i])) {
			integerCount++;
		}
	}

	let message = `<h2>Số lượng số nguyên trong mảng số thực: ${integerCount}</h2>`;
	document.querySelector("#result").innerHTML = message;
}
