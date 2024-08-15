document.getElementById('extractDataButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        console.log('Sending extractData message to content script');
        
        chrome.tabs.sendMessage(tabId, { action: 'extractData' }, (response) => {
            console.log('Content script response:', response);
        });
    });
});

