public with sharing class onboardingController {
    public onboardingController() {
    }
    @AuraEnabled(cacheable = true)
    public static List<Onboarding_Step__c> getList(){
        
        List<Onboarding_Step__c> onboardingsteps = [Select Name FROM Onboarding_Step__c ];
        
        return onboardingsteps;
    }
}
