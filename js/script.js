// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti
// dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi
// CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
// visualizzare nome e immagine di ogni contatto

var app = new Vue({
  el: '#main_container',
  data: {
    message1: 'Hello Vue!',
    contacts: [
      {
        name: 'Michele',
		    avatar: 'img/avatar_2.png',
		    visible: true,
		    messages: [
          {
            date: '10/01/2020 15:30:55',
				    text: 'Hai portato a spasso il cane?',
				    status: 'sent'
			    },
          {
            date: '10/01/2020 15:50:00',
				    text: 'Ricordati di dargli da mangiare',
            status: 'sent'
			    },
          {
            date: '10/01/2020 16:15:22',
				    text: 'Tutto fatto!',
				    status: 'received'
			    },
        ],
      },
      {
        name: 'Fabio',
		    avatar: 'img/avatar_3.png',
		    visible: true,
		    messages: [
          {
            date: '10/01/2020 15:30:55',
				    text: 'Hai portato a spasso il cane?',
				    status: 'sent'
			    },
          {
            date: '20/03/2020 16:30:00',
				    text: 'Ciao come stai?',
            status: 'sent'
			    },
          {
            date: '20/03/2020 16:30:55',
				    text: 'Bene grazie! Stasera ci vediamo?',
				    status: 'received'
			    },
        ],
      },
      {
        name: 'Samuele',
		    avatar: 'img/avatar_4.png',
		    visible: true,
		    messages: [
          {
            date: '28/03/2020 10:10:40',
				    text: 'La Marianna va in campagna',
				    status: 'received'
			    },
          {
            date: '28/03/2020 10:20:10',
				    text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
			    },
          {
            date: '28/03/2020 16:15:22',
				    text: 'Ah scusa!',
				    status: 'received'
			    },
        ],
      },
    ],
    activeUser: 0,

  },
  methods: {
    updateActiveUser: function (newIndex) {
      this.activeUser = newIndex;
    }
  }
})
