import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Assessment } from '../../types/Assessment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BASE_URL } from '../../app.routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class DashboardComponent implements OnInit {
  assessments: Assessment[] = [];
  userRole: string | null = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role');
    this.loadAssessments();
  }

  loadAssessments(): void {
    this.apiService
      .getUserAssessments()
      .then((assessments: Assessment[]) => {
        this.assessments = assessments;
      })
      .catch((error) => {
        console.error('Error loading assessments:', error);
      });
  }

  goToAssessment(assessmentId: number): void {
    this.router.navigate([`${BASE_URL}/api/userassessments/graph/`, assessmentId]);
  }

  goToViewUsers(): void {
    this.router.navigate([`${BASE_URL}/api/users`]);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([`${BASE_URL}/api/login`]);
  }
}
