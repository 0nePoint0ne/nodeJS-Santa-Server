const db = require("../services/db");

class Children {

    constructor(
        uid, 
        username,
      ){
      this.uid = uid;
      this.message = username;
  }
  
    async save() {
        let sql = `INSERT children (uid, username,) VALUES(?, ?);`;
        const [result, _] = await db.execute(sql, [this.uid, this.username]);
        return result;
    }

    static list_children() {
        let sql = `SELECT uid, username, address, TIMESTAMPDIFF(YEAR , metaData.birthdate, CURRENT_TIMESTAMP()) as age FROM sql6519994.children LEFT JOIN sql6519994.metaData ON children.uid = metaData.userUid`;
        return db.execute(sql);
    }

    static async get_child(username) {
        let sql = `SELECT * FROM children WHERE username = ?;`;
        const result = await db.execute(sql,[username]);
      return result;
    }
  }
  
  module.exports = Children;
  