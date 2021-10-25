import { Injectable } from '@nestjs/common';
import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from '../../environments/environment';

@Injectable()
export class TrackService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.baseUrl;
  }

  /**
   *
   * @returns {Promise<any>}
   */
  async getTracks() {
    return this.get('tracks');
  }

  /**
   *
   * @param trackId
   * @returns
   */
  async getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  /**
   *
   * @param trackId
   * @returns  {Promise<any>}
   */
  async getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  /**
   *
   * @param authorId
   * @returns {Promise<any>}
   */
  async getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  /**
   *
   * @param moduleId
   * @returns {Promise<any>}
   */
  async getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }

  /**
   *
   * @param trackId
   * @returns {Promise<any>}
   */
  async incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}
