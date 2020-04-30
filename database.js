var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var jobs = new Schema({
//     name: {
// 		type: 'String',
// 		index: true
// 	},
// 	lastexecuted: {
// 		type: 'Number'
// 	},
// 	status: {
// 		type: 'String',
// 	}
// },{ usePushEach: true });

var fileStatus = new Schema({
    name: {
		type: 'String',
		index: true
	},
	lastmodified: {
		type: 'Number'
	},
	contentLenght: {
		type: 'Number'
	},
	hostname: {
		type: 'String',
		index: true
	},
	ip: {
		type: 'String',
		index: true
	},
	type: {
		type: 'String',
	},
	status: {
		type: 'String',
	}
},{ usePushEach: true });

mongoose.model('fileStatus', fileStatus);
//mongoose.model('jobs', jobs);


if (process.env.NODE_ENV === 'develop') {
    mongoose.connect('mongodb://localhost/covid19Fetch', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
} else {
    mongoose.connect('mongodb://localhost/covid19Fetch', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });
}