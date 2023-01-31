function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iHkQseinYY":
        Script1();
        break;
  }
}

function Script1()
{
  const URL =
   'https://script.google.com/macros/s/AKfycbwU2uqXm7f9RFiZIYDle0ceLwsV-3QMUGnwcub04Sv6ytZcVqaF5jomvBUdrNm_sf_Nfg/exec';
const player = GetPlayer();
let email = player.GetVar('Email');

const getArgentineTime = () => {
   const offset = -3;
   const date = new Date();
   const utc = date.getTime() + date.getTimezoneOffset() * 60000;
   const argDate = new Date(utc + 3600000 * offset);
   return {
      fecha: `${argDate.getDate()}/${
         argDate.getMonth() + 1
      }/${argDate.getFullYear()}`,
      horario: `${argDate.getHours()}:${argDate.getMinutes()}:${argDate.getSeconds()}`,
   };
};

const modulo = 'M1';
const { fecha, horario } = getArgentineTime();

if (!email) {
   alert('Por favor, ingresar un email.');
} else if (!email.includes('@')) {
   alert('Por favor, ingresar un email válido.');
} else {
   fetch(URL, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      body: JSON.stringify({
         email: email,
         fecha: fecha,
         horario: horario,
         modulo: modulo,
      }),
   });
   player.SetVar('StatusEnviar', true);
}


}

