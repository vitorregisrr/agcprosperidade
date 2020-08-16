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