## Modules
Module | Description
------ | -----------
[controllers/Case](#markdown-header-controllerscase) | Description of the Controller and the logic it provides
[hooks/account](#markdown-header-hooksaccount) | 
[hooks/case](#markdown-header-hookscase) | 
[hooks/customerOrder](#markdown-header-hookscustomerorder) | 
[jobs/customerSync](#markdown-header-jobscustomersync) | 
[jobs/orderSync](#markdown-header-jobsordersync) | 
[models/authToken](#markdown-header-modelsauthtoken) | 
[models/case](#markdown-header-modelscase) | 
[models/CaseModel](#markdown-header-modelscasemodel) | Model to manage customer caseObj information. Creates a CaseModel class that with helper methods
to get and create caseObj, create and edit caseObj.
[models/contact](#markdown-header-modelscontact) | 
[models/order](#markdown-header-modelsorder) | 
[int_service_cloud](#markdown-header-int_service_cloud-object) : Object | Registry object
[ServiceMgr](#markdown-header-servicemgr) | 
[services/auth](#markdown-header-servicesauth) | 
[services/rest](#markdown-header-servicesrest) | 
[util/helpers](#markdown-header-utilhelpers) | 

## controllers/Case
Description of the Controller and the logic it provides


* [controllers/Case](#markdown-header-controllerscase)
    * [.List](#markdown-header-controllerscaselist)
    * [.Show](#markdown-header-controllerscaseshow)

### controllers/Case.List
Renders the case listing page.

**Kind**: static property of [controllers/Case](#markdown-header-controllerscase)  
**See**: {@link module:controllers/Case~list}
### controllers/Case.Show
Renders the case overview.

**Kind**: static property of [controllers/Case](#markdown-header-controllerscase)  
**See**: {@link module:controllers/Case~show}
## hooks/account

* [hooks/account](#markdown-header-hooksaccount)
    * [~Logger](#markdown-header-hooksaccountlogger-dwsystemlogger) : dw.system.Logger
    * [~ServiceMgr](#markdown-header-hooksaccountservicemgr-moduleservicemgr) : [ServiceMgr](#markdown-header-hooksaccountservicemgr-moduleservicemgr)
    * [~LOGGER](#markdown-header-hooksaccountlogger-dwsystemlogger) : dw.system.Logger
    * [~accountCreated(customerToExport)](#markdown-header-hooksaccountaccountcreatedcustomertoexport)
    * [~accountUpdated(customerToExport)](#markdown-header-hooksaccountaccountupdatedcustomertoexport)
    * [~handleExport(customerToExport, status)](#markdown-header-hooksaccounthandleexportcustomertoexport-status)

### hooks/account~Logger : dw.system.Logger
**Kind**: inner constant of [hooks/account](#markdown-header-hooksaccount)  
### hooks/account~ServiceMgr : [ServiceMgr](#markdown-header-hooksaccountservicemgr-moduleservicemgr)
**Kind**: inner constant of [hooks/account](#markdown-header-hooksaccount)  
### hooks/account~LOGGER : dw.system.Logger
**Kind**: inner constant of [hooks/account](#markdown-header-hooksaccount)  
### hooks/account~accountCreated(customerToExport)
Customer account created

**Kind**: inner method of [hooks/account](#markdown-header-hooksaccount)  

| Param | Type |
| --- | --- |
| customerToExport | dw.customer.Customer | 

### hooks/account~accountUpdated(customerToExport)
Customer account updated

**Kind**: inner method of [hooks/account](#markdown-header-hooksaccount)  

| Param | Type |
| --- | --- |
| customerToExport | dw.customer.Customer | 

### hooks/account~handleExport(customerToExport, status)
This method will export the given {customer} details to Service Cloud through REST API
If the async mode is disabled

**Kind**: inner method of [hooks/account](#markdown-header-hooksaccount)  

| Param | Type |
| --- | --- |
| customerToExport | dw.customer.Customer | 
| status | String | 

## hooks/case

* [hooks/case](#markdown-header-hookscase)
    * [~Logger](#markdown-header-hookscaselogger-dwsystemlogger) : dw.system.Logger
    * [~StringUtils](#markdown-header-hookscasestringutils-dwutilstringutils) : dw.util.StringUtils
    * [~ServiceMgr](#markdown-header-hookscaseservicemgr-moduleservicemgr) : [ServiceMgr](#markdown-header-hookscaseservicemgr-moduleservicemgr)
    * [~LOGGER](#markdown-header-hookscaselogger-dwsystemlogger) : dw.system.Logger
    * [~caseCreated(caseObj)](#markdown-header-hookscasecasecreatedcaseobj)
    * [~caseUpdated(caseObj)](#markdown-header-hookscasecaseupdatedcaseobj)
    * [~getCase(scccaseId)](#markdown-header-hookscasegetcasescccaseid)
    * [~getAllCases(scccaseId)](#markdown-header-hookscasegetallcasesscccaseid)
    * [~handleExport(caseObj)](#markdown-header-hookscasehandleexportcaseobj-object) ⇒ Object

### hooks/case~Logger : dw.system.Logger
**Kind**: inner constant of [hooks/case](#markdown-header-hookscase)  
### hooks/case~StringUtils : dw.util.StringUtils
**Kind**: inner constant of [hooks/case](#markdown-header-hookscase)  
### hooks/case~ServiceMgr : [ServiceMgr](#markdown-header-hookscaseservicemgr-moduleservicemgr)
**Kind**: inner constant of [hooks/case](#markdown-header-hookscase)  
### hooks/case~LOGGER : dw.system.Logger
**Kind**: inner constant of [hooks/case](#markdown-header-hookscase)  
### hooks/case~caseCreated(caseObj)
Customer case created

**Kind**: inner method of [hooks/case](#markdown-header-hookscase)  

| Param |
| --- |
| caseObj | 

### hooks/case~caseUpdated(caseObj)
Customer case updated

**Kind**: inner method of [hooks/case](#markdown-header-hookscase)  

| Param |
| --- |
| caseObj | 

### hooks/case~getCase(scccaseId)
Get customer case by Salesforce service cloud case id

**Kind**: inner method of [hooks/case](#markdown-header-hookscase)  

| Param | Description |
| --- | --- |
| scccaseId | Salesforce service cloud case id |

### hooks/case~getAllCases(scccaseId)
Get all customer cases by Salesforce service cloud contact id

**Kind**: inner method of [hooks/case](#markdown-header-hookscase)  

| Param | Description |
| --- | --- |
| scccaseId | Salesforce service cloud contact id |

### hooks/case~handleExport(caseObj) ⇒ Object
Export the given {caseObj} to Service Cloud and returns the service response

**Kind**: inner method of [hooks/case](#markdown-header-hookscase)  

| Param | Type |
| --- | --- |
| caseObj | Object | 

## hooks/customerOrder

* [hooks/customerOrder](#markdown-header-hookscustomerorder)
    * [~Logger](#markdown-header-hookscustomerorderlogger-dwsystemlogger) : dw.system.Logger
    * [~ServiceMgr](#markdown-header-hookscustomerorderservicemgr-moduleservicemgr) : [ServiceMgr](#markdown-header-hookscustomerorderservicemgr-moduleservicemgr)
    * [~LOGGER](#markdown-header-hookscustomerorderlogger-dwsystemlogger) : dw.system.Logger
    * [~orderCreated(order)](#markdown-header-hookscustomerorderordercreatedorder)
    * [~orderUpdated(order)](#markdown-header-hookscustomerorderorderupdatedorder)
    * [~handleExport(order, status)](#markdown-header-hookscustomerorderhandleexportorder-status)

### hooks/customerOrder~Logger : dw.system.Logger
**Kind**: inner constant of [hooks/customerOrder](#markdown-header-hookscustomerorder)  
### hooks/customerOrder~ServiceMgr : [ServiceMgr](#markdown-header-hookscustomerorderservicemgr-moduleservicemgr)
**Kind**: inner constant of [hooks/customerOrder](#markdown-header-hookscustomerorder)  
### hooks/customerOrder~LOGGER : dw.system.Logger
**Kind**: inner constant of [hooks/customerOrder](#markdown-header-hookscustomerorder)  
### hooks/customerOrder~orderCreated(order)
Customer order created

**Kind**: inner method of [hooks/customerOrder](#markdown-header-hookscustomerorder)  

| Param | Type |
| --- | --- |
| order | dw.order.Order | 

### hooks/customerOrder~orderUpdated(order)
Customer order updated

**Kind**: inner method of [hooks/customerOrder](#markdown-header-hookscustomerorder)  

| Param | Type |
| --- | --- |
| order | dw.order.Order | 

### hooks/customerOrder~handleExport(order, status)
This method will export the given {order} details to Service Cloud through REST API
If the async mode is disabled

**Kind**: inner method of [hooks/customerOrder](#markdown-header-hookscustomerorder)  

| Param | Type |
| --- | --- |
| order | dw.order.Order | 
| status | String | 

## jobs/customerSync

* [jobs/customerSync](#markdown-header-jobscustomersync)
    * [~profilesIterator](#markdown-header-jobscustomersyncprofilesiterator-dwutilseekableiterator) : dw.util.SeekableIterator
    * [~svc](#markdown-header-jobscustomersyncsvc-dwsvchttpclient) : dw.svc.HTTPClient
    * [~CustomerMgr](#markdown-header-jobscustomersynccustomermgr-dwcustomercustomermgr) : dw.customer.CustomerMgr
    * [~ContactModel](#markdown-header-jobscustomersynccontactmodel-modulemodelscontactcontact) : module:models/contact.Contact
    * [~ServiceMgr](#markdown-header-jobscustomersyncservicemgr-moduleservicemgr) : [ServiceMgr](#markdown-header-jobscustomersyncservicemgr-moduleservicemgr)

### jobs/customerSync~profilesIterator : dw.util.SeekableIterator
**Kind**: inner property of [jobs/customerSync](#markdown-header-jobscustomersync)  
### jobs/customerSync~svc : dw.svc.HTTPClient
**Kind**: inner property of [jobs/customerSync](#markdown-header-jobscustomersync)  
### jobs/customerSync~CustomerMgr : dw.customer.CustomerMgr
**Kind**: inner constant of [jobs/customerSync](#markdown-header-jobscustomersync)  
### jobs/customerSync~ContactModel : module:models/contact.Contact
**Kind**: inner constant of [jobs/customerSync](#markdown-header-jobscustomersync)  
### jobs/customerSync~ServiceMgr : [ServiceMgr](#markdown-header-jobscustomersyncservicemgr-moduleservicemgr)
**Kind**: inner constant of [jobs/customerSync](#markdown-header-jobscustomersync)  
## jobs/orderSync

* [jobs/orderSync](#markdown-header-jobsordersync)
    * [~orderIterator](#markdown-header-jobsordersyncorderiterator-dwutilseekableiterator) : dw.util.SeekableIterator
    * [~svc](#markdown-header-jobsordersyncsvc-dwsvchttpclient) : dw.svc.HTTPClient
    * [~OrderMgr](#markdown-header-jobsordersyncordermgr-dworderordermgr) : dw.order.OrderMgr
    * [~OrderModel](#markdown-header-jobsordersyncordermodel-modulemodelscontactorder) : module:models/contact.Order
    * [~ServiceMgr](#markdown-header-jobsordersyncservicemgr-moduleservicemgr) : [ServiceMgr](#markdown-header-jobsordersyncservicemgr-moduleservicemgr)
    * [~process(order)](#markdown-header-jobsordersyncprocessorder-voiddworderorder) ⇒ void ⎮ dw.order.Order

### jobs/orderSync~orderIterator : dw.util.SeekableIterator
**Kind**: inner property of [jobs/orderSync](#markdown-header-jobsordersync)  
### jobs/orderSync~svc : dw.svc.HTTPClient
**Kind**: inner property of [jobs/orderSync](#markdown-header-jobsordersync)  
### jobs/orderSync~OrderMgr : dw.order.OrderMgr
**Kind**: inner constant of [jobs/orderSync](#markdown-header-jobsordersync)  
### jobs/orderSync~OrderModel : module:models/contact.Order
**Kind**: inner constant of [jobs/orderSync](#markdown-header-jobsordersync)  
### jobs/orderSync~ServiceMgr : [ServiceMgr](#markdown-header-jobsordersyncservicemgr-moduleservicemgr)
**Kind**: inner constant of [jobs/orderSync](#markdown-header-jobsordersync)  
### jobs/orderSync~process(order) ⇒ void ⎮ dw.order.Order
**Kind**: inner method of [jobs/orderSync](#markdown-header-jobsordersync)  

| Param | Type |
| --- | --- |
| order | dw.order.Order | 

## models/authToken

* [models/authToken](#markdown-header-modelsauthtoken)
    * [~AuthToken](#markdown-header-modelsauthtokenauthtoken)
        * [new AuthToken()](#markdown-header-new-authtoken)
        * [.token](#markdown-header-authtokentoken-object) : Object
        * [.prototype](#markdown-header-authtokenprototype)
        * [.isValidAuth()](#markdown-header-authtokenisvalidauth-boolean) ⇒ boolean
        * [.getValidToken()](#markdown-header-authtokengetvalidtoken-booleanobject) ⇒ boolean ⎮ Object
        * [.getValidToken()](#markdown-header-authtokengetvalidtoken-booleanobject) ⇒ boolean ⎮ Object
    * [~Site](#markdown-header-modelsauthtokensite-dwsystemsite) : dw.system.Site
    * [~Transaction](#markdown-header-modelsauthtokentransaction-dwsystemtransaction) : dw.system.Transaction
    * [~helpers](#markdown-header-modelsauthtokenhelpers-moduleutilhelpers) : util/helpers
    * [~ServiceMgr](#markdown-header-modelsauthtokenservicemgr-moduleservicemgr) : [ServiceMgr](#markdown-header-modelsauthtokenservicemgr-moduleservicemgr)
    * [~getObject()](#markdown-header-modelsauthtokengetobject-dwobjectcustomattributes) ⇒ dw.object.CustomAttributes
    * [~updateCachedTokenObject(obj)](#markdown-header-modelsauthtokenupdatecachedtokenobjectobj-object) ⇒ Object

### models/authToken~AuthToken
**Kind**: inner class of [models/authToken](#markdown-header-modelsauthtoken)  

* [~AuthToken](#markdown-header-modelsauthtokenauthtoken)
    * [new AuthToken()](#markdown-header-new-authtoken)
    * [.token](#markdown-header-authtokentoken-object) : Object
    * [.prototype](#markdown-header-authtokenprototype)
    * [.isValidAuth()](#markdown-header-authtokenisvalidauth-boolean) ⇒ boolean
    * [.getValidToken()](#markdown-header-authtokengetvalidtoken-booleanobject) ⇒ boolean ⎮ Object
    * [.getValidToken()](#markdown-header-authtokengetvalidtoken-booleanobject) ⇒ boolean ⎮ Object

#### new AuthToken()
Token class for checking auth and retrieving valid token

#### authToken.token : Object
Token object returned by Service Cloud

**Kind**: instance property of [AuthToken](#markdown-header-new-authtoken)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | string | Identity URL used to identify user and query for information |
| access_token | string | The token auth string |
| instance_url | string | The Salesforce instance that API calls should be sent to |
| issued_at | number | Unix Timestamp (seconds) |
| signature | string | Base64-encoded HMAC-SHA256 signature |
| issued | number | Date issued in milliseconds |
| expires | number | Date expires in milliseconds |

#### authToken.prototype
**Kind**: instance property of [AuthToken](#markdown-header-new-authtoken)  
#### authToken.isValidAuth() ⇒ boolean
Returns whether the stored token is valid

**Kind**: instance method of [AuthToken](#markdown-header-new-authtoken)  
**Returns**: boolean - Whether the stored token is valid and not expired  
#### authToken.getValidToken() ⇒ boolean ⎮ Object
Gets a valid token from storage or from a new auth request

**Kind**: instance method of [AuthToken](#markdown-header-new-authtoken)  
**Returns**: boolean ⎮ Object - False or plain JS object containing the token response  
#### authToken.getValidToken() ⇒ boolean ⎮ Object
Gets a valid token from storage or from a new auth request

**Kind**: instance method of [AuthToken](#markdown-header-new-authtoken)  
**Returns**: boolean ⎮ Object - False or plain JS object containing the token response  
### models/authToken~Site : dw.system.Site
**Kind**: inner constant of [models/authToken](#markdown-header-modelsauthtoken)  
### models/authToken~Transaction : dw.system.Transaction
**Kind**: inner constant of [models/authToken](#markdown-header-modelsauthtoken)  
### models/authToken~helpers : util/helpers
**Kind**: inner constant of [models/authToken](#markdown-header-modelsauthtoken)  
### models/authToken~ServiceMgr : [ServiceMgr](#markdown-header-modelsauthtokenservicemgr-moduleservicemgr)
**Kind**: inner constant of [models/authToken](#markdown-header-modelsauthtoken)  
### models/authToken~getObject() ⇒ dw.object.CustomAttributes
Retrieves cached token from custom object storage
If no existing token object, an empty one is created

**Kind**: inner method of [models/authToken](#markdown-header-modelsauthtoken)  
**Returns**: dw.object.CustomAttributes - Returns token custom attributes  
### models/authToken~updateCachedTokenObject(obj) ⇒ Object
Puts token into custom object storage

**Kind**: inner method of [models/authToken](#markdown-header-modelsauthtoken)  
**Returns**: Object - Returns the same plain JS object  

| Param | Type | Description |
| --- | --- | --- |
| obj | Object | A plain JS object with the token |

## models/case
## models/CaseModel
Model to manage customer caseObj information. Creates a CaseModel class that with helper methods
to get and create caseObj, create and edit caseObj.


* [models/CaseModel](#markdown-header-modelscasemodel)
    * [module.exports](#markdown-header-moduleexports) ⏏
        * [~CaseModel](#markdown-header-moduleexportscasemodel)
            * [new CaseModel(parameter)](#markdown-header-new-casemodelparameter)
        * [~CaseModel/get(parameter)](#markdown-header-moduleexportscasemodelgetparameter-modulemodelscasemodelmoduleexportscasemodel) ⇒ [CaseModel](#markdown-header-moduleexportscasemodel)
        * [~CaseModel/getCases(contactId)](#markdown-header-moduleexportscasemodelgetcasescontactid-dwutilarraylist) ⇒ dw.util.ArrayList
        * [~CaseModel/getCaseDetails()](#markdown-header-moduleexportscasemodelgetcasedetails-caseobj) ⇒ caseObj
        * [~CaseModel/updateCase(caseObj)](#markdown-header-moduleexportscasemodelupdatecasecaseobj-boolean) ⇒ boolean
            * [~HookMgr](#markdown-header-casemodelupdatecasehookmgr-dwsystemhookmgr) : dw.system.HookMgr
        * [~CaseModel/updateCase(caseObj)](#markdown-header-moduleexportscasemodelupdatecasecaseobj-boolean) ⇒ boolean
            * [~HookMgr](#markdown-header-casemodelupdatecasehookmgr-dwsystemhookmgr) : dw.system.HookMgr

### module.exports ⏏
The case class

**Kind**: Exported member  
#### module.exports~CaseModel
**Kind**: inner class of module.exports  
##### new CaseModel(parameter)
Case helper providing enhanced content functionality


| Param | Type | Description |
| --- | --- | --- |
| parameter | dw.customer.Customer | The customer object to enhance/wrap. ?????? |

#### module.exports~CaseModel/get(parameter) ⇒ [CaseModel](#markdown-header-moduleexportscasemodel)
Gets the case model for current customer.

**Kind**: inner method of module.exports  

| Param | Type | Description |
| --- | --- | --- |
| parameter | dw.customer.Customer | The customer object to enhance or wrap. If NULL the current customer is retrieved from the session. |

#### module.exports~CaseModel/getCases(contactId) ⇒ dw.util.ArrayList
Get all cases by salesforce contact id from customer object.

**Kind**: inner method of module.exports  
**Returns**: dw.util.ArrayList - - Return list of cases belonging to provided salesforce contact id from Salesforce service cloud.  

| Param | Type | Description |
| --- | --- | --- |
| contactId | String | Salesforce contact id. |

#### module.exports~CaseModel/getCaseDetails() ⇒ caseObj
Get case details from service cloud by case id

**Kind**: inner method of module.exports  
**Returns**: caseObj - - Return case object based on provided case id from salesforce service cloud.  
#### module.exports~CaseModel/updateCase(caseObj) ⇒ boolean
Update case in service cloud by case id.

**Kind**: inner method of module.exports  
**Returns**: boolean - - return boolean based on case is updated successfully or not.  

| Param | Type | Description |
| --- | --- | --- |
| caseObj | caseObj | updated case object |

##### CaseModel/updateCase~HookMgr : dw.system.HookMgr
**Kind**: inner constant of CaseModel/updateCase  
#### module.exports~CaseModel/updateCase(caseObj) ⇒ boolean
Update case in service cloud by case id.

**Kind**: inner method of module.exports  
**Returns**: boolean - - return boolean based on case is updated successfully or not.  

| Param | Type | Description |
| --- | --- | --- |
| caseObj | caseObj | updated case object |

##### CaseModel/updateCase~HookMgr : dw.system.HookMgr
**Kind**: inner constant of CaseModel/updateCase  
## models/contact

* [models/contact](#markdown-header-modelscontact)
    * [~Contact](#markdown-header-modelscontactcontact)
        * [new Contact([customer], [profile])](#markdown-header-new-contactcustomer-profile)
        * [.type](#markdown-header-contacttype-string) : string
        * [.profile](#markdown-header-contactprofile-dwcustomerprofile) : dw.customer.Profile
        * [.prototype](#markdown-header-contactprototype)
            * [.toJSON()](#markdown-header-prototypetojson-object) ⇒ Object
            * [.updateStatus(status)](#markdown-header-prototypeupdatestatusstatus)
            * [.updateExternalId()](#markdown-header-prototypeupdateexternalid)
            * [.updateSyncResponseText(text)](#markdown-header-prototypeupdatesyncresponsetexttext)
    * [~Transaction](#markdown-header-modelscontacttransaction-dwsystemtransaction) : dw.system.Transaction

### models/contact~Contact
**Kind**: inner class of [models/contact](#markdown-header-modelscontact)  

* [~Contact](#markdown-header-modelscontactcontact)
    * [new Contact([customer], [profile])](#markdown-header-new-contactcustomer-profile)
    * [.type](#markdown-header-contacttype-string) : string
    * [.profile](#markdown-header-contactprofile-dwcustomerprofile) : dw.customer.Profile
    * [.prototype](#markdown-header-contactprototype)
        * [.toJSON()](#markdown-header-prototypetojson-object) ⇒ Object
        * [.updateStatus(status)](#markdown-header-prototypeupdatestatusstatus)
        * [.updateExternalId()](#markdown-header-prototypeupdateexternalid)
        * [.updateSyncResponseText(text)](#markdown-header-prototypeupdatesyncresponsetexttext)

#### new Contact([customer], [profile])
Contact class


| Param | Type | Description |
| --- | --- | --- |
| [customer] | dw.customer.Customer | Customer object |
| [profile] | dw.customer.Profile | Profile object |

#### contact.type : string
The object type represented in Service Cloud

**Kind**: instance property of [Contact](#markdown-header-new-contactcustomer-profile)  
#### contact.profile : dw.customer.Profile
**Kind**: instance property of [Contact](#markdown-header-new-contactcustomer-profile)  
#### contact.prototype
**Kind**: instance property of [Contact](#markdown-header-new-contactcustomer-profile)  

* [.prototype](#markdown-header-contactprototype)
    * [.toJSON()](#markdown-header-prototypetojson-object) ⇒ Object
    * [.updateStatus(status)](#markdown-header-prototypeupdatestatusstatus)
    * [.updateExternalId()](#markdown-header-prototypeupdateexternalid)
    * [.updateSyncResponseText(text)](#markdown-header-prototypeupdatesyncresponsetexttext)

##### prototype.toJSON() ⇒ Object
Builds up a formatted object for JSON.stringify()

**Kind**: static method of prototype  
##### prototype.updateStatus(status)
Update the {custom.sscSyncStatus} attribute with the given {status}

**Kind**: static method of prototype  

| Param | Type |
| --- | --- |
| status | String | 

##### prototype.updateExternalId()
Update the {custom.sscid} attribute with the given {id}

**Kind**: static method of prototype  
##### prototype.updateSyncResponseText(text)
Update the {custom.sscSyncResponseText} attribute with the given {text}

**Kind**: static method of prototype  

| Param | Type |
| --- | --- |
| text | String | 

### models/contact~Transaction : dw.system.Transaction
**Kind**: inner constant of [models/contact](#markdown-header-modelscontact)  
## models/order

* [models/order](#markdown-header-modelsorder)
    * [~Order](#markdown-header-modelsorderorder)
        * [new Order([order])](#markdown-header-new-orderorder)
        * [.type](#markdown-header-ordertype-string) : string
        * [.order](#markdown-header-orderorder-dworderorder) : dw.order.Order
        * [.profile](#markdown-header-orderprofile-dwcustomerprofile) : dw.customer.Profile
        * [.prototype](#markdown-header-orderprototype)
            * [.toJSON()](#markdown-header-prototypetojson-object) ⇒ Object
            * [.updateStatus(status)](#markdown-header-prototypeupdatestatusstatus)
            * [.updateExternalId()](#markdown-header-prototypeupdateexternalid)
            * [.updateSyncResponseText(text)](#markdown-header-prototypeupdatesyncresponsetexttext)
    * [~Transaction](#markdown-header-modelsordertransaction-dwsystemtransaction) : dw.system.Transaction

### models/order~Order
**Kind**: inner class of [models/order](#markdown-header-modelsorder)  

* [~Order](#markdown-header-modelsorderorder)
    * [new Order([order])](#markdown-header-new-orderorder)
    * [.type](#markdown-header-ordertype-string) : string
    * [.order](#markdown-header-orderorder-dworderorder) : dw.order.Order
    * [.profile](#markdown-header-orderprofile-dwcustomerprofile) : dw.customer.Profile
    * [.prototype](#markdown-header-orderprototype)
        * [.toJSON()](#markdown-header-prototypetojson-object) ⇒ Object
        * [.updateStatus(status)](#markdown-header-prototypeupdatestatusstatus)
        * [.updateExternalId()](#markdown-header-prototypeupdateexternalid)
        * [.updateSyncResponseText(text)](#markdown-header-prototypeupdatesyncresponsetexttext)

#### new Order([order])
Order class


| Param | Type | Description |
| --- | --- | --- |
| [order] | dw.order.Order | Order object |

#### order.type : string
The object type represented in Service Cloud

**Kind**: instance property of [Order](#markdown-header-new-orderorder)  
#### order.order : dw.order.Order
**Kind**: instance property of [Order](#markdown-header-new-orderorder)  
#### order.profile : dw.customer.Profile
**Kind**: instance property of [Order](#markdown-header-new-orderorder)  
#### order.prototype
**Kind**: instance property of [Order](#markdown-header-new-orderorder)  

* [.prototype](#markdown-header-orderprototype)
    * [.toJSON()](#markdown-header-prototypetojson-object) ⇒ Object
    * [.updateStatus(status)](#markdown-header-prototypeupdatestatusstatus)
    * [.updateExternalId()](#markdown-header-prototypeupdateexternalid)
    * [.updateSyncResponseText(text)](#markdown-header-prototypeupdatesyncresponsetexttext)

##### prototype.toJSON() ⇒ Object
Builds up a formatted object for JSON.stringify()

**Kind**: static method of prototype  
##### prototype.updateStatus(status)
Update the {custom.sscSyncStatus} attribute with the given {status}

**Kind**: static method of prototype  

| Param | Type |
| --- | --- |
| status | String | 

##### prototype.updateExternalId()
Update the {custom.sscid} attribute with the given {id}

**Kind**: static method of prototype  
##### prototype.updateSyncResponseText(text)
Update the {custom.sscSyncResponseText} attribute with the given {text}

**Kind**: static method of prototype  

| Param | Type |
| --- | --- |
| text | String | 

### models/order~Transaction : dw.system.Transaction
**Kind**: inner constant of [models/order](#markdown-header-modelsorder)  
## int_service_cloud : Object
Registry object


* [int_service_cloud](#markdown-header-int_service_cloud-object) : Object
    * [.authToken()](#markdown-header-int_service_cloudauthtoken-modulemodelsauthtokenauthtoken) ⇒ AuthToken
        * [~Model](#markdown-header-authtokenmodel-modulemodelsauthtokenauthtoken) : AuthToken

### int_service_cloud.authToken() ⇒ AuthToken
**Kind**: static method of [int_service_cloud](#markdown-header-int_service_cloud-object)  
**Returns**: [AuthToken](#markdown-header-new-authtoken) - Instance of AuthToken  
#### authToken~Model : AuthToken
**Kind**: inner property of authToken  
## ServiceMgr

* [ServiceMgr](#markdown-header-servicemgr)
    * _static_
        * [.auth()](#markdown-header-servicemgrauth-dwsvcservice) ⇒ dw/svc/Service
        * [.restGet()](#markdown-header-servicemgrrestget-dwsvcservice) ⇒ dw/svc/Service
        * [.restQuery()](#markdown-header-servicemgrrestquery-dwsvcservice) ⇒ dw/svc/Service
        * [.restCreate()](#markdown-header-servicemgrrestcreate-dwsvcservice) ⇒ dw/svc/Service
        * [.restUpdate()](#markdown-header-servicemgrrestupdate-dwsvcservice) ⇒ dw/svc/Service
    * _inner_
        * [~LocalServiceRegistry](#markdown-header-servicemgrlocalserviceregistry-dwsvclocalserviceregistry) : dw.svc.LocalServiceRegistry
        * [~auth](#markdown-header-servicemgrauth-moduleservicesauth) : services/auth
        * [~rest](#markdown-header-servicemgrrest-moduleservicesrest) : services/rest
        * [~getService(serviceID, definition)](#markdown-header-servicemgrgetserviceserviceid-definition-dwsvcservice) ⇒ dw/svc/Service

### ServiceMgr.auth() ⇒ dw/svc/Service
Returns a new instance of the Service Cloud Auth Service

**Kind**: static method of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr.restGet() ⇒ dw/svc/Service
Returns a new instance of the Service Cloud REST Service initialized with the {get} definitions

**Kind**: static method of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr.restQuery() ⇒ dw/svc/Service
Returns a new instance of the Service Cloud REST Service initialized with the {get} definitions

**Kind**: static method of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr.restCreate() ⇒ dw/svc/Service
Returns a new instance of the Service Cloud REST Service initialized with the {create} definitions

**Kind**: static method of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr.restUpdate() ⇒ dw/svc/Service
Returns a new instance of the Service Cloud REST Service initialized with the {update} definitions

**Kind**: static method of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr~LocalServiceRegistry : dw.svc.LocalServiceRegistry
**Kind**: inner constant of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr~auth : services/auth
**Kind**: inner constant of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr~rest : services/rest
**Kind**: inner constant of [ServiceMgr](#markdown-header-servicemgr)  
### ServiceMgr~getService(serviceID, definition) ⇒ dw/svc/Service
Returns the service related to the given {serviceID} initialized with the given {definition}

**Kind**: inner method of [ServiceMgr](#markdown-header-servicemgr)  

| Param | Type |
| --- | --- |
| serviceID | String | 
| definition | Object | 

## services/auth

* [services/auth](#markdown-header-servicesauth)
    * [~Logger](#markdown-header-servicesauthlogger-dwsystemlogger) : dw.system.Logger
    * [~Site](#markdown-header-servicesauthsite-dwsystemsite) : dw.system.Site
    * [~helpers](#markdown-header-servicesauthhelpers-moduleutilhelpers) : util/helpers
    * [~LOGGER](#markdown-header-servicesauthlogger-dwsystemlogger) : dw.system.Logger
    * [~setCredentialID(svc, id)](#markdown-header-servicesauthsetcredentialidsvc-id-string) ⇒ String

### services/auth~Logger : dw.system.Logger
**Kind**: inner constant of [services/auth](#markdown-header-servicesauth)  
### services/auth~Site : dw.system.Site
**Kind**: inner constant of [services/auth](#markdown-header-servicesauth)  
### services/auth~helpers : util/helpers
**Kind**: inner constant of [services/auth](#markdown-header-servicesauth)  
### services/auth~LOGGER : dw.system.Logger
**Kind**: inner constant of [services/auth](#markdown-header-servicesauth)  
### services/auth~setCredentialID(svc, id) ⇒ String
Attempt to set to site-specific credential to the given service. If it fails, fallback to the original ID

**Kind**: inner method of [services/auth](#markdown-header-servicesauth)  

| Param | Type |
| --- | --- |
| svc | dw.svc.HTTPService | 
| id | String | 

## services/rest

* [services/rest](#markdown-header-servicesrest)
    * [~StringUtils](#markdown-header-servicesreststringutils-dwutilstringutils) : dw.util.StringUtils
    * [~helpers](#markdown-header-servicesresthelpers-moduleutilhelpers) : util/helpers
    * [~setAuthHeader(svc, endpoint)](#markdown-header-servicesrestsetauthheadersvc-endpoint)
        * [~authToken](#markdown-header-setauthheaderauthtoken-modulemodelsauthtokenauthtoken) : AuthToken
    * [~isValid401(client)](#markdown-header-servicesrestisvalid401client-boolean) ⇒ boolean
    * [~isResponseJSON(client)](#markdown-header-servicesrestisresponsejsonclient-boolean) ⇒ boolean
    * [~parseResponse(svc, client)](#markdown-header-servicesrestparseresponsesvc-client-object) ⇒ Object

### services/rest~StringUtils : dw.util.StringUtils
**Kind**: inner constant of [services/rest](#markdown-header-servicesrest)  
### services/rest~helpers : util/helpers
**Kind**: inner constant of [services/rest](#markdown-header-servicesrest)  
### services/rest~setAuthHeader(svc, endpoint)
Inserts auth token into request header

**Kind**: inner method of [services/rest](#markdown-header-servicesrest)  
**Throws**:

- Error Throws error when no valid auth token is available (i.e.- service error, service down)


| Param | Type |
| --- | --- |
| svc | dw.svc.HTTPService | 
| endpoint | String | 

#### setAuthHeader~authToken : AuthToken
**Kind**: inner property of setAuthHeader  
### services/rest~isValid401(client) ⇒ boolean
Check if 401 due to expired token

**Kind**: inner method of [services/rest](#markdown-header-servicesrest)  
**Returns**: boolean - true if expired auth token  

| Param | Type |
| --- | --- |
| client | dw.net.HTTPClient | 

### services/rest~isResponseJSON(client) ⇒ boolean
Check if response type is JSON

**Kind**: inner method of [services/rest](#markdown-header-servicesrest)  

| Param | Type |
| --- | --- |
| client | dw.net.HTTPClient | 

### services/rest~parseResponse(svc, client) ⇒ Object
Parses response JSON and wraps with an object containing additional helper properties

**Kind**: inner method of [services/rest](#markdown-header-servicesrest)  

| Param | Type |
| --- | --- |
| svc | dw.svc.HTTPService | 
| client | dw.net.HTTPClient | 

## util/helpers

* [util/helpers](#markdown-header-utilhelpers)
    * _static_
        * [.isObject(obj)](#markdown-header-utilhelpersisobjectobj-boolean) ⇒ boolean
        * [.ucfirst(str)](#markdown-header-utilhelpersucfirststr-string) ⇒ string
    * _inner_
        * [~expandJSON(jsonString, defaultValue)](#markdown-header-utilhelpersexpandjsonjsonstring-defaultvalue-) ⇒ *
        * [~getCustomObject(customObjectName, objectID)](#markdown-header-utilhelpersgetcustomobjectcustomobjectname-objectid-dwobjectcustomattributes) ⇒ dw.object.CustomAttributes

### util/helpers.isObject(obj) ⇒ boolean
Checks if submitted value type is an Object (and not an Array)

**Kind**: static method of [util/helpers](#markdown-header-utilhelpers)  

| Param | Type | Description |
| --- | --- | --- |
| obj | * | Object to be checked |

### util/helpers.ucfirst(str) ⇒ string
Uppercases first char of string

**Kind**: static method of [util/helpers](#markdown-header-utilhelpers)  

| Param | Type | Description |
| --- | --- | --- |
| str | string | String to uppercase |

### util/helpers~expandJSON(jsonString, defaultValue) ⇒ *
Expands JSON

**Kind**: inner method of [util/helpers](#markdown-header-utilhelpers)  
**Returns**: * - Returns null if empty string or exception encountered  

| Param | Type |
| --- | --- |
| jsonString | string | 
| defaultValue | * | 

### util/helpers~getCustomObject(customObjectName, objectID) ⇒ dw.object.CustomAttributes
Fetches object definition from Custom Object, creating it if not exists

**Kind**: inner method of [util/helpers](#markdown-header-utilhelpers)  

| Param | Type |
| --- | --- |
| customObjectName | string | 
| objectID | string | 

