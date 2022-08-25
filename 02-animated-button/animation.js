function Press(anchor) {
  let txtElement = anchor.querySelector("span");

  let icon = anchor.querySelector("div");

  txtElement.textContent = "Processing";

  icon.className = "custom-loader";

  setTimeout(function () {
    txtElement.textContent = "Success";

    icon.className = "fa-solid fa-circle-check";

    setTimeout(function () {
      txtElement.textContent = "Download";

      icon.className = "fa-solid fa-download";
    }, 10000);
  }, 4000);
}
