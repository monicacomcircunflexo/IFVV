const jwt = require('jsonwebtoken');
const config ={
	JWT_KEY :'1',
	salt_rounds:13
};

module.exports ={
	jwt:jwt,
	config:config
}