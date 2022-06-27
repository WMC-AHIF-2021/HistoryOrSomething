var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function switchToDark() {
    window.localStorage.setItem("mode", "dark");
    document.body.classList.add("dark-mode");
}
function switchToLight() {
    window.localStorage.setItem("mode", "light");
    document.body.classList.remove("dark-mode");
}
// After page loaded check if user is logged in
document.addEventListener('DOMContentLoaded', () => __awaiter(this, void 0, void 0, function* () {
    if (window.localStorage.getItem("mode") == "light") {
        switchToLight();
    }
    else {
        switchToDark();
    }
}));
//# sourceMappingURL=game.js.map