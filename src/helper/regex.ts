//Minimum six characters, at least one letter and one number:
export const patternNormal = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$/;

//Minimum eight characters, at least one letter, one number and one special character:
export const patternMedium =
    /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/;

//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
export const patternHigh =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

const emailRegEx =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// This is directly taken from `https://github.com/manishsaraan/email-validator/blob/master/index.js`
// Just converted to the TypeScript and modernized a bit.
// ? Local part may be up to 64 octets long and the domain may have a maximum of 255 octets.
export const isValidEmail = (email: string): boolean => {
    if (!email) {
        return false;
    }

    const emailParts = email.split("@");

    if (emailParts.length !== 2) {
        return false;
    }

    const account = emailParts[0];
    const address = emailParts[1];

    if (account.length > 64) {
        return false;
    } else if (address.length > 255) {
        return false;
    }

    const domainParts = address.split(".");
    if (
        domainParts.some(function (part) {
            return part.length > 63;
        })
    ) {
        return false;
    }

    if (!emailRegEx.test(email)) {
        return false;
    }

    return true;
}

//  Validator
export const isValidRegx = (
    password: string,
    passwordRegEx = patternNormal,
): boolean => {
    if (!password) {
        return false;
    }

    return passwordRegEx.test(password);
}