/*
============================================
; Title:  Assignment 3.2 index.js
; Author: Janis Gonzalez
; Date:   1/22/2023
; Description: console display of teams
;===========================================
*/

const teamManager = require("./team-manager.js");

function displayTeams() {
    let arrayOfTeams = teamManager.findTeams();
    let teams = "-- DISPLAYING TEAMS --";
    arrayOfTeams.forEach(team => {
        teams += "\n";
        teams += "Name: " + team.name + "\n";
        teams += "Mascot: " + team.mascot + "\n";
        teams += "Player Count: " + team.playerCount;
        teams += "\n"
    });

    return teams;
}

function displayChampionshipGame() {
    // randomTeam = Math.floor(Math.random() * 5);
    let teamOne = teamManager.findTeam("Penn State");
    let teamTwo = teamManager.findTeam("Iowa State");
    let championshipGameString = "--CHAMPIONSHIP GAME --";
    championshipGameString += "\n";
    championshipGameString += teamManager.getGame(teamOne, teamTwo);
    return championshipGameString;

}

console.log(displayTeams(), "\n", displayChampionshipGame());