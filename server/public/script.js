window.onload = function () {
	console.log('aychamito');
	test()
};

function test() {
	let serverUrl='http://127.0.0.1:5050/api/time';
	fetch(
		serverUrl,
		{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
            console.log(
				'Mensaje: '+
				JSON.stringify(response.msj)
			);
            console.log(
				'Estatus: '+
				JSON.stringify(response.status)
			);

			if (response.data) {
				console.log(
					'Data: '+
					JSON.stringify(response.data)
				);
				let auxValor = response.data;
				document.getElementById("result").innerHTML = auxValor;
			}  else {
				let auxValor ='';
				document.getElementById("result").innerHTML = auxValor;
				alert(response.msj);
			};
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};

