const input = document.querySelector(".search");
const list = document.querySelectorAll("li");

/*
const searchEngine = (e) => {
	const text = e.target.value.toLowerCase();

	list.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

input.addEventListener("keyup", searchEngine);
*/

//solution with RegExp
const filterList = () => {
	list.forEach((item) => {
		const match = new RegExp(input.value, "i").test(item.textContent);

		if (!match) {
			item.style.display = "none";
		} else {
			item.style.display = "block";
		}
	});
};

input.addEventListener("keyup", filterList);
