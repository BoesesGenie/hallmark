import Post from '../domain/Post';

class PostFetcher {
  private readonly url = 'https://speed.taxipark.tech/wp-json/wp/v2/';

  getById = async (postId: string): Promise<Post> => {
    const response = await fetch(`${this.url}posts/${postId}`);
    const data = await response.json();
    const mediaResponse = await fetch(`${this.url}media/${data.featured_media}`);
    const mediaData = await mediaResponse.json();

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const date = new Date(data.date);
    const dateStr = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return new Post(
      data.title.rendered,
      data.content.rendered,
      mediaData.source_url,
      dateStr,
    );
  };
}

export default PostFetcher;
