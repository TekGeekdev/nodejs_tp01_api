const urlParams = new URLSearchParams(window.location.search)
const idMovie = urlParams.get('movie')

const main = document.querySelector("main");
const contentPage = document.querySelector(".content");


const title = document.querySelector("#titleMovie");
const img = document.querySelector("#imgMovie");
const resume = document.querySelector("#movieResume");
const countryMovie = document.querySelector("#movieCountry");
const dateRelease = document.querySelector("#dateRelase");
const movieLink = document.querySelector("#movieLink");
const runtime = document.querySelector("#movieRuntime");
const popularity = document.querySelector("#moviePopularity");
const budget = document.querySelector("#movieBudget");
const income = document.querySelector("#movieIncone");

const compagnyName = document.querySelector("#compagnyName");
const compagnyCountry = document.querySelector("#compagnyCountry");

fetch(`/data/${idMovie}`)
    .then(res=> res.json())
    .then(data =>{
        title.textContent = data.original_title
        img.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`
        resume.textContent = data.overview	
        countryMovie.textContent = data.origin_country	
        dateRelease.textContent = data.release_date		
        movieLink.href = data.homepage		
        runtime.textContent = `${data.runtime} minuts`
        popularity.textContent = data.popularity		
        budget.textContent = `${data.budget.toLocaleString('en-US')} $`	
        income.textContent = `${data.revenue.toLocaleString('en-US')} $`	
        compagnyName.textContent = data.production_companies[0].name	
        compagnyCountry.textContent = data.production_companies[0].origin_country
    })
    .catch(err => {
        contentPage.style.display ="none"
        const p = document.createElement('p');
        p.textContent = "No data scrapped in server."
        main.appendChild(p)
    })