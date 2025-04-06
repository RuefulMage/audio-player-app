import {Audio} from "../models/audio";
import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const audios: Audio[] = [
      {
        id: 1,
        name: 'Kangaroo MusiQue - The Neverwritten Role Playing Game',
        url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
      },
      {
        id: 2,
        name: 'Sevish',
        url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3'
      },
      {
        id: 3,
        name: 'Ateapill',
        url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg'
      },
      {
        id: 4,
        name: 'Engine',
        url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/fx/engine-1.ogg3'
      }
    ];

    return { audios };
  }
}
