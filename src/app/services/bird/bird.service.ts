import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Bird } from 'src/app/interfaces/bird.interface';
import { AccessService } from '../access/access.service';

@Injectable({
  providedIn: 'root'
})
export class BirdService{
  private headers: HttpHeaders;
  private birds: Bird[];

  constructor(private http: HttpClient, private accessService: AccessService) {
    this.accessService.getAccessToken().subscribe({
      next: data => {
        console.log(`Access token 1 -> ${JSON.stringify(data)}`);
        this.headers =  new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${data}`)
          .set('Access-Control-Allow-Origin', '*');
        console.log(`Headers -> ${JSON.stringify(this.headers)}`);
        this.getAllBirds().subscribe(birds => this.birds = birds);
      },
      error: error => {
        console.log(`Error message -> ${JSON.stringify(error)}`);
      }
    });
  }

  addBird(localname: string, scientificName: string, alternateName: string): Observable<Bird> {
    const headers =  this.headers;
    return this.http.post<Bird> ('http://localhost:8110/wob/api/birds',
                                 {name: localname, scientificName, alternateName, groupId: 0},
                                 {headers})
          .pipe(
              tap(
                data => { this.birds.push(data);
                          console.log(`New bird string -> ${JSON.stringify(data)}`);
                },
                error => console.log(`Error -> ${JSON.stringify(error)}`)
              )
          );
  }

  private getAllBirds(): Observable<Bird[]> {
    const headers =  this.headers;
    const url = `http://localhost:8110/wob/api/birds`;
    return this.http.get<Bird[]>(url, {headers}).pipe(
        tap(data => {
          console.log(`Get All Birds -> ${JSON.stringify(data)}`);
        },
        error => {
          console.log(`Get Bird Error -> ${JSON.stringify(error)}`);
        }
      )
    );
  }

  getBirds(): Observable<Bird[]> {
    return of(this.birds);
  }

  updateBird(bird: Bird): void {
  }

  deleteBird(id: number): void {
  }

  getBirdById(id: number): Bird {
    return null;
  }

  getBirdByName(name: string): Observable<Bird> {
/*    const headers =  new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', this.accessToken)
        .set('Access-Control-Allow-Origin', '*');  */
    const headers =  this.headers;
    const url = `http://localhost:8110/wob/api/birds/name/${name}`;
    return this.http.get<Bird>(url, {headers}).pipe(
      tap(data => {
          console.log(`Get Bird by name -> ${JSON.stringify(data)}`);
        },
        error => {
          console.log(`Get Bird Error -> ${JSON.stringify(error)}`);
        }
      )
    );
  }
}
