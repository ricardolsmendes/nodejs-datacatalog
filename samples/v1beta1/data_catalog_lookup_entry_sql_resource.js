// DO NOT EDIT! This is a generated sample ("Request",  "data_catalog_lookup_entry_sql_resource")
'use strict';

// sample-metadata:
//   title:
//   description: Lookup Entry using SQL resource
//   usage: node samples/v1beta1/data_catalog_lookup_entry_sql_resource.js [--sql_name "[SQL Resource Name]"]

// [START data_catalog_lookup_entry_sql_resource]

const datacatalog = require('@google-cloud/datacatalog').v1beta1;

/**
 * Lookup Entry using SQL resource
 *
 * @param sqlName {string} The SQL name of the Google Cloud Platform resource the Data Catalog entry
 * represents.
 * Examples:
 * bigquery.table.`projectId`.`datasetId`.`tableId`
 * pubsub.topic.`projectId`.`topicId`
 */
function sampleLookupEntry(sqlName) {
  const client = new datacatalog.DataCatalogClient();
  // const sqlName = '[SQL Resource Name]';

  client
    .lookupEntry({sqlResource: sqlName})
    .then(responses => {
      const response = responses[0];
      const entry = response;
      console.log(`Entry name: ${entry.name}`);
      console.log(`Entry type: ${entry.type}`);
      console.log(`Linked Resource name: ${entry.linkedResource}`);
      console.log(`Display name: ${entry.displayName}`);
      console.log(`Description: ${entry.description}`);
    })
    .catch(err => {
      console.error(err);
    });
}

// [END data_catalog_lookup_entry_sql_resource]
// tslint:disable-next-line:no-any

const argv = require(`yargs`).option('sql_name', {
  default: '[SQL Resource Name]',
  string: true,
}).argv;

sampleLookupEntry(argv.sql_name);
