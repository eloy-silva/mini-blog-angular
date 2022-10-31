import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
import { BlogListComponent } from './blog-list.component';
import { BlogApiService } from 'src/app/services/blog-api.service';
import { postListMock } from 'src/app/services/mockBlog.spec';


describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;
  let service:BlogApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ BlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(BlogApiService)
  });

  it('should call postComment', ()=>{
    spyOn(service, 'getPosts').and.returnValue(of(postListMock));
    component.ngOnInit();

    expect(service.getPosts).toHaveBeenCalled();
    expect(component.posts$.subscribe).toHaveSize(3)
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
