import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.addColumn('TappingFingers', 'payment_method', {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'direct_pay'
        });

    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.removeColumn('TappingFingers', 'payment_method');
    }
}