const { Client, TerminalManagement } = require('../index'); // Adjust the path if necessary

// Set up Adyen API client
const client = new Client({
  apiKey: 'YOUR_VALID_API_KEY',
  environment: 'TEST',
});

// Initialize Terminal Management
const terminalManagement = new TerminalManagement(client);

// Define the test request
const request = {
    terminalId: 'VALID_TERMINAL_ID', // Replace with an actual terminal ID
    settings: {
        gratuities: null,
        hardware: {
            restartHour: null,
            resetTotalsHour: null,
        },
        localization: null,
        nexo: null,
        payAtTable: null,
        receiptOptions: null,
        receiptPrinting: null,
        standalone: null,
    },
};

// Run the test
terminalManagement.updateTerminalSettings(request)
    .then((response) => {
        console.log('Response:', response);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

  