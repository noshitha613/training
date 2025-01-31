// Employee data array
const employees = [
    {
        empid: 101,
        empname: "Ramya",
        empcompany: "Goggle",
        empsalary: 70000,
        empaddress: { empcity: "Hyderabad", emparea: "TS" }
    },
    {
        empid: 102,
        empname: "Srinija",
        empcompany: "Amazon",
        empsalary: 85000,
        empaddress: { empcity: "Vizag", emparea: "AP" }
    },
    {
        empid: 103,
        empname: "Noshi",
        empcompany: "Infosys",
        empsalary: 70000,
        empaddress: { empcity: "Chennai", emparea: "TN" }
    }
];

function displayEmployeesInConsole() {
    console.log("Employee Data:");
    console.table(employees.map(emp => ({
        empid: emp.empid,
        empname: emp.empname,
        empcompany: emp.empcompany,
        empsalary: emp.empsalary,
        empcity: emp.empaddress.empcity,
        emparea: emp.empaddress.emparea
    })));
}
document.addEventListener("DOMContentLoaded", displayEmployeesInConsole);