const obserber = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenelement = document.querySelectorAll(".hi");
  hiddenelement.forEach((el) => obserber.observe(el));