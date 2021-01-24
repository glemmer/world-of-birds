import { Component, OnInit } from '@angular/core';
import { ListBirdsService } from 'src/app/services/list-birds/list-birds.service';

@Component({
  selector: 'app-list-birds',
  templateUrl: './list-birds.component.html',
  styleUrls: ['./list-birds.component.css']
})
export class ListBirdsComponent implements OnInit {

  listBirds: boolean;

  constructor(private listBirdsService: ListBirdsService) { }

  ngOnInit(): void {
    this.listBirdsService.getListBirds().subscribe(listBirds => this.listBirds = listBirds);
  }
}
