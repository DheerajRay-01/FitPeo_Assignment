const calendarData = [
  { day: "Wed", date: 1, next:false, appointment: false },
  { day: "Thu", date: 2, next:false, appointment: true, time: "10:00",timeTo:"11:00" ,topic: "Cardiology", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRHhg_mpm0QdeUGXOvNfHurdjFcYCPgSn2w&s", doctor: "Dr. Shalini Kapoor" },
  { day: "Fri", date: 3, next:false, appointment: false },
  { day: "Sat", date: 4, next:true, appointment: true, time: "14:30",timeTo:"11:00", topic: "Dentist", icon: "https://img.freepik.com/premium-vector/vector-healthy-shiny-tooth-pink-gums-isolated-white-background-medical-illustration_266693-884.jpg?semt=ais_hybrid&w=740", doctor: "Dr. Ankur Mehta" },
  { day: "Sun", date: 5, next:false, appointment: false },
  { day: "Mon", date: 6, next:false, appointment: false },
  { day: "Tue", date: 7, next:false, appointment: false },
];

export default calendarData;
