import { observable, action, extendObservable } from 'mobx'

class User {
    store

    @observable name = ''
    @observable picture = undefined
    @observable provider = ''

    constructor(store, initialState) {
        this.store = store
        extendObservable(this, initialState || {})
    }

    @action refresh() {
        this.name = ''
        this.picture = undefined
    }

    @action setName(name) {
        this.name = name
    }

    @action setPicture(picture) {
        this.picture = picture
    }

    @action setProvider(provider) {
        this.provider = provider
    }
}

const user = new User({}, {})
export default user