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
        this.candies = this.shuffle(this.candies);
        this.candidates.emit(this.candies);
      }, error: err => {
        console.error(err);
      }
    });
  }

  loadCandidates(): Observable<Candidate[]> {
    return this.http.get<Omit<Candidate, 'id'>[]>('/candidates.json');
  }

  /**
   * Shuffles an array using the Fisher-Yates algorithm
   * @param array - The array to shuffle
   * @returns A new shuffled array
   */
  private shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  getCandidates(): Candidate[] {
    console.log('CandidateService.getCandidates()', this.candies);
    return this.candies;
  }

  getCandidate(i: number): Candidate {
    return this.candies[i];
  }
}
