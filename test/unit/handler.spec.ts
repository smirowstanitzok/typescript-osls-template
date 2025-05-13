import {expect} from 'chai'
import {replaceMe} from '~/handler'

describe('replaceMe', () => {
    it('42', async () => {
        const result = await replaceMe()
        expect(result).to.eql(42)
    })
})
