import { Task } from './tasks.js';
import { Event } from './events.js';
import { Reminder } from './reminders.js';
import { generateTaskForm } from './type-changer.js';

const entries = [];

export function createNewEntry(e) {
    const formValues = [];

    const formInputs = e.target.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => formValues.push(input.value));

    const type = document.querySelector('#type-selector');
    switch (type.value) {
        case 'task':
            entries.push(new Task(...formValues));
            break;
        case 'event':
            entries.push(new Event(...formValues));
            break;
        case 'reminder':
            entries.push(new Reminder(...formValues));
            break;
    }

    // generateListEntry(entries.slice(-1));

    // reset form but retain default date/time values
    e.preventDefault();
    generateTaskForm();
    type.selectedIndex = 0;
    document.querySelector('#add-item-modal').close();
}