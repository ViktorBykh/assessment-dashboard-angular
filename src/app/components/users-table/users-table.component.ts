import { Component, OnInit } from '@angular/core';
import { User } from '../../types/User';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BASE_URL } from '../../app.routes';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];
  error = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService
      .getUsers()
      .then((users: User[]) => {
        this.users = users;
      })
      .catch(() => {
        this.error = 'Error loading users';
      });
  }

  handleGoToDashboard(): void {
    this.router.navigate([`${BASE_URL}/api/userassessments`]);
  }
}
