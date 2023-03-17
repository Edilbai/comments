const comments = []
let form = document.querySelector('.form')
let btn = document.getElementById('comment_add')
let Name = document.getElementById('comment_name')
let Body = document.getElementById('comment_body')
let dat = document.getElementById('ipt_date')
let output = document.getElementById('output')
let remove = document.createElement('button')
let like = document.createElement('button')
var error = document.createElement('div')
form.appendChild(error)

// remove.innerHTML = '<img src=./icons/remove.png/>'
like.innerHTML =
	'<img src=https://w7.pngwing.com/pngs/654/362/png-transparent-emoji-like-thumbs-up-facebook-ui-icon-thumbnail.png>'

for (var i = 0; i < Name.length; i++) {
	if (!Name[i].value) {
		console.log('field is blank', fields[i])
		var error = document.createElement('div')
		error.className = 'txtNot'

		error.innerHTML = 'Пустое поле'
		form.appendChild(error)
		console.log(error)
	}
}
function newCom(evt) {
	evt.preventDefault()

	let comment = {
		name: Name.value,
		body: Body.value,
		time: dat.value,
		clock: new Date(),
	}

	if (Name.value === '' || Body.value === '') {
		// alert('Вы должны что-то написать!')

		error.className = 'txtNot'

		error.innerHTML = 'Пустое поле'
		form.appendChild(error)
		console.log(error)
	} else if (dat.value === '') {
		let now = new Date()
		let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
		let timeNow =
			now.getFullYear() + '.' + months[now.getMonth()] + '.' + now.getDate()
		comment.time = timeNow
		error.className = 'txt'
		error.remove()
		comments.push(comment)
	} else {
		error.className = 'txt'
		error.remove()
		comments.push(comment)
	}

	Name.value = ''
	Body.value = ''
	dat.value = ''

	console.log(comment)
	showCom()
}

function showCom() {
	let out_put = document.createElement('div')

	out_put.className = 'com'
	output.appendChild(out_put, remove, like)

	let out = ''
	comments.map(function (item) {
		out += `
		<div class='com'>
		<p class='name'>${item.name}</p>

		<p class='time'><em>${item.time}</em></p>
	<p class='clock'>${timeConverter(item.clock)}</p>
		<p class='body'>${item.body}</p>
		`
	})
	// let removee = document.querySelector('.remove')

	// removee.addEventListener('click', function () {
	// 	document.getElementsByClassName('.com').innerHTML = ''

	output.innerHTML = out
}

function timeConverter() {
	let a = new Date()
	let hour = a.getHours()
	let min = a.getMinutes()
	let sec = a.getSeconds()
	let clock = hour + ':' + min + ':' + sec

	return clock
}
btn.addEventListener('click', newCom)
btn.addEventListener('keyup', newCom)
