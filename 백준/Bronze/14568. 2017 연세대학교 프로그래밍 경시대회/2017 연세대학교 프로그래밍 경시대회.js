const n = require("fs").readFileSync(0, "utf-8").toString();

const input = parseInt(n, 10);
let result = 0;

for (let 택희 = 0; 택희 < input; 택희++) {
	for (let 영훈 = 0; 영훈 < input; 영훈++) {
		for (let 남규 = 0; 남규 < input; 남규++) {
			if (택희 + 영훈 + 남규 === input) {
				if (남규 >= 영훈 + 2) {
					if (남규 !== 0 && 영훈 !== 0 && 택희 !== 0) {
						if (택희 % 2 === 0) {
							result++;
						}
					}
				}
			}
		}
	}
}

console.log(result);
