import axios from "axios";
import { BASE_URL } from "../config";
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";


export class TVShowAPI {
    static async fetchPopularTVShows() {
        const response = await axios.get(`${BASE_URL}/discover/tv`, {
            params: {
              include_adult: false,
              language: 'en-US',
              page: 1,
              sort_by: 'popularity.desc',
            },
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_BEARER_TOKEN}`,
              accept: 'application/json'
            }
          });
        return response.data.results;
    // return FAKE_POPULARS;
    }

    static async fetchRecommendations(tvShowId) {
      const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations`, {
          params: {
            include_adult: false,
            language: 'en-US',
            page: 1,
            sort_by: 'popularity.desc',
          },
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_BEARER_TOKEN}`,
            accept: 'application/json'
          }
        });
      return response.data.results;
      // return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}/search/tv`, {
      params: {
        query: title,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_BEARER_TOKEN}`,
        accept: 'application/json'
      }
    });
  return response.data.results;
  }
}