import BaseService from "./baseService";

class TaskService extends BaseService {
  constructor() {
    super();
    this.apiUrl = "tasks";
  }
}

export default new TaskService();
