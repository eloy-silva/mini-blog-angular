import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogHeaderComponent } from "./blog-header/blog-header.component";

@NgModule({
  declarations: [BlogHeaderComponent],
  exports: [BlogHeaderComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
