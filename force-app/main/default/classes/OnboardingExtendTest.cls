@isTest
public class OnboardingExtendTest {
	@isTest
    static void OnboardingStepFunction(){
        User_Functional_Role__c e = new User_Functional_Role__c (Onboarding_End_Date__c = System.today());
        insert e;
        Test.startTest(); 
        User_Functional_Role__c testset = [SELECT Onboarding_Start_Date__c, Onboarding_End_Date__c FROM User_Functional_Role__c LIMIT 1]; 
        Test.stopTest(); 
        System.assertEquals(testset, e); 
    } 
@isTest
    static User_Functional_Role__c[] getListTest()
    {
    List<User_Functional_Role__c> testing = OnboardingExtend.getList();
    return testing;
     }
}
