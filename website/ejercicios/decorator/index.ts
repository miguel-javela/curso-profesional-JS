class Field {
    errors: string[];
    input: HTMLInputElement;
  
    constructor(input: HTMLInputElement) {
      this.input = input;
      this.errors = [];
  
      let errorMessage = document.createElement('p');
      errorMessage.className = 'text-danger';
      this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);
  
      this.input.addEventListener('input', () => {
        this.errors = [];
        this.validate();
        errorMessage.innerText = this.errors[0] || '';
      });
    }
  
    validate() {}
  }

function RequiredFieldDecorator(field:Field):Field{
    let validate = field.validate;
    field.validate = function (){
        //esto se debe hacer de primero porque este decorador no sabe que ha ocurrido antes de que field pasara por aqui
        //por lo que es posible que otro decorador haya hecho esa misma tecnica, asi que se le da prioridad
        validate();
        let value = field.input.value;
        if(!value){
            field.errors.push("requerido")
        }
    }
    return field;
  }

function EmailFieldDecorator(field:Field):Field{
    let validate = field.validate;
    field.validate = function (){
        //esto se debe hacer de primero porque este decorador no sabe que ha ocurrido antes de que field pasara por aqui
        //por lo que es posible que otro decorador haya hecho esa misma tecnica, asi que se le da prioridad
        validate();
        let value = field.input.value;
        if(value.indexOf("@") === -1){
            field.errors.push("debe ser un email")
        }
    }
    return field;
}
  
let field = new Field(document.querySelector('#email'))
EmailFieldDecorator(RequiredFieldDecorator(field));