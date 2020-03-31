import {Utils} from '../utils/Utils';

export class TaskModel {
  id: string;
  title: string;
  time: number;
  constructor(title: string, time: number) {
    this.id = Utils.guid();
    this.title = title;
    this.time = time;
  }
}
