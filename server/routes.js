const bp = require("body-parser");
const api = require("./controller.js");

function routes(app)
{
    app.use(bp.json());
    app.get("/cakes", api.allCakes);
    app.get("/cakes/:id", api.showCake);
    app.post("/cakes", api.createCake);
    app.post("/reviews/:id", api.rateCake);
    // app.put("/cakes/:id", api.updateCake);
    // app.delete("/cakes/:id", api.deleteCake);
    return app;
}

module.exports = routes;