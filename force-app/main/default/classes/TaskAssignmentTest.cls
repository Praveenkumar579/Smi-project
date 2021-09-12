@isTest
public class TaskAssignmentTest {
 
    @isTest
    static User_Assigned_Task__c[] test1(){
        List<User_Assigned_Task__c> tasktest= taskController.getAssigendTask();
       return tasktest;  
        
    }
    
    @isTest 
    
    static User_Assigned_Task__c[] test2() {
     List<User_Assigned_Task__c> tasktest2= [select Name, Employee__r.Name,Onboarding_Step__c from User_Assigned_Task__c LIMIT 2];
          
     return tasktest2;
   
     
        
}
    
}