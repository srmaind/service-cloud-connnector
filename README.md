# Salesforce B2C Commerce to Service Cloud Connector #

## Introduction ##

The Salesforce B2C Commerce to Service Cloud Connector is a Salesforce Labs project that facilitates the integration between Salesforce B2C Commerce and Service Clouds.  The labs project provides a framework to integrating these two clouds leveraging public REST APIs to share and synchronize data between the two clouds.

## Application Overview ##

###### This section provides a high-level summary of the purpose and architectural structure of the Salesforce B2C Commerce and Service Cloud Integrations.

The service-cloud-connector enables the viewing and management of Salesforce B2C Commerce case, customer, order, shipment, and payment data in Service Cloud via a CRM style _single view of the customer_.  These features facilitate the data synchronization of customers, customer addresses, orders, order line items, shipments, and payments between Salesforce B2C Commerce and Service Cloud via a collection of REST services provided by both clouds.

The Commerce-to-Service Connector uses the Salesforce B2C Commerce Open Commerce API (OCAPI) and a series of Service Cloud enabled REST services to 'announce' to Service Cloud when relevant data objects in Salesforce B2C Commerce have been created or modified. Through these announcements, Service Cloud requests the identified data objects (ex. customers or orders) via OCAPI -- and then ingest elements of those data objects to create Service Cloud representations.

> This integration is an 'above the API' integration achieved via REST services -- and is not a low-level platform integration.

#### Feature Summary

The following high-level features are supported by the service-cloud-connector:

- Submit cases for anonymous and registered storefront customers from a Salesforce B2C Storefront
- Retrieve the details for a specific case from Service Cloud
- Retrieve all the cases associated to a storefront customer represented in Service Cloud
- Synchronization of registered Salesforce B2C Commerce customer profiles and profile-specific addresses between Service and Commerce Clouds
- Synchronization of placed Salesforce B2C Commerce order data between Service and Commerce Clouds
- Two CRM and Call Center style applications in Service Cloud through which customer, case, and order information can be viewed

#### Implementation Guidance

The service-cloud-connector will require a combination of installation, configuration, and customization to both the Salesforce B2C Commerce storefront and Service Cloud to fully realize the complete feature-set.

Unlike other Salesforce Connectors, the service-cloud-connector is not a 'plug and play' solution -- and should be thought of as an implementation framework to enable common service-for-commerce use cases.  As service tends to be highly customized from brand to brand, teams should expect to customize their initial implementation of the service-cloud-connector to meet the specific needs of each brand.  The documentation outlined in this page explains the implementation pre-requisites, installation instructions, configuration requirements, and the specific customizations necessary to fully enable the service-cloud-connector feature-set.

## Application Documentation ##
###### This section outlines the different documentation available -- explaining how to install, configure, and extend the Salesforce Labs project.

#### [Release Summary](./docs/releases/releaseSummary.md)

Release notes and links to [issue tickets](https://github.com/SalesforceCommerceCloud/service-cloud-connector/issues) delivered per release are captured in the connector's release notes.  Please review this section as well as our known [open issues list](https://github.com/SalesforceCommerceCloud/service-cloud-connector/issues) to understand which issues have been addressed with a given release, as well as the known issues that exist with the service-cloud-connector.

#### [Supported Use Cases](./docs/supportedUseCases.md)

The service-cloud-connector supports a specific collection of use-cases that facilitate the synchronization of customer, customer address, and order details between Salesforce B2C Commerce and Service Cloud.  Please review this section for details on each supported use-case including caveats and considerations.

#### [Setup Service Cloud](./docs/setupServiceCloud.md)

This section provides guidance on how to configure Service Cloud to support the service-cloud-connector feature-set.  Instructions include configuration settings, the installation of the deployment package, credential definition, and custom setting updates.

#### [Configure the Service Cloud Data Objects](./docs/configureDataObjects.md)

With the base service-cloud-connector configuration completed, the data objects leveraged by the connector can be customized for customer-specific operation.  This section with provide guidance on what objects are leveraged and the minimal configuration necessary of these objects to support the service-cloud-connector use cases.

#### Create the Unified Customer UI in Service Cloud

The service-cloud-connector creates two Lightning Applications (CRM and Contact Center).  This section provides guidance on how to customize these applications to include additional Salesforce object properties.  It also provides guidance on the Lightning and Visualforce components that are added to create the CRM and Contact Center views.

#### [Setup Salesforce B2C Commerce](./docs/setupB2CCommerce.md)

This section provides guidance on how to configure Salesforce B2C Commerce to support the service-cloud-connector feature-set.  Instructions include importing and configuring site preferences, custom object definition, required services, and OCAPI Shop and DATA API resources.

#### [Setup the Salesforce B2C Commerce Jobs](./docs/setupB2CCommerceJobs.md)

With the Salesforce B2C Commerce configuration complete, you now can setup the [int_service_cloud](./b2c/sfcc/cartridges/int_service_cloud) cartridge and configure the scheduled jobs use synchronize Salesforce B2C Commerce customer and order data with Service Cloud.

#### [Customize the Salesforce B2C Commerce Storefront (SiteGenesis)](./docs/customizeB2CStorefrontSG.md)

With the [int\_service\_cloud]() cartridge installed and the synchronization jobs configured, you can now extend your storefront code to include the hooks and customizations required to implement the service-cloud-connector feature-set.  This section will provide guidance on enabling case creation, customer, and order synchronization.

#### [Customize the Salesforce B2C Commerce Storefront (SFRA)](./docs/customizeB2CStorefrontSFRA.md)

With the [int\_service\_cloud]() cartridge installed and the synchronization jobs configured, you can now extend your storefront code to include the hooks and customizations required to implement the service-cloud-connector feature-set.  This section will provide guidance on enabling case creation, customer, and order synchronization.

#### [Validate the Environments](./docs/validateEnvironments.md)

With both Service Cloud and Salesforce B2C Commerce configured, you can use [Postman](https://www.getpostman.com/apps) to validate that each cloud can accept authenticated REST requests from the other.  This page provides guidance on how to test each cloud's configuration, and will walk readers through the setup of the [Postman Service Cloud Connector Test Suite](./postman/serviceCloudConnector.testSuite.json).

#### [Troubleshooting and Debugging](./docs/troubleshootingAndDebugging.md)

This section provides guidance on how to monitor the execution of the REST communication between Salesforce B2C Commerce and Service Cloud.  Included is guidance on monitoring log-files, troubleshooting cross-cloud interactions, and how to search log-files for keywords pointing to faults and exceptions that occur in Service Cloud and Salesforce B2C Commerce.

## Terms & Conditions ##

As a Salesforce Labs project, Salesforce does not provide support for this application.

THIS APPLICATION IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL OR SIMILAR DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

SUBJECT TO THE FOREGOING, THIS APPLICATION MAY BE FREELY REPRODUCED, DISTRIBUTED, TRANSMITTED, USED, MODIFIED, BUILT UPON, OR OTHERWISE EXPLOITED BY OR ON BEHALF OF SALESFORCE.COM OR ITS AFFILIATES, ANY CUSTOMER OR PARTNER OF SALESFORCE.COM OR ITS AFFILIATES, OR ANY DEVELOPER OF APPLICATIONS THAT INTERFACE WITH THE SALESFORCE.COM APPLICATION, FOR ANY PURPOSE, COMMERCIAL OR NON-COMMERCIAL, RELATED TO USE OF THE SALESFORCE.COM APPLICATION, AND IN ANY WAY, INCLUDING BY METHODS THAT HAVE NOT YET BEEN INVENTED OR CONCEIVED.
