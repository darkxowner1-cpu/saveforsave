const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class DarkXOfficialBot {
    constructor() {
        this.botName = "DarkX Official";
        this.ownerNumber = "255775710774@c.us";
        this.channelLink = "https://whatsapp.com/channel/0029Vb6WDbK4yltWKDW7Zn0T";
        this.userCodes = new Map();
        this.registeredUsers = new Set();
        
        this.client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: {
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
        });

        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.client.on('qr', (qr) => {
            console.log('📱 SCAN QR CODE HII:');
            qrcode.generate(qr, { small: true });
        });

        this.client.on('ready', () => {
            console.log(`✅ ${this.botName} BOT IMESHA READY!`);
            console.log(`📞 OWNER: 255775710774`);
            this.sendOwnerNotification();
        });

        this.client.on('message', async (message) => {
            await this.handleIncomingMessage(message);
        });
    }

    async sendOwnerNotification() {
        try {
            await this.client.sendMessage(
                this.ownerNumber, 
                `🔔 ${this.botName} BOT IMESHAANZA!\nOwner: 255775710774\nChannel: ${this.channelLink}`
            );
        } catch (error) {
            console.log('Owner hajapatikana');
        }
    }

    async handleIncomingMessage(message) {
        if (message.from === 'status@broadcast') return;

        const userNumber = message.from;
        const text = message.body.toLowerCase().trim();

        console.log(`📩 ${userNumber}: ${message.body}`);

        if (text === 'hi' || text === 'hello' || text === 'start') {
            await this.sendWelcomeMessage(userNumber);
            return;
        }

        if (this.isPhoneNumber(text)) {
            const code = this.generateCode();
            this.userCodes.set(userNumber, code);
            await this.sendCodeMessage(userNumber, code);
            return;
        }

        if (this.userCodes.has(userNumber)) {
            const expectedCode = this.userCodes.get(userNumber).toLowerCase();
            if (text === expectedCode) {
                await this.sendSuccessMessage(userNumber);
                this.userCodes.delete(userNumber);
                this.registeredUsers.add(userNumber);
                return;
            }
        }

        if (!this.userCodes.has(userNumber)) {
            await this.sendWelcomeMessage(userNumber);
        }
    }

    async sendWelcomeMessage(userNumber) {
        const welcomeMsg = `Welcome to DarkX Official\n\n${this.channelLink}\n\nTuma namba yako (mfano: 255775710774) kupata code.`;
        await this.client.sendMessage(userNumber, welcomeMsg);
    }

    async sendCodeMessage(userNumber, code) {
        const codeMsg = `🔐 CODE YAKO: *${code}*\n\nTuma code hii hapa kukamilisha usajiri.`;
        await this.client.sendMessage(userNumber, codeMsg);
    }

    async sendSuccessMessage(userNumber) {
        const successMsg = `🎉 *UMEFANIKIWA KUJIUNGA!*\n\nSasa uko official member!\n\n${this.channelLink}\n\nOwner: 255775710774`;
        await this.client.sendMessage(userNumber, successMsg);
    }

    isPhoneNumber(text) {
        const cleanText = text.replace(/\s+/g, '');
        return /^(255\d{9}|0\d{9}|\d{9})$/.test(cleanText);
    }

    generateCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = 'DARKX';
        for (let i = 0; i < 3; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }

    start() {
        console.log(`🚀 ANZISHA ${this.botName} BOT...`);
        this.client.initialize();
    }
}

const bot = new DarkXOfficialBot();
bot.start();

process.on('SIGINT', async () => {
    console.log('\n⚠️  STOP BOT...');
    await bot.client.destroy();
    process.exit(0);
});
