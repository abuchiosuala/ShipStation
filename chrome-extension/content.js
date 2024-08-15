chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'extractData') {
        console.log('Received extractData message in content script');

        // Name of person
        const xpathExpressionName = '//dl/slot/records-record-layout-row[3]/slot/records-record-layout-item[1]/div/div/dd/div/span';
        const elementName = document.evaluate(xpathExpressionName, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const name = elementName ? elementName.innerText : null;
        const lines = name.split('\n')
        const Newname = lines[0]
        // Name of person
        console.log('Element Name:', elementName);
        console.log('Extracted name:', Newname);

        //Company Name
        const xpathExpressionComp = '//dl/slot/records-record-layout-row[2]/slot/records-record-layout-item[1]/div/div/dd/div/span';
        const elementComp = document.evaluate(xpathExpressionComp, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const comp = elementComp ? elementComp.innerText : null;
        const line = comp.split('\n')
        const company = line[0]
        console.log('Element Comp:', elementComp);
        console.log('Extracted company name:', company);

        //Address
        const xpathExpressionAddy = '//dl/slot/records-record-layout-row[1]/slot/records-record-layout-item[2]/div/div/dd/div/span/slot[1]/records-formula-output/slot/formula-output-formula-html/lightning-formatted-rich-text/span';
        const elementAddy = document.evaluate(xpathExpressionAddy, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const addy = elementAddy ? elementAddy.innerText : null;
        
        let newAddy = null;
        if (addy) {
            // Split the address by newline characters
            const newLine = addy.split('\n');
            newAddy = newLine[1]; 
            console.log('Extracted address line:', newAddy);
        }
        console.log('Element Addy:', elementAddy);
        console.log('Extracted addy :', newAddy);
        //Address

        //City
        const xpathExpressionCity = '//html/body/div[4]/div[1]/section/div[1]/div/div[2]/div[2]/section[1]/div/div/section/div/div[2]/div/div/div/div/one-record-home-flexipage2/forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-n-a_-custom_-sample_-request___-sample_-request__c___-v-i-e-w___-l-m-t___1700236895000/forcegenerated-flexipage_na_custom_sample_request_sample_request__c__view_js___lmt___1700236895000/record_flexipage-desktop-record-page-decorator/div[1]/records-record-layout-event-broker/slot/slot/flexipage-record-home-template-desktop2/div/div[2]/div[1]/slot/flexipage-component2/slot/flexipage-tabset2/div/lightning-tabset/div/slot/slot/flexipage-tab2[2]/slot/flexipage-component2/slot/records-lwc-detail-panel/records-base-record-form/div/div/div/div/records-lwc-record-layout/forcegenerated-detailpanel_sample_request__c___0121y000001j4luqas___full___view___recordlayout2/records-record-layout-block/slot/records-record-layout-section[4]/div/div/dl/slot/records-record-layout-row[2]/slot/records-record-layout-item[1]/div/div/dd/div/span/slot[1]/lightning-formatted-text'
        console.log(xpathExpressionCity)
        const elementCity = document.evaluate(xpathExpressionCity, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
        const city = elementCity ? elementCity.innerText : null
        console.log('Element City: ',elementCity)
        console.log("Extracted City: ", city)
        //City

        //Zip Code
        const xpathExpressionZip = '//html/body/div[4]/div[1]/section/div[1]/div/div[2]/div[2]/section[1]/div/div/section/div/div[2]/div/div/div/div/one-record-home-flexipage2/forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-n-a_-custom_-sample_-request___-sample_-request__c___-v-i-e-w___-l-m-t___1700236895000/forcegenerated-flexipage_na_custom_sample_request_sample_request__c__view_js___lmt___1700236895000/record_flexipage-desktop-record-page-decorator/div[1]/records-record-layout-event-broker/slot/slot/flexipage-record-home-template-desktop2/div/div[2]/div[1]/slot/flexipage-component2/slot/flexipage-tabset2/div/lightning-tabset/div/slot/slot/flexipage-tab2[2]/slot/flexipage-component2/slot/records-lwc-detail-panel/records-base-record-form/div/div/div/div/records-lwc-record-layout/forcegenerated-detailpanel_sample_request__c___0121y000001j4luqas___full___view___recordlayout2/records-record-layout-block/slot/records-record-layout-section[4]/div/div/dl/slot/records-record-layout-row[5]/slot/records-record-layout-item[1]/div/div/dd/div/span/slot[1]/lightning-formatted-text'
        const elementZip = document.evaluate(xpathExpressionZip, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const zip = elementZip ? elementZip.innerText : null
        console.log('Element Zip:', elementZip);
        console.log('Extracted Zip Coce:', zip);
        //Zip Code

        //Order Number
        const xpathExpressionOrder = '//div/div/div/one-record-home-flexipage2/forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___-n-a_-custom_-sample_-request___-sample_-request__c___-v-i-e-w___-l-m-t___1700236895000/forcegenerated-flexipage_na_custom_sample_request_sample_request__c__view_js___lmt___1700236895000/record_flexipage-desktop-record-page-decorator/div[1]/records-record-layout-event-broker/slot/slot/flexipage-record-home-template-desktop2/div/div[1]/slot/flexipage-component2[1]/slot/records-lwc-highlights-panel/records-lwc-record-layout/forcegenerated-highlightspanel_sample_request__c___0121y000001j4luqas___compact___view___recordlayout2/records-highlights2/div[1]/div[1]/div[1]/div[2]/h1/slot/lightning-formatted-text'
        const elementOrder = document.evaluate(xpathExpressionOrder, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const orderNumber = elementOrder ? elementOrder.innerText : null
        console.log("Extracted Element: ", elementOrder)
        console.log('Extracted Order Number:', orderNumber);

        if (!name || !orderNumber || !zip) {
            console.error('Failed to extract name from the page');
            sendResponse({ status: 'error', message: 'Failed to extract name' });
            return;
        }
        
        // Send the extracted data to the server
        fetch('http://localhost:3000/run-script', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Newname: Newname, companyName: company, addy: newAddy, City: city, Zip: zip, OrderNumber: orderNumber  })
        })
        .then(response => response.text())
        .then(result => {
            console.log('Server response:', result);
            sendResponse({ status: 'success', result });
            window.location.reload();  
        })
        .catch(error => {
            console.error('Error sending data to server:', error);
            sendResponse({ status: 'error', error });
            window.location.reload(); 
        });

        return true;
    }
});
