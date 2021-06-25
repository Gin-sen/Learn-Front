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
    var audio = new Audio();
    audio = document.getElementById("audio");
    var pp_button = document.getElementsByClassName("pp_button")[0];

    if (audio != null && audio.paused) {
      audio.play();
      pp_button.innerHTML = "Mettre fin au test";
    }
    else {
      audio.pause()
      var seconde = parseInt(audio.currentTime % 60);
      var minute = parseInt((audio.currentTime / 60) % 60);
      var my_form = document.getElementsByClassName("my_form")[0];
      console.log(my_form);
      alert("Vous avez écouter le bruit pendant " + minute + ":" + seconde + "  Félicitation !");
      audio.currentTime = 0;
      pp_button.style.display = "none";
      my_form.style.display = "block";
    }
    audio.onended = function() {
        alert("Vous êtes arrivé au bout de l'exercice Félicitation !");
    }; 
  }

  ngOnInit(): void {
    
  }

}
