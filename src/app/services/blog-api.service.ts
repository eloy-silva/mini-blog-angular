import { Blog } from 'src/app/model/blog';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BlogComment } from "../model/blog-comment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlogApiService {

  private storageKey: string = 'current-page'
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts():Observable<Blog[]>{
    return this.http.get<Blog[]>(`${this.apiUrl}/posts`);
  }

  getPostById(id: number):Observable<Blog>{
    return this.http.get<Blog>(`${this.apiUrl}/posts/${id}`);
  }

  getComments(id: number):Observable<BlogComment[]> {
    return this.http.get<BlogComment[]>(`${this.apiUrl}/posts/${id}/comments`);
  }

  postComment(id: number, comment: BlogComment): Observable<BlogComment> {
    return this.http.post<BlogComment>(
      `${this.apiUrl}/posts/${id}/comments`,
      comment
    );
  }

  postPost(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}/posts`, blog);
  }

  editPost(id:number, blog:Blog): Observable<Blog>{
    return this.http.patch<Blog>(`${this.apiUrl}/posts/${id}`, blog);
  }

  public getLastPage(): string {
    return sessionStorage.getItem(this.storageKey) || '1';
  }
}
