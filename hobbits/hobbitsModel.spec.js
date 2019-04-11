
const hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig');

describe('hobbits model', () => {
    beforeEach(async() => {
        await db('hobbits').truncate();
    })
    describe('insert', () => {
        it('should insert the provided hobbits', async () => {
            await hobbits.insert({name: 'gaffer'});
            await hobbits.insert({name: 'gandalf'});
            await hobbits.insert({name: 'aragorn'});
            const hobbitsList = await db('hobbits');
            expect(hobbitsList).toHaveLength(3);
        })

        it('should insert the provided hobbit', async () => {
            let hobbit = await hobbits.insert({name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer');
        
            // await hobbits.insert({name: 'gandalf'});
            // await hobbits.insert({name: 'aragorn'});
            // expect(hobbitsList).toHaveLength(3);
        })

        it('should delete the provided hobbit', async () => {
            
        })
    })
})