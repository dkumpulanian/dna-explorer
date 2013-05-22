var mongoose = require('mongoose');
var config = require('./config');
var db = mongoose.connect(config.creds.mongoose_auth),
Schema = mongoose.Schema;
//var  reader = require('fastareader').create('./public/dna/sequence.fasta');

var DNASchema = new Schema({
  genome: String,
  species: String
});
// Use the schema to register a model with MongoDb
var DNA = mongoose.model('DNA', DNASchema);

// var stuff = reader.fetch('gi|108885074|ref|NC_000908.2|',1,580076);
// var g = new DNA({genome:stuff,species:'mycoplasma genitalium'});

// g.save(function (err) {
//   if (err) // ...
//   console.log('DNA');
// });

DNA.findOne({species:'mycoplasma genitalium'},'species genome',
function (err, dna) {
  if (err){
      console.log('wtf');
  }else{
    console.log(dna.genome);
  }
}
);