import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Candidate } from 'app/app.types';
import { CandidateComponent } from 'app/candidate/candidate.component';

@Component({
  selector: 'rhf-home',
  imports: [ CommonModule, CandidateComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
})
export class HomeComponent {
  candidates: Candidate[] = [
    {
      id: '1',
      name: 'Alex Mountain',
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Outdoor enthusiast, passionate about preserving our trails and wildlife.',
      reasonForRunning: 'To ensure Redhill Forest remains a haven for nature lovers.',
      learnMoreUrl: '',
    },
    {
      id: '2',
      name: 'Jamie Lake',
      photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Avid fisher and camper, dedicated to community engagement.',
      reasonForRunning: 'To improve amenities and foster a stronger HOA community.',
      learnMoreUrl: '',
    },
    {
      id: '3',
      name: 'Morgan Pines',
      photoUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
      bio: 'Longtime resident, committed to responsible land stewardship.',
      reasonForRunning: 'To represent all voices and protect our shared resources.',
      learnMoreUrl: '',
    },
  ];

  constructor(private router: Router) {}

  goToDetails(candidate: Candidate) {
    this.router.navigate(['/candidate', candidate.id]);
  }
}
