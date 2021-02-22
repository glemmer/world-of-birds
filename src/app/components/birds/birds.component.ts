import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirdService } from 'src/app/services/bird/bird.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  private loadedBirds = false;

  constructor(private router: Router,
              private birdService: BirdService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.birdService.init()
    .then(() => {
       this.loadedBirds = true;
       this.messageService.setMessage(`Bird information loaded`);
    });
  }

  onViewAllBirdsClick(): void {
    this.router.navigateByUrl('/list-birds/0');
  }

  onViewMyBirdsClick(): void {
    this.router.navigateByUrl('/list-birds/1');
  }

  onAddNewBirdClick(): void {
    while (!this.loadedBirds) {
      console.log('Waiting..');
    }
    this.router.navigateByUrl('/list-birds/2');
  }

}
