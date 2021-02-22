import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bird } from 'src/app/interfaces/bird.interface';
import { BirdService } from 'src/app/services/bird/bird.service';

@Component({
  selector: 'app-list-birds',
  templateUrl: './list-birds.component.html',
  styleUrls: ['./list-birds.component.css']
})
export class ListBirdsComponent implements OnInit {

  listBirds: number;
  birds: Bird[];

  constructor(private router: Router,
              private birdService: BirdService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.listBirds = +params.id;
        console.log(`${this.listBirds}`);
    });
    this.birdService.getBirds().subscribe(allBirds => {
      this.birds = allBirds;
    });
  }

  onBackClick(): void {
    this.router.navigateByUrl('/birds');
  }

  onBirdClick(indx: number): void {
    console.log(`Button ${indx} clicked`);
  }
}
