import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './../shared/shared.module';
import { RoutingModule } from './routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogListComponent,
    BlogPostComponent,
    
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PagesModule { }
