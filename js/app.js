(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [
	{
		name: 'Zahed Shareef',
		price: 24.43,
		description: 'Hello',
		canPurchase: true,
		soldOut: false,
		images: [
		{
			full: 'abc.jpg',
			thumb: 'abc-thumb.jpg'
		}

		]
	},
	
	{
		name: 'Java Training',
		price: 54,
		description: 'Essential Java Training',
		canPurchase: true,
		soldOut: false,
	}
	]
})();
