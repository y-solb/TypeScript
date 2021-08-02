{
  /**
   * discriminated union type
   * 공통적인 프로퍼티(result)를 가지고 있음으로 구분하기 쉽다!
   */

  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😢 reason

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.reason}`);
    }
  }
}
