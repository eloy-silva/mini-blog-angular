import { Blog } from "../model/blog";
import { BlogComment } from "../model/blog-comment";

export const postListMock:Blog[] = [
    {
      body: "body 1",
      id: 1,
      title: "title 1",
      userId: 1
    },
    {
      body: "body 2",
      id: 2,
      title: "title 3",
      userId: 1
    },
    {
      body: "body 3",
      id: 3,
      title: "title 3",
      userId: 1
    }
  ]


export const commentListMock:BlogComment[] = [
    {
      postId: 1,
      id: 1,
      name: "name 1",
      email: "email1@email.com",
      body: "body 1"
    },
    {
      postId: 2,
      id: 2,
      name: "name 2",
      email: "email2@email.com",
      body: "body 2"
    },
    {
      postId: 3,
      id: 3,
      name: "name 3",
      email: "email3@email.com",
      body: "body 3"
    }
  ]


export const postMock =
{
  body: "body 1",
  id: 1,
  title: "title 1",
  userId: 1
}
export const postMock2 =
{
  body: "body 2",
  id: 2,
  title: "title 2",
  userId: 1
}
export const postMockEdit =
{
  body: "body 2",
  id: 1,
  title: "title 2",
  userId: 1
}

export const commentMock =
  {
    postId: 1,
    id: 1,
    name: "name 1",
    email: "email1@email.com",
    body: "body 1"
  }


