public with sharing class AssignedTask {
    public AssignedTask() {
    }
    @AuraEnabled(cacheable=true)
    public static List<User_Assigned_Task__c> getTask(){
        
        List<User_Assigned_Task__c> assignedtask = [Select Name, Start_Date__c, End_Date__c, Status__c FROM User_Assigned_Task__c ];
        
        return assignedtask;
    }
}
