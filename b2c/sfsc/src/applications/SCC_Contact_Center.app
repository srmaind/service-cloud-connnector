<?xml version="1.0" encoding="UTF-8"?>
<CustomApplication xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>View</actionName>
        <comment>Action override created by Lightning App Builder during activation.</comment>
        <content>SCC_Account_Record_Page</content>
        <formFactor>Large</formFactor>
        <skipRecordTypeSelect>false</skipRecordTypeSelect>
        <type>Flexipage</type>
        <pageOrSobjectType>Account</pageOrSobjectType>
    </actionOverrides>
    <brand>
        <headerColor>#0070D2</headerColor>
    </brand>
    <description>This app is for Commerce Cloud Call Center</description>
    <formFactors>Large</formFactors>
    <label>Contact Center</label>
    <navType>Console</navType>
    <tab>standard-home</tab>
    <tab>standard-Account</tab>
    <tab>standard-Order</tab>
    <tab>standard-Case</tab>
    <uiType>Lightning</uiType>
    <utilityBar>Contact_Center_UtilityBar</utilityBar>
    <workspaceMappings>
        <mapping>
            <tab>standard-Account</tab>
        </mapping>
        <mapping>
            <fieldName>AccountId</fieldName>
            <tab>standard-Case</tab>
        </mapping>
        <mapping>
            <fieldName>AccountId</fieldName>
            <tab>standard-Order</tab>
        </mapping>
        <mapping>
            <tab>standard-home</tab>
        </mapping>
    </workspaceMappings>
</CustomApplication>
