"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunifyApi = void 0;
class LaunifyApi {
    constructor() {
        this.name = 'launifyApi';
        this.displayName = 'Launify API';
        this.documentationUrl = 'https://launify.com/';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
                description: 'Your Launify API Key',
                required: true,
            },
            {
                displayName: 'Referer Domain',
                name: 'referer',
                type: 'string',
                default: '',
                description: 'The domain whitelisted for your API Key (e.g., https://your-domain.com)',
                required: true,
            },
        ];
    }
}
exports.LaunifyApi = LaunifyApi;
