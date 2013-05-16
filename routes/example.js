var reader = require('fastareader').create('./public/dna/sequence.fasta');

exports.blah = function(req, res){
  var blad=  reader.fetch('gi|108885074|ref|NC_000908.2|',1,10);
  console.log(blad);
  res.render('example', { 
                        title: 'DNA!',
                        data: blad
                    });
};