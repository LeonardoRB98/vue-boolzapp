// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti
// dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi
// CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
// visualizzare nome e immagine di ogni contatto

var app = new Vue({
  el: '#main_container',
  data: {
    message: 'Hello Vue!',
    contacts: [
      {
        name: 'Michele',
		    avatar: 'img/avatar_2.png',
		    visible: true,
		    messages: [
          {
				    date: '20/03/2020 16:30:00',
				    text: 'Ciao come stai?',
				    status: 'sent'
			},
        ],
      },
      {
        name: 'Fabio',
		    avatar: 'img/avatar_3.png',
		    visible: true,
		    messages: [],
      },
      {
        name: 'Samuele',
		    avatar: 'img/avatar_4.png',
		    visible: true,
		    messages: [],
      },
    ]
  }
})
