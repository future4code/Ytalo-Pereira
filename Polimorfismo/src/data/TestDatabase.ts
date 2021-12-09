import { BaseDatabase } from "./BaseDatabase";

export class TestDatabase extends BaseDatabase{
    async execute():Promise<string>{

        const result = await TestDatabase.connection.raw("SELECT CURRENT_DATE")

        return result[0][0]

    }
}