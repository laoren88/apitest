module.exports = (app, db) => {
    app.get( "/jobs", (req, res) =>
        // console.log("LWLWLLWL")

        console.log(db.jobs)
        // db.jobs.findaAll()
        //     .then( 
        //         (result) => res.json(result)
        //     )
    );

    app.post( "/save", (req, res) =>
        db.jobs.create({
            subject: req.body.subject,
            status: req.body.status
        }).then( (result) => res.json(result) )
    );

    app.put( "/update", (req, res) => 
        db.jobs.update({
            subject: req.body.title,
            status: req.body.content
        }, {
            where: {
                id: req.params.id
            }
        })
    );

    app.delete( "/delete", (req, res) => 
        db.jobs.destroy({
            where: {
                id: req.params.id
            }
        }).then( (result) => res.json(result) )
    );
}