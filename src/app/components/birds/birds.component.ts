import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListBirdsService } from 'src/app/services/list-birds/list-birds.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  constructor(private router: Router, private listBirdsService: ListBirdsService) { }

  ngOnInit(): void {
  }

  onViewAllBirdsClick(): void {
    this.listBirdsService.setListBirds(true);
    this.router.navigateByUrl('/list-birds');
  }

  onViewMyBirdsClick(): void {
    this.listBirdsService.setListBirds(true);
    this.router.navigateByUrl('/list-birds');
  }

  onAddNewBirdClick(): void {
    this.listBirdsService.setListBirds(false);
    this.router.navigateByUrl('/list-birds');
  }

}
