import fs from 'fs'

let create = (name) => {
	const txt = `import ${name} from '../models/${name}'

exports.save = (req, res, next) => {}

exports.index = (req, res, next) => {}

exports.read = (req, res, next) => {}

exports.update = (req, res, next) => {}

exports.delete = (req, res, next) => {}`

	fs.writeFile(`./src/controllers/${name}.js`, txt, err => {
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