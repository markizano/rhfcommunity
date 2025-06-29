import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Candidate } from 'app/app.types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CandidateService {
  public candidates: EventEmitter<Candidate[]> = new EventEmitter<Candidate[]>();
  private candies: Candidate[] = [];

  constructor(private http: HttpClient) {
    this.loadCandidates().subscribe({
      next: (response) => {
        this.candies = response.map((c, i) => { return { id: i, ...c }; });
        this.candidates.emit(this.candies);
      }, error: err => {
        console.error(err);
      }
    });
  }

  loadCandidates(): Observable<Candidate[]> {
    return this.http.get<Omit<Candidate, 'id'>[]>('/candidates.json');
  }


  getCandidates(): Candidate[] {
    console.log('CandidateService.getCandidates()', this.candies);
    return this.candies;
  }

  getCandidate(i: number): Candidate {
    return this.candies[i];
  }
}
