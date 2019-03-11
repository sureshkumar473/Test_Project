exports.config = {

      //seleniumAddress: 'http://localhost:4444/wd/hub',
	 directConnect: true,
	  
      capabilities: {
          'browserName': 'chrome'
      },
	  	  
      specs: ['sample_spec.js'],

     framework: 'jasmine2' ,
      onPrepare: function() {
          var jasmineReporters = require('E:/Suresh_data/Protractor/Sample_Project/node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     }
   };