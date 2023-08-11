const useSmoothScrollToSection = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = -70;
            const top = section.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return scrollToSection;
};

export default useSmoothScrollToSection;