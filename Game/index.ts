console.log("IT WORK")

import { readFileSync } from 'fs'
import { join } from 'path'
import { GameMap } from './models/game_map'
const filePath = join(__dirname, 'data/input.txt')

console.log("FILE PATH =>", filePath)

const file:Array<string> = readFileSync(filePath, {encoding:'utf8', flag:'r'}).split("\n");
console.log("FILE =>", file)

// INITIAL SCENARIO CONST // 
/*
const survivors_number = 0;
const zombies_number = 0;
const items_number = 0;
const map_size = 0;
const instrucion_number = 0;
*/

const loadScenarioDefinition = (scenarioLine:string): void => {
    // it requires first file line to get values
    console.log(`Load scenario from data: ${scenarioLine}`);
    const scenarioItems = scenarioLine.split(" ");
    const survivors_number = scenarioLine[0];
    const zombies_number = scenarioLine[1];
    const items_number:number = Number(scenarioLine[2]);
    const map_size:number = Number(scenarioLine[3]);
    const instrucion_number = scenarioLine[4];

    const map = new GameMap(map_size);
}

var lineNumber:number = 0;
for (const line in file) {
    // first line describe always scenario
    // lines of 5 elements describe survivors - the next line describe its equipment
    // lines of 3 elements describe zombies
    if (lineNumber == 0)
        loadScenarioDefinition(file[line]);
        lineNumber++
        continue;

    
}