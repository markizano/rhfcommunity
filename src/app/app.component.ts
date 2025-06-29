import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CandidateService } from 'app/candidate/candidate.service';

@Component({
  selector: 'rhf-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'rhf-website';
  private candidateService = inject(CandidateService);
}
