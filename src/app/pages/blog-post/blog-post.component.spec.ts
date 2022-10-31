import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { of } from "rxjs";
import { BlogApiService } from "src/app/services/blog-api.service";
import { postMock, postMock2 } from "src/app/services/mockBlog.spec";
import { BlogPostComponent } from "./blog-post.component";

describe("BlogPostComponent", () => {
  let component: BlogPostComponent;
  let fixture: ComponentFixture<BlogPostComponent>;
  let service: BlogApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [BlogPostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(BlogApiService);
  });

  describe("POST test", () => {
    it("should call postPost", () => {
      spyOn(service, "postPost").and.returnValue(of(postMock));
      component.form.get("title")!.setValue(postMock.title);
      component.form.get("body")!.setValue(postMock.body);
      component.form.get("id")!.setValue(postMock.id);
      component.submitPost();
      fixture.detectChanges();

      expect(service.postPost).toHaveBeenCalled();
      expect(service.postPost).toHaveBeenCalledWith(postMock);
      expect(service.postPost).not.toHaveBeenCalledWith(postMock2);
    });
  });

  describe("form values tests", () => {
    it("forms should equal to mock", () => {
      component.form.get("id")!.setValue(postMock.id);
      component.form.get("title")!.setValue(postMock.title);
      component.form.get("body")!.setValue(postMock.body);
      
      expect(component.form.value).toEqual(postMock);
    });

    it("should  form is valid", () => {
      component.form.get("id")!.setValue(postMock.id);
      component.form.get("title")!.setValue(postMock.title);
      component.form.get("body")!.setValue(postMock.body);
   
      expect(component.form.valid).toBeTruthy();
    });

    it("should form is invalid and if fields are required", () => {
      const title = component.form.get("title");
      const body = component.form.get("body");
      expect(title?.value).toBe("");
      expect(body?.value).toBe("");
      expect(component.form.invalid).toBeTruthy();
      expect(title?.getError("required")).toBeTruthy();
      expect(body?.getError("required")).toBeTruthy();
    });
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
