import { Injectable } from '@angular/core';
import axios from 'axios';
import { Assessment } from '../types/Assessment';
import { GraphData } from '../types/GraphData';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://user-assessment-api.vercel.app/';

  login(credentials: { email: string; password: string }) {
    return axios
      .post(`${this.baseUrl}api/login`, credentials)
      .then((response) => response.data);
  }

  getUserAssessments(): Promise<Assessment[]> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Authentication token not found');
    }

    return axios
      .get<Assessment[]>(`${this.baseUrl}api/userassessments`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Token': token,
        },
      })
      .then((response) => response.data);
  }

  getAssessmentGraph(assessmentId: number): Promise<GraphData> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token not found');
    }

    return axios
      .get<GraphData>(
        `${this.baseUrl}api/userassessments/graph?id=${assessmentId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Token': token,
          },
        }
      )
      .then((response) => response.data);
  }

  getUsers(): Promise<User[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token not found');
    }

    return axios
      .get<User[]>(`${this.baseUrl}api/users`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Token': token,
        },
      })
      .then((response) => response.data);
  }
}
