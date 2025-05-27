// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
  };
  
  // Store students in an array
  const studentsList: Student[] = [student1, student2];
  
  // Create a table element
  const table = document.createElement('table');
  
  // Create a header row
  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'First Name';
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);
  
  // Add a row for each student
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  // Append the table to the body
  document.body.appendChild(table);