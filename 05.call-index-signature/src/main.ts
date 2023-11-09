// interface getLikeNumber {
//   (like: number): number;
// }

// interface Post {
//   id: number;
//   title: string;
//   getLikeNumber: getLikeNumber;
// }

// const post1: Post = {
//   id: 1,
//   title: 'post 1',
//   getLikeNumber(like) {
//     return like;
//   },
// };

// post1.getLikeNumber(1);

interface Post {
  [key: string]: string | number;
}

const post1: Post = {
  id: 1,
  title: 'post 1',
};

post1['description'] = 'description 1';
post1['pages'] = 300;

interface Names {
  [index: number]: string;
}

const userNames: Names = ['John', 'kim', 'Joe'];
userNames[0] === 'john';
