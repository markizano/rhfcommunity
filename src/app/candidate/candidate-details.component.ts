import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'app/app.types';
import { CandidateService } from 'app/candidate/candidate.service';

@Component({
  selector: 'rhf-candidate-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidate?: Candidate;

  private route = inject(ActivatedRoute);
  private candidateService = inject(CandidateService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.candidateService.getCandidate(id).subscribe((candidate: Candidate) => {
        this.candidate = candidate;
      });
    }
  }
}
