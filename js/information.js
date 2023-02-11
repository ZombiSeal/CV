if (window.innerWidth >= 992) {

    let sections = document.querySelectorAll(".section");
    console.log(sections);

    sections.forEach((section) => {
        section.addEventListener("click", () => {

            section.classList.add("section_active");
        });

    })

    let closeBtns = document.querySelectorAll(".section-back__close");
    closeBtns.forEach((btn, i) => {
        btn.addEventListener("click", (e) => {

            sections[i].classList.remove("section_active");
            e.stopPropagation()

        })
    })
}


