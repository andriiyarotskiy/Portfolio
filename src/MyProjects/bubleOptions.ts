export const paramsBubble: { [key: string]: any } = {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "color": {
            "value": ["#eb4d4b", "#e056fd", "#f9ca24", "#686de0", "#badc58", "#7ed6df"],
        },
        "opacity": {
            "value": 0,
            "random": false,
            "anim": {
                "enable": 0.5,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false,
            },
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 20,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200,
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                },
            },
            "bubble": {
                "distance": 200,
                "duration": 2,
                "size": 40,
                "opacity": 1, // opacity on hover
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}