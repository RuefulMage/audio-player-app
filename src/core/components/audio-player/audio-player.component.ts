import { Component, Input } from '@angular/core';
import { Audio } from '../../models/audio';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent {
  @Input() selectedAudio: Audio | null = null;
  @Input() autoplay: Boolean = false;
}
