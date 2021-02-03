import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bird } from 'src/app/interfaces/bird.interface';
import { BirdService } from 'src/app/services/bird/bird.service';
import { ListBirdsService } from 'src/app/services/list-birds/list-birds.service';

@Component({
  selector: 'app-list-birds',
  templateUrl: './list-birds.component.html',
  styleUrls: ['./list-birds.component.css']
})
export class ListBirdsComponent implements OnInit {

  listBirds: boolean;
  birds: Bird[];

  constructor(private router: Router,
              private listBirdsService: ListBirdsService,
              private birdService: BirdService) { }

  ngOnInit(): void {
    this.listBirdsService.getListBirds().subscribe(listBirds => this.listBirds = listBirds);
    this.birdService.getBirds().subscribe(allBirds => {
      this.birds = allBirds;
      console.log(`All Birds -> ${this.birds}`);
    });
  }

  onBackClick(): void {
    this.router.navigateByUrl('/birds');
  }

  onBirdClick(indx: number): void {
//    this.listBirdsService.setListBirds(false);
    this.router.navigateByUrl('/list-birds');
  }
}
