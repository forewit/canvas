export const updateSafeAreasOnOrientationChange = function () {
    if (!screen) throw new Error("Cannot listen to orientation change: screen is not defined");
    screen.orientation.addEventListener("change", updateSafeAreas);
}

export const updateSafeAreas = function () {
    if (!screen) throw new Error("Cannot update safe areas: screen is not defined");

    switch (screen.orientation.type) {
        case "portrait-primary":
            document.documentElement.style.setProperty(
                "--safe-area-top",
                "env(safe-area-inset-top)"
            );
            document.documentElement.style.setProperty("--safe-area-left", "0px");
            document.documentElement.style.setProperty("--safe-area-right", "0px");
            break;
        case "landscape-primary":
            document.documentElement.style.setProperty("--safe-area-top", "0px");
            document.documentElement.style.setProperty(
                "--safe-area-left",
                "env(safe-area-inset-left)"
            );
            document.documentElement.style.setProperty("--safe-area-right", "0px");
            break;
        case "landscape-secondary":
            document.documentElement.style.setProperty("--safe-area-top", "0px");
            document.documentElement.style.setProperty("--safe-area-left", "0px");
            document.documentElement.style.setProperty(
                "--safe-area-right",
                "env(safe-area-inset-right)"
            );
            break;
    }
}