import { Component, OnInit } from '@angular/core';
import {Audio} from "../../core/models/audio";
import {AudioService} from "./services/audio.service";
import {catchError, finalize, of} from "rxjs";

@Component({
  selector: 'app-audio-table',
  templateUrl: './audio-table.component.html',
  styleUrls: ['./audio-table.component.scss']
})
export class AudioTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'fileName'];
  audios: Audio[] = [];
  selectedAudio: Audio | null = null;

  isLoading = false;
  errorMessage = '';

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    this.getAudios();
  }

  getAudios(): void {
    this.audioService.getAudios().subscribe((data) => this.audios = data);

    this.audioService.getAudios()
      .pipe(
        catchError(error => {
          console.error(error);
          this.errorMessage = 'Failed to load audio list. Try again later.';
          return of([]);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data) => {
        this.audios = data

        console.log(data);
      });
  }

  selectAudio(audio: Audio): void {
    this.selectedAudio = audio;
  }
}
