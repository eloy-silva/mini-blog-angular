import { BlogApiService } from "src/app/services/blog-api.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-blog-edit",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
})
export class BlogPostComponent {
  form = this.formBuilder.group({
    title: ["", [Validators.required]],
    body: ["", [Validators.required]],
    userId: 1,
    id: 0,
  });

  constructor(
    private formBuilder: FormBuilder,
    private blogApiService: BlogApiService
  ) {}

  submitPost() {
    this.blogApiService
      .postPost(this.form.value)
      .subscribe(() => this.form.reset());
  }
}
