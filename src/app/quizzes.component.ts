import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component ({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})

export class QuizzesComponent {

    quizzes = [];

    constructor(private api: ApiService) {

    }

    ngOnInit() {

        this.api.getQuizzes().subscribe(res => this.quizzes = res);
    }

}