{
  /**
   * Omit: 기존의 타입에서 내가 원하는 것들을 빼서 사용(빼고자 할 때)
   */

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo2(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
