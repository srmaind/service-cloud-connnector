@isTest
public class SCCCustomerAccountResolutionService_Test  {

    @testSetup 
    static void setup() {

        SCCTestDataFactory.createSFCCConfigDefaultCustomSetting();
        SCCTestDataFactory.createSFCCCredentialDefaultCustomSetting();    	
    	SCCTestDataFactory.createSFCCLogDefaultCustomSetting();  
        SCCTestDataFactory.createAccount(1, 'Default', false);
        //SCCTestDataFactory.createAccount(new Map<Integer, String>{1=>'fname', 2=>'fname', 3=>'fname'}, new Map<Integer, String>{1=>'lname', 2=>'lname', 3=>'lname'}, new Map<Integer, String>{1=>'testa@hotmail.com', 2=>'testa@yahoo.com', 3=>'testa@salesforce.com'}, new Map<Integer, String>{1=>'12345', 2=>'23456', 3=>'34567'});         
        //SCCTestDataFactory.createContact(new Map<Integer, String>{1=>'fnamea', 2=>'fnameb', 3=>'fnamec'}, new Map<Integer, String>{1=>'lnamea', 2=>'lnameb', 3=>'lnamec'}, new Map<Integer, String>{1=>'test@hotmail.com', 2=>'test@yahoo.com', 3=>'test@salesforce.com'});
        SCCTestDataFactory.createSFCCConfigDefaultCustomSetting();
        SCCTestDataFactory.createFieldMappingCustomSettings(new Map<String, String>{'customer_id'=>'SFCC_Customer_Id__c ', 'customer_no'=>'SFCC_Customer_Number__c ', 'email'=>'Email', 'first_name'=>'FirstName', 'last_name'=>'LastName'}, 'Contact');          
        SCCTestDataFactory.createFieldMappingCustomSettings(new Map<String, String>{'customer_id'=>'SFCC_Customer_Id__pc ', 'customer_no'=>'SFCC_Customer_Number__pc ', 'email'=>'personEmail', 'first_name'=>'FirstName', 'last_name'=>'LastName'}, 'Account');        
    }
    

    /**
    testResolveOrCreate
    This test method will server both creation & resolution tests.
    1) In the first run provide the unique arguments - this will create a new Account.
    2) For second run, do not change the arguments - this time it will serve as resolution test scenario
     */
    @isTest 
    static void testResolveOrCreate() {     
        RestRequest req = new RestRequest();
        RestResponse res = new RestResponse();
        req.requestBody = Blob.valueOf('{"first_name":"test_fname","last_name":"test_lname","customer_id":"23_id_test","customer_no":"23_no_test","email":"pgaur+email_test@salesforce.com"}');
        req.requestURI = '/services/apexrest/ResolveAccount';
        req.httpMethod = 'POST';
        RestContext.request = req;
        RestContext.response = res;
        SCCCustomerRegResponse stas = SCCCustomerAccountResolutionService.resolveOrCreate();
        System.assertEquals(System.JSON.serialize(SCCCustomerRegResponse.createResponse([SELECT Id, PersonEmail,SFCC_Customer_Number__pc,SFCC_Customer_Id__pc FROM Account WHERE SFCC_Customer_Number__pc = '23_no_test'])), System.JSON.serialize(stas));
    }
}