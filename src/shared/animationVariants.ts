export const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const modalVariants = {
    hidden: { opacity: 0, y: "-50px", scale: 0.8 },
    visible: { opacity: 1, y: "0", scale: 1 },
    exit: { opacity: 0, y: "50px", scale: 0.8 },
};