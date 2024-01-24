// Validation
interface ValidatingObject {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(ValidatingInput: ValidatingObject) {
    let isValid = true;

    if (ValidatingInput.required) {
        isValid = isValid && ValidatingInput.value.toString().trim().length !== 0;
    } 
    if (ValidatingInput.minLength != null && typeof ValidatingInput.value === 'string') {
        isValid = isValid && ValidatingInput.value.length >= ValidatingInput.minLength
    } 
    if (ValidatingInput.maxLength != null && typeof ValidatingInput.value === 'string') {
        isValid = isValid && ValidatingInput.value.length <= ValidatingInput.maxLength
    } 
    if (ValidatingInput.min != null && typeof ValidatingInput.value === 'number') {
        isValid = isValid && ValidatingInput.value >= ValidatingInput.min
    } 
    if (ValidatingInput.max != null && typeof ValidatingInput.value === 'number') {
        isValid = isValid && ValidatingInput.value <= ValidatingInput.max
    }

    return isValid
}

// autobind deorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescritpor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescritpor;
}

class ProjectInput {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement

        this.configure();
        this.attach();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: ValidatingObject = {
            value: enteredTitle,
            required: true,
        }
        const descriptionValidatable: ValidatingObject = {
            value: enteredDescription,
            required: true,
            minLength: 5
        }
        const peopleValidatable: ValidatingObject = {
            value: enteredPeople,
            required: true,
            min: 1,
            max: 5
        }

        if (
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)
        ) {
            alert('Invalid Input');
            return;
        } else {
            return [enteredTitle, enteredDescription, Number(enteredPeople)]
        }

    }

    private clearInputValue() {
        this.titleInputElement.value = ''
        this.descriptionInputElement.value = ''
        this.peopleInputElement.value = ''
    }

    @autobind //hace falta que le agreguemos este decorator, porque sino el 'this' va a hacer referencia a otra cosa diferente a la clase, y nosotros necesitamos que haga referencia a la clase.
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(title, description, people);
            this.clearInputValue();
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    private attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element)
    }
}

const prjInput = new ProjectInput()