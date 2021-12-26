export class Fetch {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    try {
      const response = await fetch(this.baseURL + endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
