class PostA {
  // public id: number = 0;
  // private id: number = 0;
  // public title: string = '';
  // protected title: string = '';
  constructor(private id: number = 0, protected title: string = '') {
    this.id = id;
    this.title = title;
  }

  getPost() {
    return `postId ${this.id}, postTitle: ${this.title}`;
  }
}

class PostB extends PostA {
  getPost() {
    return this.title;
  }
}
// class PostC extends PostA {
//   getPost() {
//     return this.id;
//   }
// }

const postA: PostA = new PostA(1, 'title 1');

// console.log(postA.id); // 1
// console.log(postA.title); // "title 1"
