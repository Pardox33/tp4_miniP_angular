import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../modele/entreprise.model';
import { EntrepriseService } from '../services/entreprise.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-entreprises',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './entreprises.html',
})
export class Entreprises implements OnInit {
  entreprises!: Entreprise[];

  constructor(private entrepriseService: EntrepriseService) {}

  ngOnInit() {
    this.chargerEntreprises();
  }

  chargerEntreprises() {
    this.entrepriseService.listeEntreprises().subscribe((ents) => {
      console.log(ents);
      this.entreprises = ents;
    });
  }
}
