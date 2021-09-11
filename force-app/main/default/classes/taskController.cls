public with sharing class taskController {


    @AuraEnabled(cacheable=true)
    public static List<User_Assigned_Task__c> getAssigendTask()
   {
        return new List<User_Assigned_Task__c>([Select Name, Employee__r.Name, Functional_Role__c, Status__c, Onboarding_Step__c  from User_Assigned_Task__c
        ]);
    }
}