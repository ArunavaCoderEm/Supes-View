import { API_CONFIG } from "@/Config/config";
import { Superhero } from "@/Types/types";
import axios from "axios";

class SuperheroApi {
  private createURL(endpoint: string, params: any[]): string {

    let url = `${endpoint}/${API_CONFIG.API_KEY}`;

    console.log(params);

    params.forEach((param: any) => {
      const key = Object.keys(param)[0];
      if(key === "id") {
        url += `/${param[key]}`
      } else {
        url += `/${key}/${param[key]}`
      }
    });

    return url;
  }

  private async fetchSupes<T>(url: string): Promise<T> {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`Error happened with code ${response.status}`);
    }

    const returnResponse = response?.data;

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

  public async getSuperHeroSearchResult() {}
}

export const newSuperheroApi = new SuperheroApi();
