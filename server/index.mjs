import express from 'express';
import { launch } from 'puppeteer';

const app = express();
const port = 3000;

// CORS policy
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use(express.json());

app.post('/run-script', async (req, res) => {
    console.log('Received request to run script');

    try {
        // recieving the data 
        const { Newname, companyName, addy, City, Zip, OrderNumber } = req.body;
        console.log('Received data:', { Newname, companyName, addy, City, Zip, OrderNumber });

        const browser = await launch({ headless: false });
        const page = await browser.newPage();

        page.setDefaultTimeout(120000);

        await page.setViewport({ width: 1440 , height: 820 });

        //going to the ship station page
        await page.goto('https://ship3.shipstation.com/orders/awaiting-shipment', { waitUntil: 'networkidle2' });

        //filling in the username and email
        await page.locator('#username').fill('formlabssales');
        await page.locator('#password').fill('salesteam');
        await page.locator('#btn-login').click();

        // Filling in Name
        await page.waitForSelector('#US-name-input', { visible: true });
        await page.locator('#US-name-input').fill(Newname);

        // Filling in company name
        await page.waitForSelector('#US-company-input', {visible: true});
        await page.locator('#US-company-input').fill(companyName )

        // Filling in compnay address
        await page.waitForSelector('#US-line1-input', {visible: true});
        await page.locator('#US-line1-input').fill(addy);

        // Filling in compnay city
        await page.waitForSelector('#US-city-input', {visible: true});
        await page.locator('#US-city-input').fill(City)

        // Filling in company zip code
        await page.waitForSelector('#US-postalCode-input', {visible: true})
        await page.locator('#US-postalCode-input'). fill(Zip);

        // Filling in order number
        await page.waitForSelector('#Order\\ \\#-input', {visible: true});
        await page.locator('#Order\\ \\#-input').fill(OrderNumber)
    
        res.send('Script executed successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while running the script.');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
