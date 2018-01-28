import axios from 'axios'
import { StorageService, ProfileService, FeedService } from '../services'
import user from '../models/User'
import feed from '../models/Feed'

export default class AuthService {
    static token(code) {
        axios({
            method: 'post',
            url: 'https://cloud.feedly.com/v3/auth/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {},
            params: {
                'client_id': 'feedly',
                'client_secret': '0XP4XQ07VVMDWBKUHTJM4WUQ',
                'grant_type': 'authorization_code',
                'redirect_uri': 'http://www.feedly.com/feedly.html',
                'code': code
            }
        }).then(async result => {
            StorageService.save('session', JSON.stringify(result.data))
        }).catch(error => {
            console.log(error)
        })
    }

    static fetchDatas() {
        return new Promise((resolve, reject) => {
            ProfileService.profile().then(profile => {
                console.log(profile)
                StorageService.save('profile', JSON.stringify(profile.data))
                user.setPicture(profile.data.picture)
                user.setName(profile.data.fullName)
                user.setProvider('Facebook')
            }).catch(error => {
                console.log(error)
                reject(error)
            })
            FeedService.list().then(result => {
                feed.setItems(result)
                console.log(result)
                resolve()
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        })
    }
}