import { Observable } from 'rxjs';
import { Blog } from './../../model/blog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogApiService } from 'src/app/services/blog-api.service';
import { BlogComment } from 'src/app/model/blog-comment';
import { Validators } from '@angular/forms';




@Component({
  selector: 'app-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {



  postForm = this.formBuilder.group({
    title:[''],
    body:[''],
    id:0,
    userId:0
  })

    form = this.formBuilder.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    body:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    id:0,
    postId:0
  });

  constructor(private route: ActivatedRoute, private blogApiService: BlogApiService, private formBuilder: FormBuilder){}

  post: Blog = {
    body: '',
    userId: 0,
    id: 0,
    title: ''
  };

  comment: BlogComment = {
    postId: 0,
    id: 0,
    name: '',
    email: '',
    body: ''
  }

  postIdNumber!:number;
  editPost: boolean = false;
  comments$!: Observable<BlogComment[]>

  ngOnInit(): void {
   this.postIdNumber = parseInt(this.route.snapshot.paramMap.get('id')!)

   this.blogApiService.getPostById(this.postIdNumber).subscribe((data) =>{
     this.post = data;
     this.postForm.patchValue({
       id:this.post.id,
       userId:this.post.userId,
       title:this.post.title,
       body:this.post.body
     })
   })


   this.comments$ = this.blogApiService.getComments(this.postIdNumber)
  }


  editSubmit(){
    this.blogApiService.editPost(this.postIdNumber, this.postForm.value).subscribe(() => {
      this.editPost = false
    });
   
  }


  commentSubmit(){
    this.blogApiService.postComment(this.postIdNumber, this.form.value).subscribe(()=>{
      this.form.reset(); 
    });
    
  }


}
