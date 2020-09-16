// Formulário acessar (LOGIN)
$("#form-newsletter").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nome: {
            required: true,
            minLength: 6
        },
    },

    messages: {
        password: {
            required: "Digite seu nome",
            minLength: "Seu nome deve ter no mínimo 4 caractéres"
        },

        email: {
            required: 'Digite seu email',
            email: 'Email inválido'
        },
    }
});

// Formulário acessar (LOGIN)
$("#popup-contact-form").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nome: {
            required: true,
        },
        sobrenome: {
            required: true,
        },
        empresa: {
            required: true,
        },
        siteempresa: {
            required: true,
        },
        email: {
            required: true,
        },
        cargo: {
            required: true,
        },
        mensagem: {
            required: true,
        },
    },

    messages: {
    }

});
// Formulário banner campanha 3
$("#form-campanha-3").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nome: {
            required: true,
        },
        sobrenome: {
            required: true,
        },
        empresa: {
            required: true,
        },
        cidade: {
            required: true,
        },
        termos: {
            required: true,
        },
    },

    messages: {
    }
});

// Formulário banner campanha subscribe
$("#subscribe-form").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nome: {
            required: true,
        },
    },

    messages: {
    }
});