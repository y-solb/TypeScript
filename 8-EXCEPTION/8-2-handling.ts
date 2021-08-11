{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
  }

  // dependency injection: 필요한 것을 외부에서 받아오는 composition dependency injection
  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      // login.....
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        console.log('show dialog to user');
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  // service.login();
  const app = new App(service);
  app.run();
}
