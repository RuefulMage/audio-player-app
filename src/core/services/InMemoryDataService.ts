import { Audio } from '../models/audio';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOCK_AUDIOS } from '../constants/audios';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const audios: Audio[] = structuredClone(MOCK_AUDIOS);

    return { audios };
  }
}
