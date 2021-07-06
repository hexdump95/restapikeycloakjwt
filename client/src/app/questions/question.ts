import { Answer } from "./answer";

export class Question {
    id!: number;
    question!: string;
    answerList!: Answer[];
}
