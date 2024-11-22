import { newSuperheroApi } from "@/Api/Superhero";
import { API_CONFIG } from "@/Config/config";


async function testGetSuperHeroDetail() {
    try {
        const superheroId = 30; 
        const superhero = await newSuperheroApi.getSuperHeroDetailbyId(superheroId);
        console.log(superhero); 
    } catch (error) {
        console.error("Error fetching superhero details: ", error);
    }
}

testGetSuperHeroDetail();

async function testGetSearchSuperHeroDetail() {
    try {
        const search = "Ant Man"; 
        const superhero = await newSuperheroApi.getSuperHeroSearchResult(search);
        console.log(superhero); 
    } catch (error) {
        console.error("Error fetching superhero details: ", error);
    }
}

testGetSearchSuperHeroDetail();

// const apikey = API_CONFIG.API_KEY;

// console.log(apikey); 