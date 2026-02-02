import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LaunifyApi implements ICredentialType {
	name = 'launifyApi';
	displayName = 'Launify API';
	documentationUrl = 'https://launify.docs.apiary.io/';
	properties: INodeProperties[] = [
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
			description: 'The domain whitelisted for your API Key (e.g. "your-domain.com" or "localhost")',
			required: true,
		},
	];
}
