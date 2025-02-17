const appInsights = require('applicationinsights');
const express = require('express');
const app = express();

// Replace '<INSTRUMENTATION_KEY>' with your actual Application Insights instrumentation key
appInsights.setup('InstrumentationKey=1d5244fe-6673-42e9-9c1d-3a09d4e76491;IngestionEndpoint=https://canadacentral-1.in.applicationinsights.azure.com/;LiveEndpoint=https://canadacentral.livediagnostics.monitor.azure.com/;ApplicationId=93c4d752-62aa-479d-8182-60a31cceb0a2')
           .setAutoCollectConsole(true, true)
           .setSendLiveMetrics(true)
           .start();

app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log('Hello, World! request received');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
