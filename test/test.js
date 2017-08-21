

var emailer = require('../index');

emailer.send({
    from_name: 'SentinelJS Forum',
    from: 'noreply@kriblet.com',
    _raw: {
        username: 'ben@kriblet.com'
    },
    to: 'enriquebenavidesm@gmail.com',
    html: '<strong>Test HTML</strong>',
    plaintext: 'Here',
    subject: 'Here'
},function(err){
    console.log(err, 'response');
});