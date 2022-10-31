import { BlogApiService } from "./../../services/blog-api.service";
import { Subscription, tap } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Blog } from "src/app/model/blog";

@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.scss"],
})
export class BlogListComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  page: string = this.blogApiService.getLastPage();
  posts!: Blog[];
  isLoading = true;
  pageSize = 10;

  constructor(private blogApiService: BlogApiService) {}

  ngOnInit(): void {
    this.subscription = this.blogApiService
      .getPosts()
      .pipe(
        tap((posts) => {
          this.posts = posts.reverse();
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
