const xp = require("express");
const routes = require("./server/routes.js");
const app = routes(xp());

app.use(xp.static( __dirname + '/angular/dist/angular' ));

routes(app);

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));