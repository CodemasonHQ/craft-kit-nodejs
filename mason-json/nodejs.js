module.exports = {
    name: 'app', 
    build: '.',
    base: 'codemasonhq/nodejs', 
    type: 'service',
    volumes: {
        './':'/app',
    },
    ports: [
        "3000:3000",
    ],
}