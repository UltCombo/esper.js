"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const ObjectValue = require('../values/ObjectValue');


class ArrayObject extends EasyObjectValue {
	*call(thiz, args) {
		return this.fromNative("Ok?");
	}

	callPrototype(env) { return env.ObjectPrototype; }
	//objPrototype(env) { return env.Function; }



	static *isArray(thiz, args) {
		return Array.isArray(args[0].toNative());
	}
}

module.exports = ArrayObject;
