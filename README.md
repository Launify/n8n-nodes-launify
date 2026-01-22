# n8n-nodes-launify

This is an n8n community node for [Launify.com](https://launify.com).

Launify provides autocomplete and validation services for addresses, phone numbers, emails, and companies.

## Prerequisites

You need to have n8n installed.

## Installation

### Community Nodes (Recommended)

You can install this node directly from the n8n community nodes panel (once published).

### Manual Installation

To install this node manually:

1.  Go to your n8n root directory (usually `~/.n8n`).
2.  Create a directory `custom` if it doesn't exist.
3.  Run `npm link n8n-nodes-launify` inside the `custom` directory (assuming you have built and linked this package locally).

## Usage

1.  **Authentication**: You need a Launify API Key. You can get one at [Launify.com](https://launify.com).
    - Note: You must also specify the **Referer Domain** that is whitelisted for your API Key in the credentials setup.
2.  **Resources**:
    - **Address**: Autocomplete and Geocode addresses.
    - **Phone**: Validate phone numbers.
    - **Email**: Validate email addresses.
    - **Company**: Search for companies (CZ only).

## Support

For issues with the API, contact Launify support.
For issues with this node, please open an issue on the GitHub repository.
