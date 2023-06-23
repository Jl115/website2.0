const observ = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('see');
        } else {
            entry.target.classList.remove('see')
        }
    });
});

const hiddenE = document.querySelectorAll('.hidden');
hiddenE.forEach((element) => observ.observe(element));