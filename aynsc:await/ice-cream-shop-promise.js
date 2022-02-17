let stocks = {
	Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
	Liquids: ['Water', 'Milk', 'Ice'],
	Holders: ['Cone', 'Cup', 'Stick'],
	Toppings: ['Chocolate', 'Peanuts'],
};

let isOpen = true;

const order = (time, work) => {
	return new Promise((resolve, reject) => {
		if (isOpen) {
			setTimeout(() => {
				resolve(work());
			}, time);
		} else {
			reject(console.log('The shop is closed'));
		}
	});
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected!`))
  .then(() => order(0000, () => console.log('Production has started!')))
	.then(() => order(2000, () => console.log(`${stocks.Fruits[0]} has been chopped!`)))
  .then(() => order(1000, () => console.log(`Adding ${stocks.Liquids[0]} and ${stocks.Liquids[2]}`)))
  .then(() => order(1000, () => console.log('The Ice cream is currently being blended!')))
  .then(() => order(2000, () => console.log(`Adding the Ice cream to a ${stocks.Holders[2]}`)))
  .then(() => order(3000, () => console.log(`${stocks.Toppings[0]} was added to the Ice cream!`)))
  .then(() => order(1000, () => console.log('Ice cream is ready! -- Enjoy!')));



	