import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Candidate, MediaType } from 'app/app.types';
import { CandidateService } from 'app/candidate/candidate.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'rhf-candidate-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidates: Candidate[] = [];
  candidate: Candidate = <Candidate>{};

  private route = inject(ActivatedRoute);
  private candidatesService = inject(CandidateService);

  constructor(private sanitizer: DomSanitizer) {
    this.candidatesService.candidates.subscribe(candidates => {
      this.candidates = candidates;
      this.loadCandidate();
    });
  }

  ngOnInit(): void {
    this.loadCandidate();
  }

  loadCandidate(): void {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    console.log('CandidateDetailsComponent.init()', id, this.candidates);
    if (id !== null) {
      this.candidate = this.candidates[id];
    }
  }
  getYouTubeUrl(media: MediaType): SafeResourceUrl {
    // The url comes from hardcoded server-based resources, not user input.
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${media.url}`);
  }
}
