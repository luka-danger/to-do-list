import { render } from "./Render";

export function makeUI() {
    let openDialog = document.createElement('dialog');
    openDialog.className = 'dialog-box';
    document.body.appendChild(openDialog)

    openDialog.showModal();

    let webForm = document.createElement('form');
    webForm.className = 'web-form';
    openDialog.appendChild(webForm)

    let titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.required = true;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.name = 'description';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'due-date';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit-btn'
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', render)

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';

    webForm.append(titleLabel, titleInput, descriptionLabel, descriptionInput, dueDateLabel, dueDateInput, submitButton, cancelButton);
}

