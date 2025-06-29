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
  displayCandidates: Candidate[] = [];

  constructor() {
    this.candidatesService.candidates.subscribe(candidates => {
      this.candidates = candidates;
      this.shuffleDisplayCandidates();
    });
  }

  ngOnInit(): void {
    this.candidates = this.candidatesService.getCandidates();
    this.shuffleDisplayCandidates();
  }
  
  /**
   * Shuffles the display order of candidates without affecting their IDs
   */
  private shuffleDisplayCandidates(): void {
    if (this.candidates.length === 0) return;
    
    // Create a copy of the candidates array for display
    this.displayCandidates = [...this.candidates];
    
    // Fisher-Yates shuffle algorithm
    for (let i = this.displayCandidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.displayCandidates[i], this.displayCandidates[j]] = [this.displayCandidates[j], this.displayCandidates[i]];
    }
  }
  
  goToDetails(candidate: Candidate) {
    window.location.href = `/candidate/${candidate.id}`;
  }
}
