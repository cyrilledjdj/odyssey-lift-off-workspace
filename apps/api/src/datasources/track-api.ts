import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from '../environments/environment';

/**
 *  @class TrackApi
 */
export default class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.baseUrl;
  }

  /**
   *
   * @returns {Promise<any>}
   */
  getTracks() {
    return this.get('tracks');
  }

  /**
   *
   * @param trackId
   * @returns
   */
  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  /**
   *
   * @param trackId
   * @returns  {Promise<any>}
   */
  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  /**
   *
   * @param authorId
   * @returns {Promise<any>}
   */
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  /**
   *
   * @param moduleId
   * @returns {Promise<any>}
   */
  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }

  /**
   *
   * @param trackId
   * @returns {Promise<any>}
   */
  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}
