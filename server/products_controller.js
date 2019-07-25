module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;


        dbInstance.create_product([ name, description, price, image_url ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "O0ps someone got chocolate in my penut butter!"
        });
            console.log(err)
        })
      },
    getOne: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.read_product(id)
        .then( product => res.status(200).send( product ) )
        .catch( err => {
            res.status(500).send({errorMessage: "OOps someone got penut butter in my chocolate!"
        });
        console.log(err)
        })
    },
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then( products => res.status(200).send( products ) )
        .catch( err => {
            res.status(500).send({errorMessage: "OOps someone got J in my PB!"
        });
        console.log(err)
        })
    },
    update: (req,res,next) => {
        const dbInstance = req.app.get('db');
        //The following line is destructuring params and query off of the req that is received from the database
        const { params, query } = req;

        dbInstance.update_product([ params.id, query.desc ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops someone got PB in my J!"
        });
        console.log(err)
        })
    },
    delete: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_product( id )
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Whoa! Turns out we couldn't delete that PBJ"
    });
    console.log(err)
      });
    }
}