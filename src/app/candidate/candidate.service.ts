import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from 'app/app.types';

@Injectable({ providedIn: 'root' })
export class CandidateService {
  constructor(private http: HttpClient) {}

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>('/candidates.json');
  }

  getCandidate(name: string): Observable<Candidate> {
    return this.http.get<Candidate>(`/candidates/${name}.json`);
  }
} 