import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: BlogListComponent },
  { path: "details/:id", component: BlogDetailsComponent },
  { path: "edit", component: BlogPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
