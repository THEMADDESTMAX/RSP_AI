'use strict';

const SCISSORS = 0;
const STONE = 1;
const PAPER = 2;

const WIN_USER = 0;
const DRAW = 1;
const LOSE_USER = 2;

const WINNING_MAP = {};
WINNING_MAP[SCISSORS] = PAPER;
WINNING_MAP[STONE] = SCISSORS;
WINNING_MAP[PAPER] = STONE;

class GameController {

    constructor(userChoise) {
        if (!(0 <= userChoise <= 2)) throw new Error("wrong number");
        this.currentComputerChoice = null;
        this.winner = null;
        this.currentUserChoice = userChoise;
    }

    generateValue() {
        let result = Math.round(Math.random() * 2);
        this.currentComputerChoice = result;
    }

    getWinner() {
        if (this.currentComputerChoice === this.currentUserChoice)
            this.winner = DRAW;
        if (WINNING_MAP[this.currentUserChoice] === this.currentComputerChoice)
            this.winner = WIN_USER;
        if (WINNING_MAP[this.currentComputerChoice] === this.currentUserChoice)
            this.winner = LOSE_USER;
    }
}

module.exports = GameController;
