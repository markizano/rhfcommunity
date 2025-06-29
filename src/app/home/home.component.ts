import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Candidate } from 'app/app.types';
import { CandidateComponent } from 'app/candidate/candidate.component';
import { CandidateService } from 'app/candidate/candidate.service';

@Component({
  selector: 'rhf-home',
  imports: [ CommonModule, CandidateComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export class HomeComponent implements OnInit {
  private candidatesService = inject(CandidateService);
  
  candidates: Candidate[] = [];

  constructor() {
    this.candidatesService.candidates.subscribe(candidates => {
      this.candidates = candidates;
    });
  }

  ngOnInit(): void {
    this.candidates = this.candidatesService.getCandidates();
  }
  
  goToDetails(candidate: Candidate) {
    window.location.href = `/candidate/${candidate.id}`;
  }
}
