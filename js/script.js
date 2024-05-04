const customMouseTracker = document.querySelector('[data-custom-mouse-tracker]');

document.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    customMouseTracker.style.setProperty("--x", x + "px");
    customMouseTracker.style.setProperty("--y", y + "px");
})