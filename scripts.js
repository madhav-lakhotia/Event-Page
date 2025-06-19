<script>
    document.addEventListener("DOMContentLoaded", function () {
        const hiddenElements = document.querySelectorAll(".hidden");

        function scrollEffect() {
            let scrollPosition = window.scrollY + window.innerHeight;
            hiddenElements.forEach((element) => {
                let elementPosition = element.offsetTop + element.clientHeight / 3;
                
                let scrollFactor = (scrollPosition - elementPosition) / window.innerHeight;
                
                if (scrollFactor > 0) {
                    let translateValue = Math.max(50 - scrollFactor * 50, 0); 
                    element.style.transform = `translateY(${translateValue}px)`;
                    element.style.opacity = Math.min(scrollFactor * 1.2, 1);
                }
            });
        }

        window.addEventListener("scroll", scrollEffect);
        scrollEffect();
    });
</script>
