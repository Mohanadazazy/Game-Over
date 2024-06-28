import { UI } from "./UI.js";
export class Details{
    constructor(id){
        this.getDetails(id) 
        console.log(id);
        this.ui = new UI();
        
         
    }
    async getDetails(id){
        // let gameid = id;
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
	        method: 'GET',
	        headers: {
		        'x-rapidapi-key': '1ed3c1db42mshd4f224daba4a894p154a85jsn28371c3d0b00',
		        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    this.ui.displayDetails(result);
    }
}
// const det = new Details();