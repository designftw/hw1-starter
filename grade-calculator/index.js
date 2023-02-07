import { createApp } from "https://mavue.mavo.io/mavue.js";

let app = createApp({
	data: {
		participation: {
			studio: null,
			feedback: null,
			other: null
		},
		homeworks: [null]
	},

	computed: {
		/**
		 * Final grade in the class (number)
		 */
		calculatedGrade () {
			let p = this.participation;
			return 0.15 * p.studio + 0.05 * p.feedback + 0.05 * p.other + .75 * this.homeworkAverage;
		},

		/**
		 * Returns the average of all homeworks that have been graded (number)
		 */
		homeworkAverage () {
			let done = 0;
			let sum = 0;

			for (let hw of this.homeworks) {
				// Check that it is a number, and the number is non-negative
				if (hw >= 0) {
					sum += hw;
					done++;
				}
			}

			return sum / done;
		}
	},

	methods: {
		/**
		 * Add a new blank homework	to the list.
		 * Does not prevent more homeworks than 12 from being added.
		 */
		addHomework () {
			this.homeworks.push(null);
		}
	}
}, "#grade_calc");