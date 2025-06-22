function wolfMode() {
  getAllTextNodes().forEach(function (node) {
    node.nodeValue = node.nodeValue.replace(
      new RegExp("[a-zA-z]+", "g"),
      function (text) {
        switch (text.length) {
          case 1:
            return "A";
          case 2:
            return "AW";
          default:
            return "AW" + "O".repeat(text.length - 2);
        }
      },
    );
  });
}

function foxMode() {
  getAllTextNodes().forEach(function (node) {
    node.nodeValue = node.nodeValue.replace(
      new RegExp("[a-zA-z0-9]", "g"),
      "A",
    );
  });
}

function getAllTextNodes() {
  var result = [];
  (function scanSubTree(node) {
    if (node.childNodes.length)
      for (var i = 0; i < node.childNodes.length; i++)
        scanSubTree(node.childNodes[i]);
    else if (node.nodeType == Node.TEXT_NODE) result.push(node);
  })(document);
  return result;
}

let typedChars = [];

document.onkeypress = function (e) {
  e = e || window.event;
  var charCode = typeof e.which == "number" ? e.which : e.keyCode;
  if (charCode) {
    typedChars.push(String.fromCharCode(charCode));
    while (typedChars.length > 4) {
      typedChars.shift();
    }
    if (typedChars.toString() === "w,o,l,f") {
      wolfMode();
    }
    if (
      typedChars.slice(Math.max(typedChars.length - 3, 0)).toString() ===
      "f,o,x"
    ) {
      foxMode();
    }
  }
};

// 12 hours, measured in milliseconds
const storeTime = 1000 * 60 * 60 * 12;
const getStoredTheme = () => {
  let theme = localStorage.getItem("theme");
  let themeTime = localStorage.getItem("themetime");

  if (parseInt(themeTime) + storeTime < Date.now()) {
    return null;
  }

  return theme;
};
const setStoredTheme = (theme) => {
  localStorage.setItem("theme", theme);
  localStorage.setItem("themetime", Date.now());
};

function darkMode(checkbox) {
  if (checkbox.checked) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    setStoredTheme("dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
    setStoredTheme("light");
  }
}

let gae = false;
if (window.location.search == "?gay") {
  document.documentElement.style.setProperty("--gayness", "100%");
  document.documentElement.style.setProperty("--straightness", "0%");
  gae = true;
}

window.onload = function () {
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    if (theme === "auto") {
      document.documentElement.setAttribute(
        "data-bs-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
      document.getElementByClassName("darkmode-toggle")[0].checked =
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
      document.getElementsByClassName("darkmode-toggle")[0].checked =
        theme == "dark";
    }
  };

  setTheme(getPreferredTheme());

  // Change theme if it's changed in the OS
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });

  // Gay links
  if (gae) {
    let links = document.links;
    for (var i = 0; i < links.length; i++) {
      if (
        links[i].href.startsWith(window.location.origin) &&
        !links[i].href.endsWith("?gay")
      ) {
        links[i].href = links[i].href + "?gay";
      }
    }
  }

  // Title shenanigans
  let interval = null;
  let interval2 = null;
  let ogtitle = "Gauss";

  document.querySelector(".hover-uppercase").onmouseover = (event) => {
    let iteration = 0;
    let egg = Math.random() >= 0.5 ? "puppy" : "cutie";

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (iteration < 0.66) {
            return egg[index];
          }
          if (index < iteration) {
            return ogtitle[index];
          }

          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");

      if (gae) {
        document.documentElement.style.setProperty(
          "--head-transparency",
          1 - iteration / ogtitle.length,
        );
      }
      if (iteration >= ogtitle.length) {
        clearInterval(interval);
        interval = null;
      }

      iteration += 1 / 3;
    }, 30);
  };
  document.querySelector(".hover-uppercase").onmouseleave = (event) => {
    let iteration = 0;

    clearInterval(interval2);

    interval2 = setInterval(() => {
      if (interval == null) {
        if (gae) {
          document.documentElement.style.setProperty(
            "--head-transparency",
            iteration / ogtitle.length,
          );
        }
        if (iteration >= ogtitle.length) {
          clearInterval(interval2);
        }

        iteration += 1 / 3;
      }
    }, 30);
  };
};
