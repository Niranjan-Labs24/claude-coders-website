const contentful = require('contentful')

const client = contentful.createClient({
    space: 'bfbn52xp5mj7',
    environment: 'master',
    accessToken: 'mYSWVcQpUPGZrCpiE-JeYMOuZTIx1FcCnNvaABBKkLg'
})

client.getEntry('6cLJ2Z54oY6ooBQa7oyL26')
    .then((entry) => console.log(JSON.stringify(entry, null, 2)))
    .catch(console.error)
