class Mobile {
    constructor(inbox, draft, sent, battery) {
        this._inbox = inbox;
        this._draft = draft;
        this._sent = sent;
        this._battery = battery;
        this._status = true;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get draft() {
        return this._draft;
    }

    set draft(value) {
        this._draft = value;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    writeMessage(value) {
        if (this._status) {
            this._draft = value;
            this._battery--;
        }
        return;


    }

    sendMessage(phoneName) {
        if (this._status) {
            phoneName._inbox.push(this._draft);
            this._sent.push(this._draft)
            this._draft = '';
            this._battery--;
        }
        return;
    }

    receiveMessage(phoneName) {
        if (this._status) {

            this._inbox.push(phoneName._draft)
            phoneName._sent.push(phoneName._draft);
            phoneName._draft = ''
            this._battery--;
        }
        return;

    }

    turnOnOff(value) {
        this._status = value;
        this._battery--;
    }

    checkStatus() {
        this._battery = this._battery - 1;
        return this._status;


    }

    charge() {
        this._battery = 100;
    }

    showInbox() {
        if (this._status) {
            this._battery--;
            return this._inbox
        }
        return;
    }

    showSentMessage() {
        if (this._status) {
            this._battery--;
            return this._sent;
        }
        return;

    }

    checkBattery() {
        if (this._status) {
            this._battery--;
            return this._battery;
        }
        return;

    }

}


let samsung = new Mobile([], [], [], 100);
let nokia = new Mobile([], [], [], 100);

