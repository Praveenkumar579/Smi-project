@isTest
public class mentorControllerTests {
@isTest
        static void testset(){
        User_Functional_Role__c e = new User_Functional_Role__c ();
        insert e;
        Test.startTest();
        User_Functional_Role__c testset = [SELECT Mentor__r.Name FROM User_Functional_Role__c];
        Test.stopTest();
        System.assertEquals(testset, e);
		}

		@isTest
        static User_Functional_Role__c[] test(){
        List<User_Functional_Role__c> MentorTest = MentorController.searchmentor('Santosh kumar');
        return MentorTest;
        }

		@isTest
        static User_Functional_Role__c[] test1(){
        List<User_Functional_Role__c> MentorTest1 = MentorController.searchmentor('a');
        return MentorTest1;
        }
}