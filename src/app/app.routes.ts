import { Routes } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { CandidateDetailsComponent } from 'app/candidate/candidate-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'candidate/:id', component: CandidateDetailsComponent },
];
