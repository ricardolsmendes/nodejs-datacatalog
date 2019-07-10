// DO NOT EDIT! This is a generated sample ("Request",  "data_catalog_get_iam_policy")
'use strict';

// sample-metadata:
//   title:
//   description: Get IAM Policy
//   usage: node samples/v1beta1/data_catalog_get_iam_policy.js [--project_id "[Google Cloud Project ID]"] [--location_id "[Google Cloud Location ID]"] [--tag_template_id "[Tag Template ID]"]

// [START data_catalog_get_iam_policy]

const datacatalog = require('@google-cloud/datacatalog').v1beta1;

/**
 * Get IAM Policy
 *
 * @param projectId {string} Your Google Cloud project ID
 * @param locationId {string} Google Cloud region, e.g. us-central1
 * @param tagTemplateId {string} ID of the Tag Template
 */
function sampleGetIamPolicy(projectId, locationId, tagTemplateId) {
  const client = new datacatalog.DataCatalogClient();
  // const projectId = '[Google Cloud Project ID]';
  // const locationId = '[Google Cloud Location ID]';
  // const tagTemplateId = '[Tag Template ID]';
  const formattedResource = client.tagTemplatePath(
    projectId,
    locationId,
    tagTemplateId
  );
  client
    .getIamPolicy({resource: formattedResource})
    .then(responses => {
      const response = responses[0];
      const policy = response;
      console.log(`Current bindings: ${policy.bindings}`);
    })
    .catch(err => {
      console.error(err);
    });
}

// [END data_catalog_get_iam_policy]
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
  .option('tag_template_id', {
    default: '[Tag Template ID]',
    string: true,
  }).argv;

sampleGetIamPolicy(argv.project_id, argv.location_id, argv.tag_template_id);
