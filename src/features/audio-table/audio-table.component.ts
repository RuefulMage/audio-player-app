import { Component, OnInit } from '@angular/core';
import {Audio} from "../../core/models/audio";
import {AudioService} from "./services/audio.service";
import {catchError, finalize, of} from "rxjs";

const DEFAULT_COLUMNS = ['id', 'name', 'fileName'];
const COLUMN_RULES = [
  { breakpoint: 700, columns: ['id', 'name'] }
]

@Component({
  selector: 'app-audio-table',
  templateUrl: './audio-table.component.html',
  styleUrls: ['./audio-table.component.scss']
})
export class AudioTableComponent implements OnInit {
  displayedColumns: string[] = [...DEFAULT_COLUMNS];
  defaultColumns: string[] = [...DEFAULT_COLUMNS];
  columnRules = structuredClone(COLUMN_RULES);
  audios: Audio[] = [];
  selectedAudio: Audio | null = null;

  isLoading = false;
  errorMessage = '';

  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    this.getAudios();
  }

  getAudios(): void {
    this.isLoading = true;

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
