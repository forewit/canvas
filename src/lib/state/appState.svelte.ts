
function setupAppState() {
    let authRedirect = $state("");
  
    return {
      get authRedirect() {
        return authRedirect;
      },
      set authRedirect(value) {
        authRedirect = value;
      },
    };
  }
  
  export const appState = setupAppState()
  