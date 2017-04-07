import fs from 'fs'

let create = (name) => {
	const txt = `import mongoose from 'mongoose'
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let ModelSchema = new Schema({

})

let Model = mongoose.model('${name}', ModelSchema, '${name.toLowerCase()}')

module.exports = Model;`
	fs.writeFile(`./src/models/${name}.js`, txt, err => {
		if (err) console.log('创建失败: ', err);
	})
}

switch(process.env.COMMON) {
	case 'create':
		create(process.env.NAME);
		break;
	default:
		console.log(`common ${process.env.COMMON} not exists`);
}