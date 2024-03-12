import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';
import { dummyData } from '../../../data';

interface  DummyData{
  todos: string[];
  done: string[];
  ideas: string[];
  research: string[];
}
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnChanges {
  @Input()
  tasks = dummyData

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes")
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
