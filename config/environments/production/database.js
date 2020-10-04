module.exports = ({env}) => {
  return {
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": `${process.env.DATABASE_HOST}`,
        "port": `${process.env.DATABASE_PORT}`,
        "database": `${pro}`,
        "username": `${process.env.DATABASE_USERNAME}`,
        "password": `${process.env.DATABASE_PASSWORD}`,
        "ssl": { "rejectUnauthorized": false }
      },
      "options": {}
    }
  }
}
}