/**
 * Yields increasing or decreasing sequences of numbers. The starting value
 * and the step between separating output values can be chosen.
 *
 * @example
 * // equivalent to list( range( 7 ) )
 * list( head( _count( 0 , 1 ) , 7 ) ) ;
 *
 * @example
 * // returns [0,-1,-2,-3,-4]
 * list( head( _count( 0 , -1 ) , 5 ) ) ;
 *
 * @param {number} start - The starting value.
 * @param {number} step - The step between the values.
 * @returns {IterableIterator<number>}
 */
export default function* _count(start, step) {
	while (true) {
		yield start;

		start += step;
	}
}
