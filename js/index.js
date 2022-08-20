// Create a request variable and assign a new XMLHttpRequest object to it.
		var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint

		request.open('GET', 'https://4i5o4dm0hi.execute-api.us-east-1.amazonaws.com/Production/Visitor_API', true)
		request.onload = function () {
  
var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
      console.log(data.count)
      document.getElementById('count').innerHTML = (data.count);
  }
else {
  console.log('error')

}
}


// Send request
request.send()

