var Fortune = {
	cookies: [
		"Conquer your fears or they will conquer you.",
		"Rivers need springs.",
		"Do not fear what you don't know.",
		"You will have a pleasant surprise.",
		"Whenever possible, keep it simple."
	],
	getFortune: function () {
		var idx = Math.floor(Math.random() * Fortune.cookies.length);
		return Fortune.cookies[idx].toLowerCase();
	}
}

exports.getFortune = Fortune.getFortune;
