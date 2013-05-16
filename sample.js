
/**
 * Module dependencies.
 */

var  reader = require('fastareader').create('./public/dna/sequence.fasta');

for(var i=0;i<580076;i++){
    console.log(reader.fetch('gi|108885074|ref|NC_000908.2|',i,3))
}