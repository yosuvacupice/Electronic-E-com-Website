// Section 2 Slider Animation
if (document.getElementById("section_2_slider")) {
    const slider = document.getElementById("section_2_slider");
    const leftFixed = document.querySelector(".section_2_fixed_left img");
    let x = 0;
    let dir = 1;
    function section_2_slide() {
        x += dir * 6;
        slider.style.transform = `translateX(${-x}px)`;
        const maxScroll = slider.scrollWidth - window.innerWidth + 100;
        if (dir === 1) {
            leftFixed.style.opacity = "1";
            slider.style.zIndex = "1";
        }
        if (dir === -1) {
            leftFixed.style.opacity = "0.6";
            slider.style.zIndex = "1";
        }
        if (x >= maxScroll) dir = -1;
        if (x <= 0) dir = 1;
        requestAnimationFrame(section_2_slide);
    }
    section_2_slide();
}

// Support Section
if (document.getElementById("support-section-1-part-1")) {
    const part1 = document.getElementById("support-section-1-part-1");
    const part2Options = document.querySelectorAll(".support-section-1-part-2");
    const part2Container = document.querySelector(".support_section_1_part_2");
    const part3 = document.getElementById("support-section-1-part-3");
    const openBack = document.getElementById("open-support-section-1");
    part1.addEventListener("click", () => {
        part1.style.display = "none";
        part2Container.style.display = "block";
    });
    part2Options.forEach(option => {
        option.addEventListener("click", () => {
            part2Container.style.display = "none";
            part3.style.display = "flex";
        });
    });
    openBack.addEventListener("click", () => {
        part3.style.display = "none";
        part2Container.style.display = "none";
        part1.style.display = "flex";
    });
}

// Dropdown
if (document.querySelector(".dropdown_icon")) {
    const arrows = document.querySelectorAll(".dropdown_icon");
    arrows.forEach(arrow => {
        arrow.addEventListener("click", (e) => {
            e.stopPropagation();
            document.querySelectorAll(".dropdown_content").forEach(box => {
                box.style.display = "none";
            });
            const targetId = arrow.getAttribute("data-target");
            const targetBox = document.getElementById(targetId);
            targetBox.style.display = "block";
        });
    });
    document.addEventListener("click", (event) => {
        const inside = event.target.closest(".dropdown_box");
        if (!inside) {
            document.querySelectorAll(".dropdown_content").forEach(box => {
                box.style.display = "none";
            });
        }
    });
}

// Watches.html
if (
    document.getElementById("watches-section-container") &&
    document.getElementById("watches-section-1-container") &&
    document.getElementById("watches-section-2-container") &&
    document.getElementById("open-watches-section-1-container") &&
    document.getElementById("open-watches-section-2-container")
) {
    const watchesSectionContainer = document.getElementById("watches-section-container");
    const watchesSection_1_container = document.getElementById("watches-section-1-container");
    const watchesSection_2_container = document.getElementById("watches-section-2-container");
    const openWatchesSection_1_container = document.getElementById("open-watches-section-1-container");
    const openWatchesSection_2_container = document.getElementById("open-watches-section-2-container");
    openWatchesSection_1_container.addEventListener("click", () => {
        watchesSectionContainer.style.display = "none";
        watchesSection_1_container.style.display = "block";
    });
    openWatchesSection_2_container.addEventListener("click", () => {
        watchesSection_1_container.style.display = "none";
        watchesSection_2_container.style.display = "flex";
    });
}

// cart.html
function openPage() {
    window.location.href = "watches.html?show=search";
}
if (document.getElementById("watches-section-container")) {
    const url = new URLSearchParams(window.location.search);
    if (url.get("show") === "search") {
        document.getElementById("watches-section-container").style.display = "none";
        document.getElementById("watches-section-2-container").style.display = "none";
        document.getElementById("watches-section-1-container").style.display = "block";
    }

}