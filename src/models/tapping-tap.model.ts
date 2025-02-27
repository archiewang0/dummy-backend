import { Model } from 'sequelize';
import { nanoid } from 'nanoid';
import { IDefault } from '../interfaces/IDefault';

module.exports = (sequelize: any, DataTypes: any) => {
    class DefaultModel extends Model<IDefault.IDefaultModel> implements IDefault.IDefaultModel {
        public id!: string | undefined;
        public finger_id!: string;
        public member_id!: string;
        public order_number!: string;
        public amount!: number;
        public currency!: string;
        public bank_transaction_id!: string | undefined;
        public rec_trade_id!: string | undefined;
        public bank_refund_id: string | undefined;
        public status: number | undefined;
        public details!: string | undefined;
        public auth_code: string | undefined;
        public acquirer: string | undefined;
        public transaction_time_millis: number | undefined;
        public bank_transaction_time!: {
            start_time_millis: number;
            end_time_millis: number;
        }
        public bank_result_code: string | undefined;
        public bank_result_msg: string | undefined;
        public response: object | undefined;
    };

    DefaultModel.init({
        id: {
            type: DataTypes.STRING(21),
            defaultValue: () => nanoid(),
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(21),
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'defaultModel',
    });

    return DefaultModel;
}