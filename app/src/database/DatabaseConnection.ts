var mysql = require('mysql2');
class DataBaseConnection {

	public static getInstance(): any {
		const connection = mysql.createConnection({
			host: process.env.DATABASE_HOST,
			port: process.env.DATABASE_PORT,
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE
		});

		connection.connect((err: any) => {
			if (err) {
				console.error('error connecting: ' + err.stack);
				return;
			}
			console.log('connected as id ' + connection.threadId);
		});

		return connection;
	}
}

export default DataBaseConnection.getInstance();