export class ValidacionService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Campo requerido',
            'invalidEmailAddress': 'E-mail invalido',
            'invalidTelefono' : 'Telefono invalido',
            'minlength': `Minimo digitos ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
    static numerValidator(control){
        if (control.value.match(/[0-9]/)){
            return null
        }
        else {
            return {'invalidTelefono': true}
        }

    }
}