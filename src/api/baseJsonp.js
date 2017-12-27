import baseJsonp from 'jsonp'

export default function jsonp(url, params, opt){
	if (!formatParams(params)) return false;
	url = `${url}?${formatParams(params)}`;
	return new Promise((resolve, reject) => {
		baseJsonp(url, opt, (error, data) => {
			if (!error) {
				resolve(data);
			}else{
				reject(error);
			}
		})
	})
}

function formatParams(params){
	if (!(params instanceof Object)) return false;
	let paramsArr =  Object.entries(params);
	paramsArr.map((item, index) => {
		paramsArr[index] = item.join('=');
	})
	paramsArr.join('&');
	return paramsArr;
}