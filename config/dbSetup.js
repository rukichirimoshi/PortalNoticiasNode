// Database setup
var conn = connection();
conn.query('CREATE DATABASE IF NOT EXISTS portal_noticias', function (err) {
    if (err) throw err;
    conn.query('USE portal_noticias', function (err) {
        if (err) throw err;
        conn.query('CREATE TABLE IF NOT EXISTS noticias('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'titulo VARCHAR(100) NOT NULL,'
            + 'noticia TEXT NOT NULL,'
            + 'data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,'
            + 'PRIMARY KEY(id)'
            +  ')', function (err) {
                if (err) throw err;
            });
    });
});