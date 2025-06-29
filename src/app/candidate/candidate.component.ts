import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidate } from 'app/app.types';

@Component({
  selector: 'rhf-candidate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  @Input() candidate!: Candidate;
  @Output() details = new EventEmitter<Candidate>();

  onDetails() {
    this.details.emit(this.candidate);
  }
}
