import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { GraphData } from '../../types/GraphData';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assessment-report',
  templateUrl: './assessment-report.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class AssessmentReportComponent implements OnInit {
  id: number = 0;
  graphData: GraphData | null = null;
  loading = false;
  noData = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      if (this.id) {
        this.loadGraphData();
      }
    });
  }

  loadGraphData(): void {
    this.loading = true;
    this.apiService
      .getAssessmentGraph(this.id)
      .then((data: GraphData) => {
        this.graphData = data;
        this.noData =
          !data || !data.data || Object.keys(data.data).length === 0;
      })
      .catch(() => {
        this.error = 'Error loading graph data';
      })
      .finally(() => (this.loading = false));
  }

  goToDashboard(): void {
    this.router.navigate(['/api/userassessments']);
  }
}
