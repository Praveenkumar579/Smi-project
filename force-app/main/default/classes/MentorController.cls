public with sharing class MentorController {
    public mentorController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<User> getAllCases(){
        
        List<User> mentorList = [Select Name FROM User Where Profile.Name='Mentor'];
        
        return mentorList;
    }
}


