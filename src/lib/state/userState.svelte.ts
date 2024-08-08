
function setupUserState() {
  let themeName = $state("Canvas")
  let spellcheck = $state(true);

  return {
    get themeName() {
      return themeName;
    },
    set themeName(value) {
      themeName = value;
    },
    get spellcheck() {
      return spellcheck;
    },
    set spellcheck(value) {
      spellcheck = value;
    },
  };
}

export const userState = setupUserState()
