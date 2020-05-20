'use strict';

/**
 * @module hooks/account
 */

/**
 * @type {dw.system.Logger}
 */
const Logger = require('dw/system/Logger');

/**
 * @type {module:ServiceMgr}
 */
const ServiceMgr = require('../ServiceMgr');
/**
 * @type {dw.system.Logger}
 */
const LOGGER = Logger.getLogger('int_service_cloud', 'hooks.account');

/**
 * Customer account created
 * @param {dw.customer.Customer} customerToExport
 */
function accountCreated(customerToExport) {
    handleExport(customerToExport, 'created');
}

/**
 * Customer account updated
 * @param {dw.customer.Customer} customerToExport
 */
function accountUpdated(customerToExport) {
    handleExport(customerToExport, 'updated');
}

/**
 * This method will export the given {customer} details to Service Cloud through REST API
 * If the async mode is disabled
 *
 * @param {dw.customer.Customer} customerToExport
 * @param {String} status
 */
function handleExport(customerToExport, status) {
    var svc;
    var endpoint;

    // Retrieve the current site and it's operation-mode value
    var Site = require('dw/system/Site').getCurrent();
    var isSyncMode = Site.getCustomPreferenceValue('sscIsAsync');

    // Exit early if we're not running in asynchronous-mode
    if (!isSyncMode) { return; }

    var sccContactModel = new (require('../models/contact'))(customerToExport);

    try {
        if (status === 'created') {
            svc = ServiceMgr.restCreate();
            endpoint = ServiceMgr.restEndpoints.create.account;
        } else {
            svc = ServiceMgr.restUpdate();
            endpoint = ServiceMgr.restEndpoints.update.account;
        }

        // Check if the svc variable is not undefined
        // Cannot use empty() as empty(svc) returns false even if the service is correctly initialized
        if (typeof svc === 'undefined' || empty(endpoint)) {
            return;
        }

        sccContactModel.updateStatus(status);
        var result = svc.call(endpoint, JSON.stringify(sccContactModel));

        if (result.status === 'OK') {
            if (result.object && !result.object.isError && !result.object.isAuthError) {
                sccContactModel.updateStatus('exported');
                sccContactModel.updateExternalId(result.object.responseObj.contactId, result.object.responseObj.accountId);
                sccContactModel.updateSyncResponseText('Successfully Exported');
            } else {
                sccContactModel.updateSyncResponseText(result.object.errorText);
            }
        } else {
            // @TODO log error
            sccContactModel.updateSyncResponseText(result.msg);
        }
    } catch (e) {
        sccContactModel.updateSyncResponseText(e.message);
        LOGGER.error('Error occurred updating customer: {0}', e.message);
        throw e;
    }
}

exports.created = accountCreated;
exports.updated = accountUpdated;
