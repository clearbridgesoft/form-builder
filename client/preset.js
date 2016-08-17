import deepcopy from 'deepcopy';


let preset = {};

preset.object = {
    "JSONSchema":{
        "type": "object",
        "title": "Object Name"
    }
};

preset.array = {
    "JSONSchema":{
        "type": "array",
        "title": "List",
        "items": {
            "type": "object",
            "title": "List item",
            "properties": {}
        }
    }
};

preset.input = {
    "JSONSchema":{
        "type": "string",
        "title": "Input"
    }
};

preset.email = {
    "JSONSchema":{
        "type": "string",
        "title": "Email",
        "format": "email"
    }
};



preset.checkbox = {
    "JSONSchema":{
        "type": "array",
        "title": "A multiple choices list",
        "items": {
            "type": "string",
            "enum": [
                "1",
                "2",
                "3"
            ],
            "enumNames": [
                "one",
                "two",
                "three"
            ]
        },
        "uniqueItems": true
    },
    "UISchema":{
        "ui:widget": "checkboxes"
    }
};

preset.radio = {
    "JSONSchema":{
        "type": "boolean",
        "title": "radio buttons"
    },
    "UISchema":{
        "ui:widget": "radio"
    }
};

preset.textarea = {
    "JSONSchema":{
        "type": "string",
        "title": "Textarea"
    },
    "UISchema":{
        "ui:widget": "textarea"
    }
};

preset.date = {
    "JSONSchema":{
        "type": "string",
        "title": "Date",
        "format": "date"
    }
};

preset.datetime = {
    "JSONSchema":{
        "type": "string",
        "title": "Datetime",
        "format": "datetime"
    }
};

preset.wysiwyg = {
    "JSONSchema":{
        "type": "string"
    },
    "UISchema":{
        "ui:field":"wysiwyg"
    }
};

/*
preset.paymentStatus = builc({
    type: 'string',
    title: 'Payment Status',
    default: {
        total: 0,
        balance: 0,
        paymentStatus: '',
        purchase: false
    }
},{
    'ui:widget': 'paymentStatus'
});
*/
/*
Object.defineProperty(loader,'input',{
    get: function(){
        return deepcopy(preset['input']);
    }
});

Object.defineProperty(loader,'checkbox',{
    get: function(){
        return deepcopy(preset['checkbox']);
    }
});
*/



export default preset;
