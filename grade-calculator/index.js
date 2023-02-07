import "https://mavue.mavo.io/mavue.js";

grade_calc.computed = {
	/**
	 * Final grade in the class
	 */
	calculatedGrade () {
		let p = this.participation;
		return 0.15 * p.studio + 0.05 * p.feedback + 0.05 * p.other + .75 * this.homeworkAverage;
	},

	/**
	 * Returns the average of all homeworks that have been graded.
	 */
	homeworkAverage () {
		let done = 0;
		let sum = 0;

		for (let hw of this.homeworks) {
			if (hw >= 0) {
				sum += hw;
				done++;
			}
		}

		return sum / done;
	}
}

grade_calc.methods = {
	addHomework (i) {
		this.homeworks.push(null);
	}
};