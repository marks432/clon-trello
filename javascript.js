
const app = new Vue({
    el: '#app',
    data: {
        lists: []
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating',
                cards: []
            }
            this.lists.push(newList)
        },
        saveList(list) {
            list.status = 'saved'
        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        addCard(list) {
            const newCard = {
                title: ''
            }
            let empty = this.verifyEmpty(list)
            if(empty.length) {
                alert('No pueden haber tarjetas vacías')
            } else {
                list.cards.push(newCard)
            }
        },
        verifyEmpty(list) {
            const cards = list.cards
            // console.log(card)
            const emptyCards = cards.filter((cards) => {
                return cards.title == ''
            })
            return emptyCards
        },
        removeCard(indexList, indexCard) {
            const lists = this.lists[indexList]
            lists.cards.splice(indexCard, 1)
        }
    },
    directives: {
        focus: {
          // directive definition
          inserted(el) {
            el.focus()
          }
        }
    }

})