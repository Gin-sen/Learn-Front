import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-office-atmosphere',
  templateUrl: './office-atmosphere.component.html',
  styleUrls: ['./office-atmosphere.component.scss']
})
export class OfficeAtmosphereComponent implements OnInit {

  constructor() { }

  play_pause = () => {
    var audio = document.getElementById("audio");
    var pp_button = document.getElementsByClassName("pp_button")[0];

    if (audio.paused) {
      audio.play();
      pp_button.innerHTML = "Mettre fin au test";
    }
    else {
      audio.pause()
      this.display = "none";
      alert("Vous avez écouter le bruit pendant " + audio.currentTime + " secondes Félicitation !");
      audio.currentTime = 0;
      pp_button.innerHTML = "Relancer le test";
    }
    audio.onended = function() {
        alert("La vidéo c'est terminé Félicitation !");
    }; 
  }

  ngOnInit(): void {
    
  }

}
