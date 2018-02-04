function Person(fullName, favColor){
	this.name= fullName;
	this.favoriteColor=favColor;
	this.greet = function(){
		console.log("Hello, I am "this.name + and my best color is "+this.color);
	}
}

module.exports= Person;