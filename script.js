let tl = gsap.timeline();

tl
    .from("h1:nth-child(4)", {
        onStart: () => {
            $('h1:nth-child(4)').textillate(
                {
                    in: {
                        effect: 'fadeInUp',
                        callback: () => {
                            $('h1:nth-child(4)').textillate('out');
                        }
                    },
                    out: { effect: 'fadeOutUp' }
                },
            );
        }
    })
    .from("h1:nth-child(3)", {
        opacity: 0,
        delay: .7,
        onStart: () => {
            $('h1:nth-child(3)').textillate(
                {
                    in: {
                        effect: 'fadeInUp',
                        callback: () => {
                            $('h1:nth-child(3)').textillate('out');
                        }
                    },
                    out: { effect: 'fadeOutUp' }
                },
            );
        }
    })
    .from("h1:nth-child(2)", {
        opacity: 0,
        delay: .7,
        onStart: () => {
            $('h1:nth-child(2)').textillate(
                {
                    in: {
                        effect: 'fadeInUp',
                        callback: () => {
                            $('h1:nth-child(2)').textillate('out');
                        }
                    },
                    out: { effect: 'fadeOutUp' }
                },
            );
        }
    })
    .from("h1:nth-child(1)", {
        opacity: 0,
        delay: .7,
        onStart: () => {
            $('h1:nth-child(1)').textillate(
                { in: { effect: 'fadeInUp' } },
            );
        }
    })
    .to(".loader", {
        top: "-100%",
        duration: 1,
        delay: .3,
        ease: "Power4.easeOut"
    })
