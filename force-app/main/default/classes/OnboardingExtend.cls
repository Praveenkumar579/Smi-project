public with sharing class OnboardingExtend {
    public OnboardingExtend() {
    }
    @AuraEnabled(cacheable=true)
    public static List<User_Functional_Role__c> getList(){
    List<User_Functional_Role__c> extenddate=[Select Name, Employee__r.Name,Onboarding_Start_Date__c, Onboarding_End_Date__c, Mentor__r.Name From User_Functional_Role__c];

    return extenddate;
    }

}