'use strict';

/**
 * This controller handles customer service related pages, such as the contact us form.
 *
 * @module controllers/CustomerService
 */

/* API Includes */
var Status = require('dw/system/Status');

/* Script Modules */
var app = require('~/cartridge/scripts/app');
var guard = require('~/cartridge/scripts/guard');


/**
 * Renders the customer service overview page.
 */
function show() {
    app.getView('CustomerService').render('content/customerservice');
}

/**
 * Renders the left hand navigation.
 */
function leftNav() {
    app.getView('CustomerService').render('content/customerserviceleftnav');
}

/**
 * Provides a contact us form which sends an email to the configured customer service email address.
 */
function contactUs() {
    app.getForm('contactus').clear();
    if (customer.authenticated) {
        var contactusform = app.getForm('contactus').object;
        contactusform.firstname.value = customer.profile.firstName;
        contactusform.lastname.value = customer.profile.lastName;
        contactusform.email.value = customer.profile.email;
    }
    app.getView('CustomerService').render('content/contactus');
}

/**
 * The form handler for the contactus form.
 */
function submit() {
    var contactUsForm = app.getForm('contactus');
    var contactUsResult = contactUsForm.handleAction({
        send: function (formgroup) {
            // Change the MailTo in order to send to the store's customer service email address. It defaults to the
            // user's email.
            var Email = app.getModel('Email');
            return Email.get(
                'mail/contactus',
                require('dw/system/Site').current.getCustomPreferenceValue('customerServiceEmail')
            )
                .setFrom(formgroup.email.value)
                .setSubject(formgroup.myquestion.value)
                .send({});
        },
        error: function () {
            // No special error handling if the form is invalid.
            return null;
        }
    });

    if (contactUsResult && (contactUsResult.getStatus() === Status.OK)) {
        /**
         * @type {dw.system.HookMgr}
         */
        const HookMgr = require('dw/system/HookMgr');
        var hookID = 'app.case.created';
        if (HookMgr.hasHook(hookID)) {
            HookMgr.callHook(
                hookID,
                hookID.slice(hookID.lastIndexOf('.') + 1),
                contactUsForm
            );
        } else {
            require('dw/system/Logger').debug('no hook registered for {0}', hookID);
        }

        app.getView('CustomerService', {
            ConfirmationMessage: 'edit'
        }).render('content/contactus');
    } else {
        app.getView('CustomerService').render('content/contactus');
    }
}

/*
 * Module exports
 */

/*
 * Web exposed methods
 */
/** @see module:controllers/CustomerService~show */
exports.Show = guard.ensure(['get'], show);
/** @see module:controllers/CustomerService~leftNav */
exports.LeftNav = guard.ensure(['get'], leftNav);
/** @see module:controllers/CustomerService~contactUs */
exports.ContactUs = guard.ensure(['get', 'https'], contactUs);
/** @see module:controllers/CustomerService~submit */
exports.Submit = guard.ensure(['post', 'https'], submit);
