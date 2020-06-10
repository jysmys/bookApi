const factoryGirl = require("factory-girl");
const adapter = new factoryGirl.SequelizeAdapter();
const factory = factoryGirl.factory;
const chai = require("chai");
const expect = chai.expect;
const sinonChai = require("sinon-chai");
const chaiSubSet = require("chai-subset");
chai.use(sinonChai);
chai.use(chaiSubSet);

factory.setAdapter(adapter);
factory.cleanUp();
factory.factories = [];

require("../factories")(factory, Models);
const Models = require("../../models");

beforeEach((done) => {
  // Models.sequelize.sync({ force: true }).then()=>{

  // };
});
