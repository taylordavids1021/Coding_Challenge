const data = {
	lists: [
		['first', [11, 7, 5]],
		['second', [2, 6, 8, 4, 10]],
		['third', [9, 3, 1]],
	]
}

const [hide_First, first] = data.lists[0];
const [hide_Second, second] = data.lists[1];
const [hide_Third, third] = data.lists[2];


const result = []

const extractBiggest = () => {
	let first_Value = first[first.length -1]
	let second_Value = second[second.length -1]
	let third_Value = third[third.length -1]

	const highest = Math.max(first_Value || 0,second_Value || 0,third_Value || 0)
	if (first_Value == highest) {
		return first.pop()
	} else if (second_Value == highest) {
		return second.pop()
	} else {
		return third.pop()
	}

}

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)