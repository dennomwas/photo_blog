import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent {
    title: string = "My First Photo";
    image: string = "http://placehold.it/800x500?text=Angular Basics";
    description: string = "A description of my first photo";
    comments: any[] = [
        { name: "John", comment: "The first comment" },
        { name: "James", comment: "The second comment" },
        { name: "Dennis", comment: "The third comment" },
        { name: "Lio", comment: "The fourth comment" }
    ]
}
