import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from '../environments/environment';

export default class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.baseUrl;
  }

  getTracks() {
    return this.get('tracks');
  }
  getAuthor(authorId) {
    return this.get(`author/${authorId}`)
  }
}
