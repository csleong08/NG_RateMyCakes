const {Cake, Reviews} = require("./models.js")

module.exports = 
{
    // getall
    allCakes: (req,res) => 
    {
        console.log("all cakes in controller")
        Cake.find({})
            .then(cake=>console.log(cake)||res.json(cake))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    // new task
    createCake: (req,res) => 
    {
        console.log("create cake in controller")
        Cake.create(req.body)
            .then(cake=>console.log(cake)||res.json(cake))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    // one task
    showCake: (req,res) => 
    {
        console.log("one cake in controller");
        Cake.findById(req.params.id)
                .then(cake=>console.log(cake)||res.json(cake))
                .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateCake: (req,res) => 
    {
        console.log("update cake in controller");
        console.log(req.body);
        Cake.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then(cake=>console.log(cake)||res.json(cake))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    rateCake: (req,res) => 
    {
        console.log("rateCake in controller")
        Reviews.create(req.body)
        .then(cake => {
            Cake.findByIdAndUpdate({_id : req.params.id }, {$push : {reviews : cake}})
                .then(cake=>console.log(cake)||res.json(cake))
                .catch(errs=>console.log(errs)||res.json(errs))
            }
        )
        .catch(errs=>console.log("createReview error")||res.json(errs))
    },

    // deleteCake: (req,res) =>
    // {
    //     console.log("delete cake in controller")
    //     Cake.findByIdAndRemove(req.params.id)
    //         .then(cake=>console.log(cake)||res.json(cake))
    //         .catch(errs=>console.log(errs)||res.json(errs))
    // }
}