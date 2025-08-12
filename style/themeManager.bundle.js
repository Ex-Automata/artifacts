(() => {
    const cssURL = "https://artifact.exautomata.ai/style/theme.css";
    const key_palette="palette", key_theme="theme";

    const availablePalettes = {
        "safety-first": "Safety First",
        "ocean": "Ocean",
        "forest": "Forest",
        "mauve": "Mauve",
        "monochrome": "Monochrome"
    };

    const availableThemes = {
        "light": "Light",
        "dark": "Dark"
    };

    const doc = document.documentElement;
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    const palette = localStorage.getItem(key_palette) || "safety-first";
    const theme = localStorage.getItem(key_theme) || (prefersDark ? "dark" : "light");

    doc.setAttribute("data-palette", palette);
    doc.setAttribute("data-theme", theme);

    window.setPalette = p => (doc.setAttribute("data-palette", p), localStorage.setItem(key_palette,p));
    window.setTheme = m => (doc.setAttribute("data-theme", m), localStorage.setItem(key_theme,m));

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssURL;
    link.crossOrigin = "anonymous"; // optional, for SRI
    document.head.appendChild(link);

    window.ThemeManager = {
        setPalette(p) {
            if (!availablePalettes.includes(p)) {
                console.warn(`Palette "${p}" not found. Available:`, availablePalettes);
                return;
            }
            doc.setAttribute("data-palette", p);
            localStorage.setItem(key_palette, p);
        },
        setTheme(m) {
            if (!availableThemes.includes(m)) {
                console.warn(`Theme "${m}" not found. Available:`, availableThemes);
                return;
            }
            doc.setAttribute("data-theme", m);
            localStorage.setItem(key_theme, m);
        },
        getPalette() {
            return doc.getAttribute("data-palette");
        },
        getTheme() {
            return doc.getAttribute("data-theme");
        },
        getPalettes() {
            return availablePalettes;
        },
        getThemes() {
            return availableThemes;
        }
    };
})();