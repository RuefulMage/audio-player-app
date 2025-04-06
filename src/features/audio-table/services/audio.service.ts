import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Audio } from '../../../core/models/audio';

const AUDIO_LIST_URL = 'api/audios';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor(private http: HttpClient) {}

  getAudios(): Observable<Audio[]> {
    return this.http.get<Audio[]>(AUDIO_LIST_URL);
  }
}
