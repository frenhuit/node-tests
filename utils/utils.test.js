const expect=require('expect');

const utils=require('./utils');
it('should add two numbers', ()=>{
    var res=utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('squre a number', ()=>{
    var res=utils.square(9);
    expect(res).toBe(81).toBeA('number');
});

it('should set a user', ()=>{
    var user={};
    var res=utils.setName(user, "Jiaxin Wang");
    expect(res).toInclude({firstName:"Jiaxin", lastName:"Wang"});
});