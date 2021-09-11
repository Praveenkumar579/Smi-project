public with sharing class onboardingController {
    @AuraEnabled(cacheable = true)
    public static List<Onboarding_Step__c> getList(){
        
        List<Onboarding_Step__c> onboardingsteps = [Select Name, Duration__c, Duration_Type__c,Level__c, Onboarding_Step_Type__c FROM Onboarding_Step__c ];
        
        return onboardingsteps;
    }
}
