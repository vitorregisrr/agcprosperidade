// Formulário acessar (LOGIN)
$("#form-login").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minLength: 6
        },
    },

    messages: {
        password: {
            required: "Digite sua senha",
            minLength: "Sua senha deve ter no mínimo 6 caractéres"
        },

        email: {
            required: 'Digite seu email',
            email: 'Email inválido'
        },
    }
});