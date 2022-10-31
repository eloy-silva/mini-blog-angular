import { HttpClientTestingModule } from "@angular/common/http/testing";
import { environment } from "src/environments/environment";

import { HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { BlogApiService } from "./blog-api.service";
import {
  commentListMock,
  commentMock,
  postListMock,
  postMock,
  postMock2,
} from "./mockBlog.spec";

describe("BlogApiServiceService", () => {
  let service: BlogApiService;
  let httpTest: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogApiService],
    });
    service = TestBed.inject(BlogApiService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTest.verify();
  });

  describe("GET tests", () => {
    it("should test GET posts", (done) => {
      service.getPosts().subscribe((post) => {
        expect(post).toEqual(postListMock);
        done();
      });
      const req = httpTest.expectOne(`${apiUrl}/posts`);
      expect(req.cancelled).toBeFalsy();
      req.flush(postListMock);
      expect(req.request.responseType).toBe("json");
      expect(req.request.method).toBe("GET");
      httpTest.verify();
    });

    it("should test GET comments", (done) => {
      service.getComments(1).subscribe((comments) => {
        expect(commentListMock).toEqual(comments);
        done();
      });
      const req = httpTest.expectOne(`${apiUrl}/posts/1/comments`);
      expect(req.cancelled).toBeFalsy();
      req.flush(commentListMock);
      expect(req.request.responseType).toBe("json");
      expect(req.request.method).toBe("GET");
      httpTest.verify();
    });
  });
  describe("POST tests", () => {
    it("should test POST comments", (done) => {
      service.postComment(1, commentMock).subscribe((comment) => {
        expect(comment).toEqual(commentMock);
        done();
      });
      const req = httpTest.expectOne(`${apiUrl}/posts/1/comments`);
      expect(req.cancelled).toBeFalsy();
      req.flush(commentMock);
      expect(req.request.responseType).toBe("json");
      expect(req.request.method).toBe("POST");
      httpTest.verify();
    });

    it("should test POST posts", (done) => {
      service.postPost(postMock).subscribe((post) => {
        expect(post).toEqual(postMock);
        expect(post).not.toEqual(postMock2);
        done();
      });
      const req = httpTest.expectOne(`${apiUrl}/posts`);
      expect(req.cancelled).toBeFalsy();
      req.flush(postMock);
      expect(req.request.responseType).toBe("json");
      expect(req.request.method).toBe("POST");
      httpTest.verify();
      done();
    });
  });

  describe("PATCH test", () => {
    it("should test PATCH post", (done) => {
      service.editPost(1, postMock).subscribe((post) => {
        expect(post).toEqual(postMock);
        expect(post).not.toEqual(postMock2);
        done();
      });
      const req = httpTest.expectOne(`${apiUrl}/posts/1`);
      expect(req.cancelled).toBeFalsy();
      req.flush(postMock);
      expect(req.request.responseType).toBe("json");
      expect(req.request.method).toBe("PATCH");
      httpTest.verify();
    });
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
