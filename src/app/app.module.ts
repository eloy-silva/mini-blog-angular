import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, PagesModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
