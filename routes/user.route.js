module.exports = function(app, _db) {

    app.get('/api/user', function(req, res) {

        _db.collection('teste').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);
        });

    });

    app.post('/api/user', function(req, res) {

        try {
            var collection = _db.collection('teste')

            collection.save(req.body)
                .then(function(result) {
                    res.send(result)
                })
                .catch(function(error) {
                    console.log(error)
                    res.status(500).send(error)
                })

        } catch (error) {
            res.status(500).send(error)

        }
    })
}