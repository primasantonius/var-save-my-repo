const assert = require('chai').expect;

const page = require('../page/translate-yoda.js');
const translate = require('../data/translate.json');

const testCase = {
    positive: {
        postTrans:
        'translate yoda',
    },
};

describe('translate yoda', () => {
    const text = "the jumanji is gone";

it(`@get ${testCase.positive.postTrans}`, async () =>{
    const response = await page.postTrans(translate);
    console.log(response.body);
    assert(response.status).to.equal(200);
    // assert(response.body.message).to.equal("Success");
});
});