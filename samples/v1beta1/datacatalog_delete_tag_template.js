// DO NOT EDIT! This is a generated sample ("Request",  "datacatalog_delete_tag_template")
'use strict';

// sample-metadata:
//   title:
//   description: Delete Tag Template
//   usage: node samples/v1beta1/datacatalog_delete_tag_template.js [--project_id "[Google Cloud Project ID]"] [--location_id "[Google Cloud Location ID]"] [--tag_template_id "[Tag Template ID]"] [--force true]

// [START datacatalog_delete_tag_template]

const datacatalog = require('@google-cloud/datacatalog').v1beta1;

/**
 * Delete Tag Template
 *
 * @param projectId {string} Your Google Cloud project ID.
 * @param locationId {string} Google Cloud region, e.g. us-central1.
 * @param tagTemplateId {string} The Tag Template ID.
 * @param force {boolean} Confirms the deletion of any possible tags using the template.
 */
function sampleDeleteTagTemplate(projectId, locationId, tagTemplateId, force) {
  const client = new datacatalog.DataCatalogClient();
  // const projectId = '[Google Cloud Project ID]';
  // const locationId = '[Google Cloud Location ID]';
  // const tagTemplateId = '[Tag Template ID]';
  // const force = true;
  const formattedName = client.tagTemplatePath(
    projectId,
    locationId,
    tagTemplateId
  );
  const request = {
    name: formattedName,
    force: force,
  };
  client.deleteTagTemplate(request).catch(err => {
    console.error(err);
  });
}

// [END datacatalog_delete_tag_template]
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
  })
  .option('force', {
    default: true,
    boolean: true,
  }).argv;

sampleDeleteTagTemplate(
  argv.project_id,
  argv.location_id,
  argv.tag_template_id,
  argv.force
);
