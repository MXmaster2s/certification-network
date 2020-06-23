'use strict';

class Student {
	
	/**
	 * Constructor function
	 * @param studentObject {Object}
	 */
	constructor(studentObject) {
		Object.assign(this, studentObject);
	}
	
	/**
	 * Get class of this model
	 * @returns {string}
	 */
	static getClass() {
		return 'org.certification-network.certnet.models.student';
	}
	
	/**
	 * Convert the buffer stream received from blockchain into an object of this model
	 * @param buffer {Buffer}
	 */
	static fromBuffer(buffer) {
		let json = JSON.parse(buffer.toString());
		return new Student(json);
	}
	
	/**
	 * Convert the object of this model to a buffer stream
	 * @returns {Buffer}
	 */
	toBuffer() {
		return Buffer.from(JSON.stringify(this));
	}
	
	/**
	 * Create a new instance of this model
	 * @returns {Student}
	 * @param studentObject {Object}
	 */
	static createInstance(studentObject) {
		return new Student(studentObject);
	}
	
}

module.exports = Student;