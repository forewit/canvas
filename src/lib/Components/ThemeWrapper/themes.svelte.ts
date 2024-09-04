export function applyTheme(elm: HTMLElement, theme: Theme) {
  elm.style.setProperty("--bg", theme.bg);
  elm.style.setProperty("--bg-alt", theme.bgAlt);
  elm.style.setProperty("--main", theme.main);
  elm.style.setProperty("--error", theme.error);
  elm.style.setProperty("--text", theme.text);
  elm.style.setProperty("--sub", theme.sub);
  elm.style.setProperty("--theme1", theme.theme1);
  elm.style.setProperty("--theme2", theme.theme2);
  elm.style.setProperty("--theme3", theme.theme3);
  elm.style.setProperty("--theme4", theme.theme4);
  elm.style.setProperty("--theme5", theme.theme5);
}

export type Theme = {
    name: string;
    bg: string;
    bgAlt: string;
    main: string;
    error: string;
    text: string;
    sub: string;
    theme1: string;
    theme2: string;
    theme3: string;
    theme4: string;
    theme5: string;
  };


 export const themes: Theme[] = [
    {
      name: "Canvas",
      bg: "#f0f0f0",
      bgAlt: "#ffffff",
      main: "#c2c3cc",
      error: "#f24726",
      sub: "#808080",
      text: "#858585",
      theme1: "#414bb2",
      theme2: "#0ca789",
      theme3: "#b5266c",
      theme4: "#333333",
      theme5: "#cca349",
    },
    // {
    //   name: "Paper",
    //   bg: "#eeeeee",
    //   bgAlt: "#dddddd",
    //   main: "#444444",
    //   card: "#444444",
    //   error: "#d70000",
    //   sub: "#b2b2b2",
    //   text: "#444444",
    // },
    // {
    //   name: "Rose Pine Dawn",
    //   bg: "#fffaf3",
    //   bgAlt: "#f0e9df",
    //   main: "#56949f",
    //   card: "#ea9d34",
    //   error: "#b4637a",
    //   sub: "#c4a7e7",
    //   text: "#286983",
    // },
    // {
    //   name: "Blueberry Light",
    //   bg: "#dae0f5",
    //   bgAlt: "#c1c7df",
    //   main: "#506477",
    //   card: "#df4576",
    //   error: "#df4576",
    //   sub: "#92a4be",
    //   text: "#678198",
    // },
    // {
    //   name: "Repose Dark",
    //   bg: "#2f3338",
    //   bgAlt: "#3a3c3d",
    //   main: "#d6d2bc",
    //   card: "#d6d2bc",
    //   error: "#ff4a59",
    //   sub: "#8f8e84",
    //   text: "#d6d2bc",
    // },
    // {
    //   name: "Carbon",
    //   bg: "#313131",
    //   bgAlt: "#2b2b2b",
    //   main: "#f66e0d",
    //   card: "#f66e0d",
    //   error: "#e72d2d",
    //   sub: "#616161",
    //   text: "#f5e6c8",
    // },
    // {
    //   name: "Blueberry Dark",
    //   bg: "#212b42",
    //   bgAlt: "#1b2334",
    //   main: "#add7ff",
    //   card: "#962f7e",
    //   error: "#df4576",
    //   sub: "#5c7da5",
    //   text: "#91b4d5",
    // },
    // {
    //   name: "One Dark",
    //   bg: "#2f343f",
    //   bgAlt: "#262b34",
    //   main: "#61afef",
    //   card: "#61afef",
    //   error: "#e06c75",
    //   sub: "#eceff4",
    //   text: "#98c379",
    // },
    // {
    //   name: "Dark Note",
    //   bg: "#1f1f1f",
    //   bgAlt: "#141414",
    //   main: "#f2c17b",
    //   card: "#e3dce0",
    //   error: "#ff0000",
    //   sub: "#768f95",
    //   text: "#d2dff4",
    // },
    // {
    //   name: "Dark",
    //   bg: "#111111",
    //   bgAlt: "#191919",
    //   main: "#eeeeee",
    //   card: "#eeeeee",
    //   error: "#da3333",
    //   sub: "#444444",
    //   text: "#eeeeee",
    // },
  ];