class Post {

  constructor(
    public readonly title: string = '',
    public readonly content: string = '',
    public readonly featuredImage: string = '',
    public readonly date: string = '',
  ) {}
}

export default Post;
