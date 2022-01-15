import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
       {
        id: 1,
        TaskName: "Task 1",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 35,
        Progress: 50,
        isParent: true,
        ParentID: 1,
      },
      {
        id: 2,
        TaskName: "Task 2",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 65,
        Progress: 70,
        ParentID: 1,
        isParent: false
      },
      {
        id: 3,
        TaskName: "Task 3",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 15,
        Progress: 40,
        ParentID: 1,
        isParent: false
      },
      {
        id: 4,
        TaskName: "Task 4",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 25,
        Progress: 60,
        ParentID: 1,
        isParent: false
      },
      {
        id: 5,
        TaskName: "Task 5",
        StartDate: new Date("03/14/2017"),
        EndDate: new Date("03/18/2017"),
        Duration: 85,
        Progress: 10,
        isParent: true,
        ParentID: 67
      },
      {
        id: 6,
        TaskName: "Task 6",
        StartDate: new Date("03/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 45,
        Progress: 90,
        ParentID: 5,
        isParent: false
      },
      {
        id: 7,
        TaskName: "Task 7",
        StartDate: new Date("08/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 75,
        Progress: 80,
        ParentID: 5,
        isParent: false
      },
      {
        id: 8,
        TaskName: "Task 8",
        StartDate: new Date("05/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 85,
        Progress: 60,
        ParentID: 5,
        isParent: false
      },
      {
        id: 9,
        TaskName: "Task 9",
        StartDate: new Date("04/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 95,
        Progress: 30,
        ParentID: 5,
        isParent: false
      },
      {
        id: 10,
        TaskName: "Task 10",
        StartDate: new Date("08/02/2017"),
        EndDate: new Date("10/06/2017"),
        Duration: 67,
        Progress: 50,
        ParentID: 5,
        isParent: false
      },
      {
        id: 11,
        TaskName: "Task 11",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 35,
        Progress: 50,
        isParent: true,
        ParentID: 1
      },
      {
        id: 12,
        TaskName: "Task 12",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 65,
        Progress: 70,
        ParentID: 1,
        isParent: false
      },
      {
        id: 13,
        TaskName: "Task 13",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 15,
        Progress: 40,
        ParentID: 1,
        isParent: false
      },
      {
        id: 14,
        TaskName: "Task 14",
        StartDate: new Date("02/23/2017"),
        EndDate: new Date("02/27/2017"),
        Duration: 25,
        Progress: 60,
        ParentID: 1,
        isParent: false
      },
      {
        id: 15,
        TaskName: "Task 15",
        StartDate: new Date("03/14/2017"),
        EndDate: new Date("03/18/2017"),
        Duration: 85,
        Progress: 10,
        isParent: true,
        ParentID: 67
      },
      {
        id: 16,
        TaskName: "Task 16",
        StartDate: new Date("03/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 45,
        Progress: 90,
        ParentID: 5,
        isParent: false
      },
      {
        id: 17,
        TaskName: "Task 17",
        StartDate: new Date("08/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 75,
        Progress: 80,
        ParentID: 5,
        isParent: false
      },
      {
        id: 18,
        TaskName: "Task 18",
        StartDate: new Date("05/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 85,
        Progress: 60,
        ParentID: 5,
        isParent: false
      },
      {
        id: 19,
        TaskName: "Task 19",
        StartDate: new Date("04/02/2017"),
        EndDate: new Date("03/06/2017"),
        Duration: 95,
        Progress: 30,
        ParentID: 5,
        isParent: false
      }
    ];
    return {customers};
  }
}