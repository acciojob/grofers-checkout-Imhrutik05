const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

	// select all prices
	let prices = document.querySelectorAll(".price");

	// calculate sum
	let sum = 0;
	prices.forEach((cell) => {
		sum += Number(cell.textContent);
	})
	
	// create the new row
	let row = document.createElement("tr");
	row.innerHTML = `<tr><td>Total</td><td id="ans">${sum}</td></tr>`;

	// append the row to table
	const table = document.querySelector("table");
	table.appendChild(row);
	
  
};

getSumBtn.addEventListener("click", getSum);

