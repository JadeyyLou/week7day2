const fs = require('fs');

// create fn
const addMovie = (movieObj) => {
	try {
		const stringObj = JSON.stringify(movieObj);
		fs.writeFileSync('./storage.json', stringObj);
	} catch (error) {
		console.log(error)
	}
};
// this adds movie storage to json file

// read fn
const listMovies = () =>{
	try {
		const jsonList = fs.readFileSync('storage.json');
		const listParser = JSON.parse(jsonList);
		console.log(listParser)
	} catch (error) {
		console.log(error)
	}
}
// nothing in these parameters because its just reading data from fn 1




module.exports = { addMovie, listMovies }