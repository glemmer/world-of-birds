import { Injectable } from '@angular/core';
import { Bird } from 'src/app/interfaces/bird.interface';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor() { }

  addBird(name: string, scientifiName: string, groupId: number): Bird {
    return null;
  }

  updateBird(bird: Bird): void {
  }

  deleteBird(id: number): void {
  }

  getBirdById(id: number): Bird {
    return null;
  }

  getBirdByName(name: string): Bird {
    return null;
  }

  getAllBirds(): Set<Bird> {
    return null;
  }
}
