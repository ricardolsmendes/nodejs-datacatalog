// DO NOT EDIT! This is a generated sample ("Request",  "datacatalog_get_entry")
'use strict';

// sample-metadata:
//   title:
//   description: Get Entry
//   usage: node samples/v1beta1/datacatalog_get_entry.js [--project_id "[Google Cloud Project ID]"] [--location_id "[Google Cloud Location ID]"] [--entry_group_id "[Entry Group ID]"] [--entry_id "[Entry ID]"]

// [START datacatalog_get_entry]

const datacatalog = require('@google-cloud/datacatalog').v1beta1;

/**
 * Get Entry
 *
 * @param projectId {string} Your Google Cloud project ID
 * @param locationId {string} Google Cloud region, e.g. us-central1
 * @param entryGroupId {string} ID of the Entry Group, e.g. @bigquery, @pubsub
 * @param entryId {string} ID of the Entry
 */
function sampleGetEntry(projectId, locationId, entryGroupId, entryId) {
  const client = new datacatalog.DataCatalogClient();
  // const projectId = '[Google Cloud Project ID]';
  // const locationId = '[Google Cloud Location ID]';
  // const entryGroupId = '[Entry Group ID]';
  // const entryId = '[Entry ID]';
  const formattedName = client.entryPath(
    projectId,
    locationId,
    entryGroupId,
    entryId
  );
  client
    .getEntry({name: formattedName})
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

// [END datacatalog_get_entry]
// tslint:disable-next-line:no-any

const argv = require(`yargs`)
  .option('project_id', {
    default: '[Google Cloud Project ID]',
    string: true,
  })
  .option('location_id', {
    default: '[Google Cloud Location ID]',
    string: true,
  })
  .option('entry_group_id', {
    default: '[Entry Group ID]',
    string: true,
  })
  .option('entry_id', {
    default: '[Entry ID]',
    string: true,
  }).argv;

sampleGetEntry(
  argv.project_id,
  argv.location_id,
  argv.entry_group_id,
  argv.entry_id
);
