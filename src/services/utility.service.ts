
export class UtilityService {
    public static convertToInternationalPhoneFormat(phone_number:string): string {
        if (phone_number.startsWith('0')) {
            return '+886' + phone_number.substring(1);
        }
        return phone_number;
    }

    public static createOrderId():string {
        return 'JET-' + Date.now()
    }
}