// DO NOT EDIT! This is a generated sample ("Request",  "datacatalog_create_tag_template")
'use strict';

// sample-metadata:
//   title:
//   description: Create Tag Template
//   usage: node samples/v1beta1/datacatalog_create_tag_template.js [--project_id "[Google Cloud Project ID]"] [--location_id "[Google Cloud Location ID]"]

// [START datacatalog_create_tag_template]

const datacatalog = require('@google-cloud/datacatalog').v1beta1;

/**
 * Create Tag Template
 *
 * @param projectId {string} Your Google Cloud project ID.
 * @param locationId {string} Google Cloud region, e.g. us-central1.
 */
function sampleCreateTagTemplate(projectId, locationId) {
  const client = new datacatalog.DataCatalogClient();
  // const projectId = '[Google Cloud Project ID]';
  // const locationId = '[Google Cloud Location ID]';
  const formattedParent = client.locationPath(projectId, locationId);

  // The Tag Template ID.
  const tagTemplateId = 'sample_tag_template';
  const displayName = 'Sample Tag Template';
  const displayName2 = 'Source of data asset';
  const primitiveType = 'STRING';
  const type = {
    primitiveType: primitiveType,
  };
  const fieldsItem = {
    displayName: displayName2,
    type: type,
  };
  const displayName3 = 'Number of rows in data asset';
  const primitiveType2 = 'DOUBLE';
  const type2 = {
    primitiveType: primitiveType2,
  };
  const fieldsItem2 = {
    displayName: displayName3,
    type: type2,
  };
  const displayName4 = 'Has PII';
  const primitiveType3 = 'BOOL';
  const type3 = {
    primitiveType: primitiveType3,
  };
  const fieldsItem3 = {
    displayName: displayName4,
    type: type3,
  };
  const displayName5 = 'PII type';
  const displayName6 = 'EMAIL';
  const allowedValuesElement = {
    displayName: displayName6,
  };
  const displayName7 = 'SOCIAL SECURITY NUMBER';
  const allowedValuesElement2 = {
    displayName: displayName7,
  };
  const displayName8 = 'NONE';
  const allowedValuesElement3 = {
    displayName: displayName8,
  };
  const allowedValues = [
    allowedValuesElement,
    allowedValuesElement2,
    allowedValuesElement3,
  ];
  const enumType = {
    allowedValues: allowedValues,
  };
  const type4 = {
    enumType: enumType,
  };
  const fieldsItem4 = {
    displayName: displayName5,
    type: type4,
  };
  const fields = {
    source: fieldsItem,
    num_rows: fieldsItem2,
    has_pii: fieldsItem3,
    pii_type: fieldsItem4,
  };

  // The Tag Template.
  const tagTemplate = {
    displayName: displayName,
    fields: fields,
  };
  const request = {
    parent: formattedParent,
    tagTemplateId: tagTemplateId,
    tagTemplate: tagTemplate,
  };
  client
    .createTagTemplate(request)
    .then(responses => {
      const response = responses[0];
      console.log(`Tag Template name: ${response.name}`);
    })
    .catch(err => {
      console.error(err);
    });
}

// [END datacatalog_create_tag_template]
// tslint:disable-next-line:no-any

const argv = require(`yargs`)
  .option('project_id', {
    default: '[Google Cloud Project ID]',
    string: true,
  })
  .option('location_id', {
    default: '[Google Cloud Location ID]',
    string: true,
  }).argv;

sampleCreateTagTemplate(argv.project_id, argv.location_id);
