import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeoAnalysisComponent } from './seo-analysis/seo-analysis.component';
import { AdCampaignsComponent } from './ad-campaigns/ad-campaigns.component';
import { MarketingServicesComponent } from './marketing-services/marketing-services.component';
import { CommunicationHubComponent } from './communication-hub/communication-hub.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SeoAnalysisComponent,
    AdCampaignsComponent,
    MarketingServicesComponent,
    CommunicationHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }