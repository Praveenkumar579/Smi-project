@isTest

public class OnboardingControllerTest {

@isTest
    static void OnboardingStepFunction(){
    Onboarding_Step__c e = new Onboarding_Step__c (Name = 'Business Training');
    insert e;
    Test.startTest();
    Onboarding_Step__c testset = [SELECT Name FROM Onboarding_Step__c LIMIT 1];
    Test.stopTest();
    System.assertEquals(testset, e);
    }

@isTest

    static Onboarding_Step__c[] getContactListTest()

    {

        List<Onboarding_Step__c> testing = onboardingController.getList();
        return testing;
    }
}