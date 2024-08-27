const env = {
    database: process.env.database|'apis_re0f', // Nombre de la base de datos
    user: 'apis_re0f_user', // Usuario de la base de datos
    password: '4ryV3j9FP4aEbJqXKjmzEV68nW4FjDva', // Contraseña del usuario
    host: 'dpg-cr6fffbqf0us73alch70-a.oregon-postgres.render.com', // Host del servidor
    dialect: 'postgres', // Dialecto de la base de datos
    pool: {
        max: 5, // Máximo de conexiones en el pool
        min: 0, // Mínimo de conexiones en el pool
        acquire: 30000, // Tiempo máximo, en milisegundos, que el pool intentará obtener una conexión antes de lanzar un error
        idle: 10000 // Tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    },
    dialectOptions: {
        ssl: {
            require: true, // Necesita SSL
            rejectUnauthorized: false // Permitir certificados no autorizados
        }
    }
};

module.exports = env;
