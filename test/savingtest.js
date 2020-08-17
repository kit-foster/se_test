const assert = require('assert');
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../server");
chai.use(chaiHttp);

const User = require('../schemas/user_schema');

describe('saving records', function() {

    it('saves a user to the DB', function(done) {
        var user01 = new User({
            username: 'sophie'
        });
        
        chai.request('http://localhost:5000')
            .post('/user/add')
            .send(user01)
            .end((err, res) => {
                console.log("res body: ", res.body);
                res.should.have.status(200);
                assert(res.body == "User added!");
                
            })
         
            done();
        });

    });