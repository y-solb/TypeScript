{
  /**
   * Record: 하나와 어떤 하나를 연결하고 싶을 때 하나를 키로 쓰고 나머지를 다른 타입으로 사용
   */

  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  };
}
