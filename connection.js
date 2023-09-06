const mysql = require('mysql2');
const config = require('./dbConfig');
const  sshClient  = require('ssh2').Client;

const connection = module.exports = function(){};

createDBConnection = function(){
    const mysqlConnection = mysql.createConnection({
        host:config.mySQLConfig.host,
        user:config.mySQLConfig.user,
        password:config.mySQLConfig.password,
        database:config.mySQLConfig.database,
        connectTimeout:config.mySQLConfig.connectTimeout

    })
    return mysqlConnection;
}

connection.invokeQuery = function(sqlQuery,data){
    const ssh = new sshClient();
    ssh.connect(config.sshTunnelConfig);
    ssh.on('ready',function(){
        ssh.forwardOut(
            config.localhost,
            config.mySQLConfig.timeuot,
            config.localhost,
            config.mySQLConfig.port,
            function(err,stream){
                if(err) handleSSHError(err);
                config.mySQLConfig.stream = stream;
                const db = mysql.createConnection(config.mySQLConfig);
               // console.log(db)
                db.query(sqlQuery,  function(err,rows){
                    if(rows){
                       console.log(rows)
                        data(rows);
                    }
                    if(err){handleMySQLError(err)}
                })
            }
        )
    })
}