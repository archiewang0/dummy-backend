import * as fs from 'fs';
import * as path from 'path';
import { QueryInterface } from 'sequelize';
import * as csv from 'fast-csv';

module.exports = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        console.log('!!!!!!!row:', path.resolve(__dirname, '../../datas/Tapping-Fingers_20231217.csv'));
        const data: any[] = [];
        fs.createReadStream(path.resolve(__dirname, '../../datas/Tapping-Fingers_20231217.csv'))
            .pipe(csv.parse({ headers: true }))
            .on('data', (row: any) => {
                console.log('row:', row);
                data.push(row);
            })
            .on('end', () => {
                console.log('data:', data);
                queryInterface.bulkInsert('TappingFingers', data);
            })
            .on('error', (error: any) => {
                console.log('error:', error);
            });
    },

    down: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.bulkDelete('TappingFingers', {}, {});
    }
};