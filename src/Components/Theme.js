class Theme {
    constructor(light, dark, gold) {
        this.light = light;
        this.dark = dark;
        this.gold = gold;
    }
    white() {
        console.log(`theme set to ${this.light}`)
    }
}

const lightTheme = new Theme('light');
console.log(lightTheme);