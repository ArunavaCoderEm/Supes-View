import { API_CONFIG } from "@/Config/config";
import { searchRes, Superhero, SuperheroStats } from "@/Types/types";
import axios from "axios";

class SuperheroApi {

  private createURL(endpoint: string, params: any[]): string {

    let url = `${endpoint}/${API_CONFIG.API_KEY}`;

    params.forEach((param: any) => {
      const key = Object.keys(param)[0];
      if (key === "id") {
        if (Array.isArray(param[key])) {
          url += `/${param[key][0]}`
          param[key][1].map((par: any) => {
            url += `/${par}`
          })
        } else {
          url += `/${param[key]}`;
        }
      } else {
        url += `/${key}/${param[key]}`;
      }
    });

    return url;
  }

  private async fetchSupes<T>(url: string): Promise<T> {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const response = await axios.get(proxyUrl);
    if (response.status !== 200) {
      throw new Error(`Error happened with code ${response.status}`);
    }
    const returnResponse = response.data;
    return returnResponse;
  }

  public async getSuperHeroDetailbyId(id: number): Promise<Superhero> {

    const url = this.createURL(`${API_CONFIG.BASE_URL}`, [
      {
        id: id,
      },
    ]);

    const response: Promise<Superhero> = this.fetchSupes<Superhero>(url);

    return response;
  }

  public async getSuperHeroSearchResult(search: string): Promise<Superhero[]> {

    const newSearch = search.split(" ");

    const searchPar = newSearch.join('');

    const url = this.createURL(`${API_CONFIG.BASE_URL}`, [
      {
        search: searchPar,
      },
    ]);

    const response: searchRes = await this.fetchSupes<searchRes>(url);

    const returnResponse = response?.results;
  
    return returnResponse;
  }

  public async getSuperHeroIdMorehResult(searchPars: (number | string[])[]): Promise<SuperheroStats> {

    const url = this.createURL(`${API_CONFIG.BASE_URL}`, [
      {
        id: searchPars,
      },
    ]);

    console.log(url)

    const response: SuperheroStats = await this.fetchSupes<SuperheroStats>(url);
  
    return response;
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public async getNRandomSupes(n: number): Promise<Superhero[]> {

    let SupesRandomData: Superhero[] = []

    const id = this.getRandomNumber(60, 80);

    for (let i = 0; i < n; i++) {
      const response = await this.getSuperHeroDetailbyId(id+i);

      SupesRandomData.push(response);
    }

  
    return SupesRandomData;
  }

}
  

export const newSuperheroApi = new SuperheroApi();
