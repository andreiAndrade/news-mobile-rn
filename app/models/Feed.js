import { observable, action, extendObservable } from 'mobx'

class Feed {
    store

    @observable items = []

    constructor(store, initialState) {
        this.store = store
        extendObservable(this, initialState || {})
    }

    @action refresh() {
        this.items = []
    }

    @action setItems(items) {
        this.items = items
    }
}

const feed = new Feed()
export default feed