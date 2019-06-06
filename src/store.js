import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        name: "Jaws",
        decription: "Die Überreste einer völlig zerfetzten Leiche werden am Strand vom Amity angespült. Der neue Polizeichef Brody vermutet schon bald eine Haiattacke, doch der Stadtrat weigert sich, die Strände zu sperren. Der Weiße Hai tötet indes weiter und erst viel zu spät reagiert Bürgermeister Vaughn.",
        release: 1975,
        pic: "http://barkerhost.com/wp-content/uploads/sites/4/2016/06/JAWS-poster.jpg",
        genre: "Horror",
      },
      {
        name: "Spider-Man",
        decription: "Peter Parker hat überdurchschnittliche Fähigkeiten in naturwissenschaftlichen Fächern. Sein Hobby ist die Fotografie und in der Schule wird er als Nerd abgestempelt. Sein bester Freund Harry ist das komplette Gegenteil. Er ist beliebt, reich und der Frauenschwarm, der Chancen bei der schönen Mary haben könnte, in die Peter seit der Grundschule verliebt ist. Bei einem Schulausflug in ein Labor wird Peter plötzlich von einer Spinne gebissen und zeigt schon am nächsten Morgen seltsame Symptome.",
        release: 2002,
        pic: "https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg",
        genre: "Action",
      },
      {
        name: "John Wick",
        decription: "Der ehemalige Auftragskiller John Wick lebt nach dem Tod seiner Frau zurückgezogen und trauernd in einer Luxusvilla. Der Hund, den seine Frau ihm geschenkt hat, ist das einzige, woran er noch hängt. Eines Nachts brechen drei Männer bei ihm ein, töten seinen Hund und zerstören somit alles, was John noch wichtig ist. Daraufhin kehrt der unverwüstbare John Wick aus seinem Ruhestand zurück und startet einen gnadenlosen Rachefeldzug, der auch vor der russischen Mafia nicht Halt macht.",
        release: 2014,
        pic: "http://t3.gstatic.com/images?q=tbn:ANd9GcTYiQoEULaYUChupKD3WRuIykz8-2gWAtHkHFN9767lGAqgSLE0",
        genre: "Action",
      },
    ]
  },
  mutations: {

  },
  actions: {

  }
})
