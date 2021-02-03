import { Component, OnInit } from '@angular/core';
import { ListBirdsService } from 'src/app/services/list-birds/list-birds.service';

@Component({
  selector: 'app-view-bird',
  templateUrl: './view-bird.component.html',
  styleUrls: ['./view-bird.component.css']
})
export class ViewBirdComponent implements OnInit {

  addBird = false;

  constructor(private listBirdsService: ListBirdsService) { }

  ngOnInit(): void {
    this.listBirdsService.getListBirds().subscribe(listBirds => this.addBird = listBirds);
  }

  getAddBird(): boolean {
    return this.addBird;
  }

  setAddNewBird(addBird: boolean): void {
    this.addBird = addBird;
  }

}
