export const variants = {
    start: {
        scale: 1.1,
    }
    , end: {
        scale: 1,
    }
}

export const variantsFull = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.3,
        }
    }
}
export const items = {
    hidden: { rotateX: 180,},
    visible: {
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 1.3,
            ease: "easeInOut",
        }
    }
}