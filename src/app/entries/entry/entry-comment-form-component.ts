import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// local imports
import { EntryService } from '../shared/entry.service';

@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form-component.html'
})
export class EntryCommentFormComponent {
    name: string = "";
    comment: string = "";
    @ViewChild('commentForm') commentForm: NgForm;
    @Input() entryId: number;
    @Output() onCommentAdded = new EventEmitter<{ name: string, comment: string; }>();

    constructor(private entryService: EntryService) {

    }

    onSubmit(commentForm: NgForm) {
        let comment = { name: this.name, comment: this.comment }
        this.entryService.addComment(this.entryId, this.comment)
            .then(() => {
                this.onCommentAdded.emit(comment);
                this.commentForm.resetForm();
            });

        this.onCommentAdded.emit(comment);
        this.commentForm.resetForm();
    }
} // ends class