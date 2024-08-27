export const updateSafeAreas = function () {
    if (!screen) throw new Error("Cannot update safe areas: screen is not defined");

    const root = document.documentElement;
    switch (screen.orientation.type) {
        case "portrait-primary":
            root.style.setProperty("--safe-area-top", "env(safe-area-inset-top)");
            root.style.setProperty("--safe-area-left", "0px");
            root.style.setProperty("--safe-area-right", "0px");
            break;
        case "landscape-primary":
            root.style.setProperty("--safe-area-top", "0px");
            root.style.setProperty("--safe-area-left", "env(safe-area-inset-left)");
            root.style.setProperty("--safe-area-right", "0px");
            break;
        case "landscape-secondary":
            root.style.setProperty("--safe-area-top", "0px");
            root.style.setProperty("--safe-area-left", "0px");
            root.style.setProperty("--safe-area-right", "env(safe-area-inset-right)");
            break;
    }
}