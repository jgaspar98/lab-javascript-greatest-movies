// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (array) => {
    let directorsName = array.map((item) => item.director);
    return directorsName;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const spielbergsDramas = array.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergsDramas.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (array) =>{
    if(array.length === 0){
        return 0;
    }
    let avarege = array.reduce((accumulator, currentValue)=>{
        if(currentValue.rate===undefined){
            return  accumulator;
        } else {
            return accumulator + currentValue.rate;
        }
    }, 0);
    const rates = avarege / array.length;
    return Number((rates).toFixed(2));
} 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    const dramas = array.filter((movie) =>{
         return movie.genre.includes('Drama');
        });
    return ratesAverage(dramas);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    return movies.sort((movie1, movie2)=>{
        if(movie1.year === movie2.year){
            //order by title
            return movie1.title.localeCompare(movie2.title);
        } else {
            return movie1.year - movie2.year;
        }
    }).map((item)=>{
        return item;
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie) {
    let moviesCopy = [...movie];
    let orderedMovies = moviesCopy.sort((movie1, movie2)=>{
        return movie1.title.localeCompare(movie2.title);
    }).slice(0, 20);

    return orderedMovies.map(movie => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
