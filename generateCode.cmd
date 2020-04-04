
mkdir %temp%\input
copy .\marketplaceFulfillmentOpenAPI302.yaml %temp%\input
(FOR %%l IN (csharp python java typescript go ruby) DO (
    docker run --rm --name autorest -v "%cd%"/out:/out -v "%temp%"/input/:/input ercenk/autorest autorest --input-file=/input/marketplaceFulfillmentOpenAPI302.yaml --v3 --"%%l" --output-folder=/out/"%%l" --namespace=AzureMarketplace.SaaS 
))


rmdir /s /q %temp%\input
