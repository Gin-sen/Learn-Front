import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-office-atmosphere',
  templateUrl: './office-atmosphere.component.html',
  styleUrls: ['./office-atmosphere.component.scss']
})
export class OfficeAtmosphereComponent implements OnInit {

  constructor() { }

  audioToTime(audio: HTMLAudioElement): string {
    // tslint:disable-next-line:no-bitwise
    const currentTime = audio.currentTime | 0;
    const minutes: any = '0' + Math.floor(currentTime / 60);
    const seconds = '0' + (currentTime - minutes * 60);
    const cur = minutes.substr(-2) + ':' + seconds.substr(-2);

    return (cur);
  }

  playPause(): void {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    const ppButton = document.getElementsByClassName('pp_button')[0] as HTMLElement;

    if (audio != null && audio.paused) {
      audio.play();
      ppButton.innerHTML = 'Mettre fin au test';
    }
    else {
      audio.pause();
      console.log(this.audioToTime(audio));
      const myForm = document.getElementsByClassName('my_form')[0] as HTMLElement;
      console.log(myForm);
      alert('Vous avez écouter le bruit pendant ' + this.audioToTime(audio) + '  Félicitation !');
      audio.currentTime = 0;
      ppButton.style.display = 'none';
      myForm.style.display = 'block';
    }
    // tslint:disable-next-line:only-arrow-functions
    audio.onended = function(): void {
      alert('Vous êtes arrivé au bout de l\'exercice Félicitation !');
    };
  }

  ngOnInit(): void {

  }

}
