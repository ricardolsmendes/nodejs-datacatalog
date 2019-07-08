// DO NOT EDIT! This is a generated sample ("Request",  "data_catalog_lookup_entry")
'use strict';

// sample-metadata:
//   title:
//   description: Lookup Entry
//   usage: node samples/v1beta1/data_catalog_lookup_entry.js [--resource_name "[Full Resource Name]"]

// [START data_catalog_lookup_entry]

const datacatalog = require('@google-cloud/datacatalog').v1beta1;

/**
 * Lookup Entry
 *
 * @param resourceName {string} The full name of the Google Cloud Platform resource the Data Catalog
 * entry represents.
 * See: https://cloud.google.com/apis/design/resource_names#full_resource_name
 * Examples:
 * //bigquery.googleapis.com/projects/bigquery-public-data/datasets/new_york_taxi_trips/tables/taxi_zone_geom
 * //pubsub.googleapis.com/projects/pubsub-public-data/topics/taxirides-realtime
 */
function sampleLookupEntry(resourceName) {
  const client = new datacatalog.DataCatalogClient();
  // const resourceName = '[Full Resource Name]';

  client
    .lookupEntry({linkedResource: resourceName})
    .then(responses => {
      const response = responses[0];
      const entry = response;
      console.log(`Entry name: ${entry.name}`);
      console.log(`Entry type: ${entry.type}`);
      console.log(`Linked resource: ${entry.linkedResource}`);
    })
    .catch(err => {
      console.error(err);
    });
}

// [END data_catalog_lookup_entry]
// tslint:disable-next-line:no-any

const argv = require(`yargs`).option('resource_name', {
  default: '[Full Resource Name]',
  string: true,
}).argv;

sampleLookupEntry(argv.resource_name);
