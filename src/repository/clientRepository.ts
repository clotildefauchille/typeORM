 import {Client } from '../entity/Client';

const clientRepository = {

    createOneClient : async (client: Client) => {
        try {
        const clientToCreate = Client.create(client);
        const result = await clientToCreate.save();
        return result;
        } catch (error) {
            console.log(error)
            throw error;
        }

    }
}


export default clientRepository;