const { status } = require("express/lib/response");
const db = require("../services/db");

class SantaList {

    constructor(
        uid, 
        message,
      ){
      this.uid = uid;
      this.message = message;
  }
  
    async save() {
        let sql = `INSERT INTO email (uid, message) VALUES(?, ?);`;
        const [result, _] = await db.execute(sql, [this.uid, this.message]);
        return result;
    }

    static list_email() {
        let sql = `SELECT * FROM email`;
      return db.execute(sql);
    }

    static async update_email_status(id) {
      let sql = `UPDATE email set sent = '1' WHERE id = ?`;
      return await db.execute(sql, [id]);
    }

    static async check_child_status(username) {
      let sql = `SELECT uid, username, address, TIMESTAMPDIFF(YEAR , metaData.birthdate, CURRENT_TIMESTAMP()) as age FROM sql6519994.children LEFT JOIN sql6519994.metaData ON children.uid = metaData.userUid WHERE username = ?`;
      return await db.execute(sql, [username]);
    }

    static get_email() {
        let sql = `SELECT * FROM email WHERE sent = 0 LIMIT 1;`;
        return db.execute(sql);
    }

    static async update_status_email(id, status) {
      let sql = `UPDATE email SET sent = ? WHERE id = ?;`;
      return await db.execute(sql, [status, id]);
    }
  }
  
  module.exports = SantaList;
  