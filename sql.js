const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sqlite-test');

db.serialize(() => {
    db.run("CREATE TABLE feedback (info TEXT)");

    const stmt = db.prepare("INSERT INTO feedback VALUES (?)");
    stmt.finalize();
});

const gravar = (texto) => {
    db.run("INSERT INTO feedback VALUES (?)", texto)
}

module.exports = { gravar };