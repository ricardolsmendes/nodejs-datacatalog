// DO NOT EDIT! This is a generated sample ("RequestAsyncPagedAll",  "data_catalog_search")
'use strict';

// sample-metadata:
//   title:
//   description: Search Catalog
//   usage: node samples/v1beta1/data_catalog_search.js [--include_project_id "[Google Cloud Project ID]"] [--include_gcp_public_datasets False] [--query "[String in search query syntax]"]

// [START data_catalog_search]

const datacatalog = require('@google-cloud/datacatalog').v1beta1;

/**
 * Search Catalog
 *
 * @param includeProjectId {string} Your Google Cloud project ID.
 * @param includeGcpPublicDatasets {boolean} If true, include Google Cloud Platform (GCP) public
 * datasets in the search results.
 * @param query {string} Your query string.
 */
function sampleSearchCatalog(
  includeProjectId,
  includeGcpPublicDatasets,
  query
) {
  const client = new datacatalog.DataCatalogClient();
  // Iterate over all elements.
  // const includeProjectId = '[Google Cloud Project ID]';
  // const includeGcpPublicDatasets = false;
  // const query = '[String in search query syntax]';
  const includeProjectIds = [includeProjectId];
  const scope = {
    includeProjectIds: includeProjectIds,
    includeGcpPublicDatasets: includeGcpPublicDatasets,
  };
  const request = {
    scope: scope,
    query: query,
  };

  client
    .searchCatalog(request)
    .then(responses => {
      const resources = responses[0];
      for (const resource of resources) {
        console.log(`Result type: ${resource.searchResultType}`);
        console.log(`Result subtype: ${resource.searchResultSubtype}`);
        console.log(`Relative resource name: ${resource.relativeResourceName}`);
        console.log(`Linked resource: ${resource.linkedResource}\n`);
      }
    })
    .catch(err => {
      console.error(err);
    });
}

// [END data_catalog_search]
// tslint:disable-next-line:no-any

const argv = require(`yargs`)
  .option('include_project_id', {
    default: '[Google Cloud Project ID]',
    string: true,
  })
  .option('include_gcp_public_datasets', {
    default: false,
    boolean: true,
  })
  .option('query', {
    default: '[String in search query syntax]',
    string: true,
  }).argv;

sampleSearchCatalog(
  argv.include_project_id,
  argv.include_gcp_public_datasets,
  argv.query
);
