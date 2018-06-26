var fs = require('fs')

fs.readFile('./users.json', 'utf-8', function(err, data) {
	if (err) throw err

	var arrayOfObjects = JSON.parse(data)
	console.log(arrayOfObjects)

	arrayOfObjects.data.push({
    branch_code: "11701",
    deposit_collection: 5,
    debt_collection : 6
	})

	console.log(arrayOfObjects)

	fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
		console.log('Done!')
	})
})