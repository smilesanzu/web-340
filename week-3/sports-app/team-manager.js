/*
============================================
; Title:  Assignment 3.2 team-manager.js
; Author: Janis Gonzalez
; Date:   1/22/23
; Description: team functions for assign 3.2
;===========================================
*/
const Team = require("./team");
let moment = require('moment');



function findTeams() {
    let teams = [];
    teams.push(new Team("Penn State", "Nittany Lion", "34"));
    teams.push(new Team("Iowa State", "Cyclone", "30"));
    teams.push(new Team("Los Angeles Rams", "Rampage", "30"));
    teams.push(new Team("Minnesota Vikings", "Viktor", "33"));
    teams.push(new Team("San Francisco 49ers", "Sourdough Sam", "33"));
    return teams;
}

function findTeam(name) {
    let teams = findTeams();
    let selectedTeam = teams.find(team => team.name == name);
    return selectedTeam;
}

function getGame(teamOne, teamTwo) {
    // future date 7 days from the date of today
    let date = moment();
    let formattedDate = date.add(7, 'days').format('L').replace(/\//g, "-");
    let msg = `${teamOne.name} ${teamOne.mascot} is playing ${teamTwo.name} ${teamTwo.mascot}
    on ${formattedDate} at 7:30 PM CST.`;
    return msg;
}

module.exports = { findTeams, findTeam, getGame };