import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'app/app.types';

@Component({
  selector: 'rhf-candidate-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidate?: Candidate;

  private static CANDIDATES: Candidate[] = [
    {
      id: '1',
      name: 'Alex Mountain',
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Outdoor enthusiast, passionate about preserving our trails and wildlife.',
      reasonForRunning: 'To ensure Redhill Forest remains a haven for nature lovers.',
      learnMoreUrl: 'https://example.com/alex',
      whyVoteForMe: 'I have 10 years of experience in land management and community building.',
      additionalMedia: [
        { type: 'photo', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', description: 'Alex hiking' }
      ]
    },
    {
      id: '2',
      name: 'Jamie Lake',
      photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Avid fisher and camper, dedicated to community engagement.',
      reasonForRunning: 'To improve amenities and foster a stronger HOA community.',
      learnMoreUrl: 'https://example.com/jamie',
      whyVoteForMe: 'I bring a fresh perspective and a passion for outdoor activities.',
      additionalMedia: [
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', description: 'Jamie on community' }
      ]
    },
    {
      id: '3',
      name: 'Morgan Pines',
      photoUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
      bio: 'Longtime resident, committed to responsible land stewardship.',
      reasonForRunning: 'To represent all voices and protect our shared resources.',
      learnMoreUrl: 'https://example.com/morgan',
      whyVoteForMe: 'I have served on the board for 5 years and know our land well.',
      additionalMedia: []
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.candidate = CandidateDetailsComponent.CANDIDATES.find(c => c.id === id);
  }
}
