module.exports = function () {
	var config = {
		allTs:'./app/src/**/*.ts',
		typeings:'./typings/**/*.ts',
        server:'./server.ts',
		tsOutPutPath:'./app/build',
        allNgTs:'./client/**/*.ts',
        ngOut:'./public/scripts/src',
        ngTypeings:'./node_modules/angular2/typings/**/*.ts',
        html:'./client/**/*.html',
	};
	return config;
}