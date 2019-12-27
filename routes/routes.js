const userRoutes = (app, fs) => {

    // variables
    const dataPath = './data/movies.json';

    // READ
    app.get('/movies', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = userRoutes;