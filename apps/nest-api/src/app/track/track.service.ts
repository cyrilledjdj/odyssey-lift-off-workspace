import { HttpService, Injectable } from '@nestjs/common';
import { environment } from '../../environments/environment';

@Injectable()
export class TrackService {
  private baseUrl = environment.baseUrl;
  constructor(private readonly httpService: HttpService) {}
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

  private async get(location) {
    const { data } = await this.httpService
      .get(`${this.baseUrl}${location}`)
      .toPromise();

    return data;
  }

  private async patch(location) {
    const { data } = await this.httpService
      .patch(`${this.baseUrl}${location}`)
      .toPromise();
    return data;
  }
}
