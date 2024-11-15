document.addEventListener("DOMContentLoaded", function () {
  adjustMainContentSize();
});

window.addEventListener("resize", function () {
  adjustMainContentSize();
});

function adjustMainContentSize() {
  console.log("adjustMainContentSize");
  var mdContainer = document.querySelector(".md-container");
  var mainContent = document.querySelector(".content");
  var mdTabs = document.querySelector(".md-tabs");

  if (mdContainer && mainContent && mdTabs) {
    mainContent.style.width = mdContainer.offsetWidth + "px";
    mainContent.style.height =
      mdContainer.offsetHeight - mdTabs.offsetHeight + "px";
  }
}
