import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Output() routed = new EventEmitter<NgForm>();
  constructor(private router: Router, private profileService: ProfileService) { }
  user: UserProfile;
  ngOnInit(): void {
    this.user = this.profileService.getUserProfile()
  }

  emitRoutedEvent(form: NgForm): void {
    this.user = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio
    }
    this.profileService.setUserProfile(this.user)
    this.routed.emit(form);
    form.reset();
    this.router.navigate(["profile"])
  }

}
