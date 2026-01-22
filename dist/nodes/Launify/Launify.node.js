"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Launify = void 0;
class Launify {
    constructor() {
        this.description = {
            displayName: 'Launify',
            name: 'launify',
            icon: 'file:launify.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Consume Launify API services',
            defaults: {
                name: 'Launify',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'launifyApi',
                    required: true,
                },
            ],
            requestDefaults: {
                // Base URL will be overridden per operation
                baseURL: 'https://launify.com',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Referer': '={{$credentials.referer}}',
                },
            },
            properties: [
                // ----------------------------------
                //         Resource
                // ----------------------------------
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Address',
                            value: 'address',
                        },
                        {
                            name: 'Company',
                            value: 'company',
                        },
                        {
                            name: 'Email',
                            value: 'email',
                        },
                        {
                            name: 'Phone',
                            value: 'phone',
                        },
                    ],
                    default: 'address',
                },
                // ----------------------------------
                //         Operations: Address
                // ----------------------------------
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'address',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Autocomplete',
                            value: 'autocomplete',
                            action: 'Autocomplete address',
                            description: 'Get address suggestions',
                            routing: {
                                request: {
                                    method: 'GET',
                                    baseURL: 'https://addresses.service.launify.com',
                                    url: '/address_whisper',
                                    qs: {
                                        apiKey: '={{$credentials.apiKey}}',
                                    },
                                },
                            },
                        },
                        {
                            name: 'Geocode',
                            value: 'geocode',
                            action: 'Geocode coordinates',
                            description: 'Get address from coordinates',
                            routing: {
                                request: {
                                    method: 'GET',
                                    baseURL: 'https://addresses.service.launify.com',
                                    url: '/geocode',
                                    qs: {
                                        apiKey: '={{$credentials.apiKey}}',
                                    },
                                },
                            },
                        },
                    ],
                    default: 'autocomplete',
                },
                // ----------------------------------
                //         Operations: Phone
                // ----------------------------------
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'phone',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Validate',
                            value: 'validate',
                            action: 'Validate phone number',
                            description: 'Validate and format a phone number',
                            routing: {
                                request: {
                                    method: 'GET',
                                    baseURL: 'https://telephones.service.launify.com',
                                    url: '/api/validate/phone',
                                    qs: {
                                        api_key: '={{$credentials.apiKey}}',
                                    },
                                },
                            },
                        },
                    ],
                    default: 'validate',
                },
                // ----------------------------------
                //         Operations: Email
                // ----------------------------------
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'email',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Validate',
                            value: 'validate',
                            action: 'Validate email',
                            description: 'Validate an email address',
                            routing: {
                                request: {
                                    method: 'GET',
                                    baseURL: 'https://emails.service.launify.com',
                                    url: '/api/validate/email',
                                    qs: {
                                        api_key: '={{$credentials.apiKey}}',
                                    },
                                },
                            },
                        },
                    ],
                    default: 'validate',
                },
                // ----------------------------------
                //         Operations: Company
                // ----------------------------------
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'company',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Search',
                            value: 'search',
                            action: 'Search company',
                            description: 'Search for companies by Name, ICO, or DIC',
                            routing: {
                                request: {
                                    method: 'GET',
                                    baseURL: 'https://companies-os.launify.com',
                                    url: '/autocomplete',
                                    qs: {
                                        apiKey: '={{$credentials.apiKey}}',
                                    },
                                },
                            },
                        },
                    ],
                    default: 'search',
                },
                // ----------------------------------
                //      Fields: Address > Autocomplete
                // ----------------------------------
                {
                    displayName: 'Search String',
                    name: 's',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['autocomplete'],
                        },
                    },
                    description: 'Partial address to search for',
                    routing: {
                        request: {
                            qs: {
                                s: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Country',
                    name: 'country',
                    type: 'string',
                    default: 'cz',
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['autocomplete'],
                        },
                    },
                    description: 'ISO 3166-1 alpha-2 country code (e.g. cz)',
                    routing: {
                        request: {
                            qs: {
                                country: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Timezone',
                    name: 'tz',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['autocomplete'],
                        },
                    },
                    description: 'Timezone for location biasing',
                    routing: {
                        request: {
                            qs: {
                                tz: '={{$value}}',
                            },
                        },
                    },
                },
                // ----------------------------------
                //      Fields: Address > Geocode
                // ----------------------------------
                {
                    displayName: 'Latitude',
                    name: 'lat',
                    type: 'number',
                    default: 0,
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['geocode'],
                        },
                    },
                    routing: {
                        request: {
                            qs: {
                                lat: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Longitude',
                    name: 'lon',
                    type: 'number',
                    default: 0,
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['geocode'],
                        },
                    },
                    routing: {
                        request: {
                            qs: {
                                lon: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Country',
                    name: 'country',
                    type: 'string',
                    default: 'cz',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['address'],
                            operation: ['geocode'],
                        },
                    },
                    routing: {
                        request: {
                            qs: {
                                country: '={{$value}}',
                            },
                        },
                    },
                },
                // ----------------------------------
                //      Fields: Phone > Validate
                // ----------------------------------
                {
                    displayName: 'Phone Number',
                    name: 'phone',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['phone'],
                            operation: ['validate'],
                        },
                    },
                    description: 'The phone number to validate',
                    routing: {
                        request: {
                            qs: {
                                phone: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Country',
                    name: 'country',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['phone'],
                            operation: ['validate'],
                        },
                    },
                    description: 'ISO 3166-1 alpha-2 country code',
                    routing: {
                        request: {
                            qs: {
                                country: '={{$value}}',
                            },
                        },
                    },
                },
                // ----------------------------------
                //      Fields: Email > Validate
                // ----------------------------------
                {
                    displayName: 'Email',
                    name: 'email',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['email'],
                            operation: ['validate'],
                        },
                    },
                    description: 'The email address to validate',
                    routing: {
                        request: {
                            qs: {
                                email: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Country',
                    name: 'country',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['email'],
                            operation: ['validate'],
                        },
                    },
                    description: 'ISO 3166-1 alpha-2 country code',
                    routing: {
                        request: {
                            qs: {
                                country: '={{$value}}',
                            },
                        },
                    },
                },
                // ----------------------------------
                //      Fields: Company > Search
                // ----------------------------------
                {
                    displayName: 'Search By',
                    name: 'searchBy',
                    type: 'options',
                    options: [
                        { name: 'Name', value: 'companyName' },
                        { name: 'ICO', value: 'identificationNumber' },
                        { name: 'DIC', value: 'vatNumber' },
                    ],
                    default: 'companyName',
                    displayOptions: {
                        show: {
                            resource: ['company'],
                            operation: ['search'],
                        },
                    },
                },
                {
                    displayName: 'Company Name',
                    name: 'companyName',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['company'],
                            operation: ['search'],
                            searchBy: ['companyName'],
                        },
                    },
                    routing: {
                        request: {
                            qs: {
                                companyName: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Identification Number (ICO)',
                    name: 'identificationNumber',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['company'],
                            operation: ['search'],
                            searchBy: ['identificationNumber'],
                        },
                    },
                    routing: {
                        request: {
                            qs: {
                                identificationNumber: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'VAT Number (DIC)',
                    name: 'vatNumber',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['company'],
                            operation: ['search'],
                            searchBy: ['vatNumber'],
                        },
                    },
                    routing: {
                        request: {
                            qs: {
                                vatNumber: '={{$value}}',
                            },
                        },
                    },
                },
                {
                    displayName: 'Country',
                    name: 'country',
                    type: 'string',
                    default: 'cz',
                    displayOptions: {
                        show: {
                            resource: ['company'],
                            operation: ['search'],
                        },
                    },
                    description: 'ISO 3166-1 alpha-2 country code',
                    routing: {
                        request: {
                            qs: {
                                country: '={{$value}}',
                            },
                        },
                    },
                },
            ],
        };
    }
}
exports.Launify = Launify;
