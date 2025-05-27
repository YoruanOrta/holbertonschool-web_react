/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// ==========================
// Interfaces
// ==========================
// ==========================
// Implementations
// ==========================
// Example usage of Teacher interface
var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Additional property
};
console.log(teacher3);
// Example usage of Directors interface
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Implementing the StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage of StudentClass
var student = new StudentClass('Alice', 'Smith');
console.log(student.displayName()); // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZCQUE2QjtBQUM3QixhQUFhO0FBQ2IsNkJBQTZCO0FBaUM3Qiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLDZCQUE2QjtBQUU3QixxQ0FBcUM7QUFDckMsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxLQUFLLEVBQUUsc0JBQXNCO0NBQ3hDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXRCLHVDQUF1QztBQUN2QyxJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdkIsc0NBQXNDO0FBQ3RDLElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQVMsRUFBRSxRQUFRO0lBQzdELE9BQU8sVUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQztBQUVGLHlDQUF5QztBQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtBQUUzRCxnQ0FBZ0M7QUFDaEM7SUFJRSxzQkFBWSxTQUFpQixFQUFFLFFBQWdCO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDO0FBRUQsZ0NBQWdDO0FBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUssZ0JBQWdCO0FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBRSw0QkFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEludGVyZmFjZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIERlZmluZSB0aGUgVGVhY2hlciBpbnRlcmZhY2VcbmludGVyZmFjZSBUZWFjaGVyIHtcbiAgcmVhZG9ubHkgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIEFsbG93cyBhZGRpdGlvbmFsIHByb3BlcnRpZXNcbn1cblxuLy8gRXh0ZW5kIHRoZSBUZWFjaGVyIGludGVyZmFjZSB0byBjcmVhdGUgRGlyZWN0b3JzXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG4vLyBEZWZpbmUgaW50ZXJmYWNlIGZvciBwcmludFRlYWNoZXIgZnVuY3Rpb25cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuLy8gSW50ZXJmYWNlIGZvciB0aGUgY29uc3RydWN0b3JcbmludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuICBuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzSW50ZXJmYWNlO1xufVxuXG4vLyBJbnRlcmZhY2UgZm9yIHRoZSBjbGFzcyBtZXRob2RzXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbXBsZW1lbnRhdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEV4YW1wbGUgdXNhZ2Ugb2YgVGVhY2hlciBpbnRlcmZhY2VcbmNvbnN0IHRlYWNoZXIzOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBjb250cmFjdDogZmFsc2UsIC8vIEFkZGl0aW9uYWwgcHJvcGVydHlcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIzKTtcblxuLy8gRXhhbXBsZSB1c2FnZSBvZiBEaXJlY3RvcnMgaW50ZXJmYWNlXG5jb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufTtcblxuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuLy8gSW1wbGVtZW50IHRoZSBwcmludFRlYWNoZXIgZnVuY3Rpb25cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuICByZXR1cm4gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX0uICR7bGFzdE5hbWV9YDtcbn07XG5cbi8vIEV4YW1wbGUgdXNhZ2Ugb2YgcHJpbnRUZWFjaGVyIGZ1bmN0aW9uXG5jb25zb2xlLmxvZyhwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpKTsgLy8gT3V0cHV0OiBKLiBEb2VcblxuLy8gSW1wbGVtZW50aW5nIHRoZSBTdHVkZW50Q2xhc3NcbmNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gIHByaXZhdGUgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgbGFzdE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgfVxuXG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDdXJyZW50bHkgd29ya2luZyc7XG4gIH1cblxuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG4vLyBFeGFtcGxlIHVzYWdlIG9mIFN0dWRlbnRDbGFzc1xuY29uc3Qgc3R1ZGVudCA9IG5ldyBTdHVkZW50Q2xhc3MoJ0FsaWNlJywgJ1NtaXRoJyk7XG5jb25zb2xlLmxvZyhzdHVkZW50LmRpc3BsYXlOYW1lKCkpOyAgICAgLy8gT3V0cHV0OiBBbGljZVxuY29uc29sZS5sb2coc3R1ZGVudC53b3JrT25Ib21ld29yaygpKTsgIC8vIE91dHB1dDogQ3VycmVudGx5IHdvcmtpbmciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=