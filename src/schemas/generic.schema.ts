import { string } from 'zod';

export class GenericSchema {
    public static require_mobile = string({
        required_error: 'mobile is required',
    }).regex(/^09\d{8}$/, 'not a valid mobile');

    public static require_password = string({
        required_error: 'password is required',
    }).min(8, 'password is too short - should be min 8 chars');

    public static optional_password = string(
    ).min(8, 'password is too short - should be min 8 chars');

    public static require_email = string({
        required_error: 'email is required',
    }).email('not a valid email');

    public static optional_email = string(
    ).optional().nullable(
    ).refine((data) =>
        data === undefined ||
        data === null ||
        data === '' ||
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data),
        { message: 'not a valid email' }
    );

    public static id = string({
        required_error: 'id is required',
    }).length(21, "id should be equal 21 chars");

}
