import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Audio } from '@core/models/audio';
import { MOCK_AUDIOS } from '@core/constants/audios';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const audios: Audio[] = structuredClone(MOCK_AUDIOS);

    return { audios };
  }
}
