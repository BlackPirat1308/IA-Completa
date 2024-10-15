import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-seo-analysis',
  templateUrl: './seo-analysis.component.html',
  styleUrls: ['./seo-analysis.component.css']
})
export class SeoAnalysisComponent implements OnInit {
  seoData: any[] = [];
  newSeoData = { url: '', title: '', description: '', keywords: '' };

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.loadSeoData();
  }

  loadSeoData(): void {
    this.seoService.getSeoData().subscribe(
      (data) => {
        this.seoData = data;
      },
      (error) => {
        console.error('Error fetching SEO data', error);
      }
    );
  }

  addSeoData(): void {
    this.seoService.addSeoData(this.newSeoData).subscribe(
      (response) => {
        console.log('SEO data added', response);
        this.loadSeoData();
        this.newSeoData = { url: '', title: '', description: '', keywords: '' };
      },
      (error) => {
        console.error('Error adding SEO data', error);
      }
    );
  }
}