let stocks = {
	Fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
	Liquids: ['Water', 'Milk', 'Ice'],
	Holders: ['Cone', 'Cup', 'Stick'],
	Toppings: ['Chocolate', 'Peanuts'],
};

let order = (Fruit_name, call_production) => {
	setTimeout(() => {
		console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
		call_production();
	}, 2000);
};

let production = () => {
	setTimeout(() => {
		console.log('Production has started.');
		setTimeout(() => {
			console.log('The fruit has been chopped.');
			setTimeout(() => {
				console.log(`${stocks.Liquids[1]} and ${stocks.Liquids[2]} was added.`);
			}, 1000);
			setTimeout(() => {
				console.log('The icecream is being blended');
				setTimeout(() => {
					console.log(`Ice cream was placed on a ${stocks.Holders[0]}`);
					setTimeout(() => {
						console.log(`${stocks.Toppings[0]} was added to the Ice cream!`);
						setTimeout(() => {
							console.log('The Ice cream has been completed.');
							console.log('\n Ice cream has been served!');
						}, 2000);
					}, 3000);
				}, 2000);
			}, 1000);
		}, 2000);
	}, 0);
};

order(0, production);
