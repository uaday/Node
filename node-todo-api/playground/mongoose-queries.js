const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');

var id ='5ad5d4cc7947b016b4c3757b';

Todo.find({
    _id:id
})