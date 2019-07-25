module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "O0ps someone got chocolate in my penut butter!"
        });
            console.log(err)
        })
      },
    getOne: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "OOps someone got penut butter in my chocolate!"
        });
        console.log(err)
        })
    },
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "OOps someone got J in my PB!"
        });
        console.log(err)
        })
    },
    update: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops someone got PB in my J!"
        });
        console.log(err)
        })
    },
    delete: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Whoa! Turn out we couldn't delete that PBJ"
    });
    console.log(err)
      });
    }
}