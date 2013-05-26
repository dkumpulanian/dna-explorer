var mongoose = require('mongoose');
var config = require('./config');
var db = mongoose.connect(config.creds.mongoose_auth),
Schema = mongoose.Schema;

var DNASchema = new Schema({
  genome: String,
  species: String
});


var DNA = mongoose.model('DNA', DNASchema);
var map=function () { 
        emit(this.species , this.genome.substr(0,10));
        emit(this.species , this.genome.substr(10,10));
    };
    
    
var reduce=function(key, vals){
        return vals.join();
};
var finalize=function(key, v){
    var pivot=v.indexOf(',');
    if(pivot > 0){
        v=v.substr(0,pivot) + v.substr(pivot+1);
    }
    return v;
}
var o = {
    map : map,
    reduce :reduce,
    finalize:finalize,
    query:{species:/myco/},
    out:{inline: 1},
    verbose:true
};

var test=DNA.mapReduce(o,function(err,res,stats){
    if(err) throw err;
    console.log(stats);
    console.log(res);
});
