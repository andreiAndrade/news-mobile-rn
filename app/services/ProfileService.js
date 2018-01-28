import axios from 'axios'
import { StorageService } from '../services'

export default class ProfileService {
    static profile() {
        return new Promise((resolve, reject) => {
            StorageService.find('session').then(result => {
                const session = JSON.parse(result)
                const token = session.token_type + ' ' + session.access_token
                axios({
                    method: 'get',
                    url: 'https://cloud.feedly.com/v3/profile',
                    headers: {
                        'Authorization': token
                    }
                }).then(profile => {
                    resolve(profile)
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })
        })
    }
}