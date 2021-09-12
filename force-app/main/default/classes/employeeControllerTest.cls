@isTest
public class employeeControllerTests {
@isTest
        static void testset(){
        User_Functional_Role__c e = new User_Functional_Role__c ();
        insert e;
        Test.startTest();
        User_Functional_Role__c testset = [SELECT Employee__r.Name FROM User_Functional_Role__c];
        Test.stopTest();
        System.assertEquals(testset, e);
		}

		@isTest
        static User_Functional_Role__c[] test(){
        List<User_Functional_Role__c> employeetest = employeeController.searchEmployee('b');
        return employeetest;
        }

		@isTest
        static User_Functional_Role__c[] test1(){
        List<User_Functional_Role__c> employeetest1 = employeeController.searchEmployee('a');
        return employeetest1;
        }
}