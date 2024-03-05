const leapYears = function(year: number): boolean {
	if(year % 4 == 0){
		if(year % 100 == 0 && year % 400 != 0){
			return false
		}
		return true;
	}
	return false;
};

// Do not edit below this line
module.exports = leapYears;