import fs from 'fs'

const dbFile = './database.json';

export function readDatabase() {
  return JSON.parse(fs.readFileSync(dbFile));
}

export function saveDatabase(db) {
  fs.writeFileSync(dbFile, JSON.stringify(db));
}