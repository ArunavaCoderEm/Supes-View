// import { newSuperheroApi } from "@/Api/Superhero";

// import { FetchRandomSupesN } from "@/Hooks/FetchSuperHeroDetails";


// export async function testGetSuperHeroDetail() {
//     try {
//         const superheroId = 30; 
//         const superhero = await newSuperheroApi.getSuperHeroDetailbyId(superheroId);
//         console.log(superhero); 
//     } catch (error) {
//         console.error("Error fetching superhero details: ", error);
//     }
// }


// export async function testGetSearchSuperHeroDetail() {
//     try {
//         const search = "Ant Man"; 
//         const superhero = await newSuperheroApi.getSuperHeroSearchResult(search);
//         console.log(superhero); 
//     } catch (error) {
//         console.error("Error fetching superhero details: ", error);
//     }
// }


// export async function testgetSuperHeroIdMorehResult() {
//     try {
//         const search = [70, ["appearance"]]; 
//         const superhero = await newSuperheroApi.getSuperHeroIdMorehResult(search);
//         console.log(superhero); 
//     } catch (error) {
//         console.error("Error fetching superhero details: ", error);
//     }
// }

// testgetSuperHeroIdMorehResult();

// export async function getrandomSuperhero() {
//     try {
//         const superhero = await newSuperheroApi.getNRandomSupes(10);
//         console.log(superhero.length); 
//     } catch (error) {
//         console.error("Error fetching superhero details: ", error);
//     }
// }

// getrandomSuperhero();

// const res = FetchRandomSupesN(2);

// console.log(res);