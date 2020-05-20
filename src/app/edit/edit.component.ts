import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Output() routed = new EventEmitter<NgForm>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  emitRoutedEvent(form: NgForm): void {
    this.routed.emit(form);
    form.reset();
    this.router.navigate(["profile"])
  }

}
