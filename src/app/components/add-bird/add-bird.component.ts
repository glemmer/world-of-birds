import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bird } from 'src/app/interfaces/bird.interface';
import { BirdService } from 'src/app/services/bird/bird.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrls: ['./add-bird.component.css']
})
export class AddBirdComponent implements OnInit {

  localname: string;
  scientificname: string;
  alternatename: string;
  newBird = false;

  constructor(private router: Router,
              private birdService: BirdService,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onBackClick(): void {
    this.router.navigateByUrl('/birds');
  }

  onSearchClick(): void {
    this.birdService.getBirdByName(this.localname).subscribe({
      next: data => {
        this.scientificname = data.scientificName;
        this.alternatename = data.alternateName;
        console.log(`Bird onSearchClick -> ${JSON.stringify(data)}`);
      },
      error: error => {
        if (error.status) {
          this.messageService.setMessage(error.error.detail);
          this.newBird = true;
        }
        console.log(`Error message -> ${JSON.stringify(error)}`);
      }
    });
  }

  onAddClick(): void {
    this.birdService.addBird(this.localname, this.scientificname, this.alternatename).subscribe({
      next: data => {
        console.log(`Bird created succesfully -> ${JSON.stringify(data)}`);
        this.messageService.setMessage(`${data.name} created succefully`);
      },
      error: error => {
        if (error.status) {
          this.messageService.setMessage(error.error.detail);
          this.newBird = false;
        }
        console.log(`Error message -> ${JSON.stringify(error)}`);
      }
    });
  }

}
