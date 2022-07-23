
let s = document.getElementById("google-translate-injection");
if (s !== null) {
    s.remove();
}

s = document.createElement("script");
let user_lang = "zh-CN";

s.id = "google-translate-injection";
s.src = `./google/injection.js`;
s.setAttribute("user-lang", user_lang);
s.setAttribute("edge-translate-url", './');
document.getElementsByTagName("head")[0].appendChild(s);
    