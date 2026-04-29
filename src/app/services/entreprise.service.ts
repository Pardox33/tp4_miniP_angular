import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from '../modele/entreprise.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })
export class EntrepriseService {
  apiURL = 'http://localhost:8088/entreprises/api/all';

  entreprises!: Entreprise[];
  constructor(private http: HttpClient) {}

  listeEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiURL);
  }
}
