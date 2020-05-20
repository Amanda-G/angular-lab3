import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userProfile: UserProfile = {
    name: "Amanda Gunturu",
    contact: "notarealemail@fake.email",
    bio: "I like to drink coffee and take naps"
  }
  constructor() { }

  getUserProfile(): UserProfile {
    return this.userProfile
  }

  setUserProfile(userProfile: UserProfile) {
    this.userProfile = userProfile;
  }

}
