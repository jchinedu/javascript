class Contact {
    constructor(firstName, lastName, phoneNumber) {
        if (!/^\+?\d{10,15}$/.test(phoneNumber)) {
            throw new Error("Invalid phone number format");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

    update(details) {
        if (details.firstName) this.firstName = details.firstName;
        if (details.lastName) this.lastName = details.lastName;
        if (details.phoneNumber) {
            if (!/^\+?\d{10,15}$/.test(details.phoneNumber)) {
                throw new Error("Invalid phone number format");
            }
            this.phoneNumber = details.phoneNumber;
        }
    }
}

module.exports = Contact;
