import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'

export interface IQuestion {
    text: string;
    correctAnswer: string;
    answer1: string;
    answer2: string;
    answer3: string;
  }

  export interface IQuiz {
    id: number;
    title: string;
  }

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();


    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    getQuizzes() {
        return this.http.get<IQuiz[]>('http://localhost:62066/api/quizzes');
    }

    getAllQuizzes() {
        return this.http.get<IQuiz[]>('http://localhost:62066/api/quizzes/all');
    }

    getQuestions(quizId) {
        return this.http.get<IQuestion[]>(`http://localhost:62066/api/questions/${quizId}`);
    }

    postQuestion(question) {

        this.http.post('http://localhost:62066/api/questions', question).subscribe(res => {

            console.log(res);
        });
    }

    putQuiz(quiz) {

        this.http.put(`http://localhost:62066/api/quizzes/${quiz.id}`, quiz).subscribe(res => {

            console.log(res);
        });
    }

    putQuestion(question) {

        this.http.put(`http://localhost:62066/api/questions/${question.id}`, question).subscribe(res => {

            console.log(res);
        });
    }

    postQuiz(quiz) {

        this.http.post('http://localhost:62066/api/quizzes', quiz).subscribe(res => {

            console.log(res);
        });
    }

    selectQuestion(question) {

        this.selectedQuestion.next(question);
    }

    selectQuiz(quiz) {

        this.selectedQuiz.next(quiz);
    }
}