import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  candidates: Candidate[] = [];

  private router = inject(Router);
  private candidateService = inject(CandidateService);

  ngOnInit() {
    this.candidateService.getCandidates().subscribe((candidates: Candidate[]) => {
      this.candidates = candidates;
    });
  }

  goToDetails(candidate: Candidate) {
    this.router.navigate(['/candidate', candidate.id]);
  }
}
