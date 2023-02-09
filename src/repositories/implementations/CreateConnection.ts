import { createConnection } from "mysql2";
import Connection from "mysql2/typings/mysql/lib/Connection";

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'testdb'
});

connection.connect((error) => {
    if(error) {
        console.error('error connecting: ' + error.stack);
        return
    }

    console.log('connected as id ' + connection.threadId);
});

const checkCrendetials = (conn: Connection, user: string, password: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const query = `SELECT COUNT(*) as count FROM users WHERE user = '${user}' AND password = '${password}'`;
        conn.query(query, (err, results) => {
            if(err) {
                reject(err);
            }
            resolve(results);
        });
    });
  };

  checkCrendetials(connection, 'user', 'password')
  .then((isValid) => {
    console.log(`Login e senha são válidos: ${isValid}`);
  })
  .catch((err) => {
    console.error(err);
  });

