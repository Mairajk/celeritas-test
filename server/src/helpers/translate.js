import lang from '../lang'
import { get, isObject, isString } from 'lodash'

export default (type, key, replacement) => {
    let text = get(lang[type], key)

    if (replacement && isObject(replacement)) {
        for (const i in replacement) {
            if (isString(replacement[i])) {
                const regex = new RegExp(i, 'g')
                text = text?.replace(regex, replacement[i])
            }
        }
    }

    return text
}
