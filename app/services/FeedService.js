import axios from 'axios'
import { StorageService } from '../services'

export default class FeedService {
    static list() {
        return new Promise((resolve, reject) => {
            StorageService.find('session').then(result => {
                const session = JSON.parse(result)
                const token = session.access_token
                axios({
                    method: 'get',
                    url: 'http://10.51.8.59:8080/api/feed',
                    params: {
                        'token': token,
                        'count': 4
                    }
                }).then(async result => {
                    const feeds = []
                    console.log(result)
                    for (i = 0; i < result.data.length; i++) {
                        Array.prototype.push.apply(feeds, result.data[i].items)
                    }
                    resolve(feeds)
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })
        })
        
    }
}