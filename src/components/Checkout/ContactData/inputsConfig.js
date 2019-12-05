
 const inputsConfig = {
    name:{
        inputType : 'input',
        config:{
            type: 'text',
            name:"name",
            placeholder:"Su nombre",
            required: 'required'
        },
        value: '',
        valid: false,
        touched: false
    },
    email:{
        inputType : 'input',
        config:{
            type: 'email',
            name:"email",
            placeholder:"Su E-Mail",
            required: 'required'
        },
        value: '',
        valid: false,
        touched: false
    },
    country:{
        inputType : 'input',
        config:{
            type: 'text',
            name: "country",
            placeholder: "País",
            required: 'required'
        },
        value: '',
        valid: false,
        touched: false
    },
    city:{
        inputType : 'input',
        config:{
            type: 'text',
            name:"city",
            placeholder:"Ciudad",
            required: 'required'
        },
        value: '',
        valid: false,
        touched: false
    }
}

export default inputsConfig;