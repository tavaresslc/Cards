particlesJS("background", {

    particles: {
        number: {
            value: 15, // Número de partículas (contagem)
            density: {
                enable: true,
                value_area: 300, // Área onde as partículas serão distribuídas
            },
        },

        color: {
            value: "#ffffff", // Cor das partículas
        },
        shape: {
            type: "triangle", // Tipo de forma
        },
        opacity: {
            value: 0.8, // Opacidade básica de partículas
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, // Tamanho base das partículas
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        // Linhas de conexão
        line_linked: {
            enable: true,
            distance: 150, // Distância máxima entre partículas ligadas
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        // Movimento da partícula
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Comportamento quando as partículas saem da tela
            bounce: false,
        },
    },
    // Configurações de interatividade
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, // Ativar interatividade instantânea
                mode: "repulse",
            },
            onclick: {
                enable: true, // Habilitar para clique
                mode: "push", // Empurrar partículas ao clicar
            },
            resize: true, // Redimensionar animação de partículas no redimensionamento da janela
        },
    },

    // Detectar telas de retina
    retina_detect: true,

});