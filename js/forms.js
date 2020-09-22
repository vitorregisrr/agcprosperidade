jQuery.extend(jQuery.validator.messages, {
    required: "Este campo é obrigatório.",
    email: "E-mail inválido.",
    number: "Por favor insira um número válido.",
    maxlength: jQuery.validator.format("Por favor insira no máximo {0} caracteres."),
    minlength: jQuery.validator.format("Por favor insira no minímo {0} caracteres."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Por favor insira entre {0} e {1} caractéres.")
});


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
        termos: "Você precisa aceitar os termos para prosseguir."
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

// Formulário landing page 1
$("#form-landing-1").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nome: {
            required: true,
        },
        empresa: {
            required: true,
        },
        site: {
            required: true,
        },
        tiponegocio: {
            required: true,
        },
        cargo: {
            required: true,
        },
    },

    messages: {
    }
});

// Formulário orcamento 2
$("#form-orcamento-2").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        nome: {
            required: true,
        },
        empresa: {
            required: true,
        },
        site: {
            required: true,
        },
        mensagem: {
            required: true
        },
        termos: {
            required: true
        }
    },

    messages: {
        termos: "Você precisa aceitar os termos para prosseguir."
    }
});