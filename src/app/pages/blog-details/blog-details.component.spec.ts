import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { of } from "rxjs";
import { BlogDetailsComponent } from "./blog-details.component";
import { BlogApiService } from "src/app/services/blog-api.service";
import {
  commentMock,
  postMock,
  postMockEdit,
} from "src/app/services/mockBlog.spec";

describe("BlogDetailsComponent", () => {
  let component: BlogDetailsComponent;
  let fixture: ComponentFixture<BlogDetailsComponent>;
  let service: BlogApiService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      declarations: [BlogDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(BlogApiService);
  });
  describe("EditPost test", () => {
    it("should  PostbyId and patch values", () => {
      spyOn(service, "getPostById").and.returnValue(of(postMock));
      component.ngOnInit();

      expect(component.postForm.get("title")?.value).toEqual(postMock.title);
      expect(component.postForm.get("body")?.value).toEqual(postMock.body);
      expect(service.getPostById).toHaveBeenCalled();
      expect(component.post).toEqual(postMock);
    });

    it("should  editPost and change values", () => {
      spyOn(service, "getPostById").and.returnValues(of(postMock));
      component.ngOnInit();

      spyOn(service, "editPost").and.returnValues(of(postMock));
      component.postForm.get("title")!.patchValue(postMockEdit.title);
      component.postForm.get("body")!.patchValue(postMockEdit.body);
      component.editSubmit();

      expect(service.editPost).toHaveBeenCalled();
      expect(service.editPost).toHaveBeenCalledWith(NaN, postMockEdit);
    });
  });

  describe("comment test", () => {
    it("should  postComment", () => {
      spyOn(service, "postComment").and.returnValue(of(commentMock));

      component.form.get("name")!.setValue(commentMock.name);
      component.form.get("body")!.setValue(commentMock.body);
      component.form.get("email")!.setValue(commentMock.email);
      component.form.get("id")!.setValue(commentMock.id);
      component.form.get("postId")!.setValue(commentMock.postId);
      component.commentSubmit();

      expect(service.postComment).toHaveBeenCalled();
      expect(service.postComment).toHaveBeenCalledWith(NaN, commentMock);
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
