
/**
 * Module dependencies.
 */

var  reader = require('fastareader').create('./public/dna/sequence.fasta');



console.log(reader.fetch('gi|108885074|ref|NC_000908.2|',0,10));
