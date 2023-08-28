import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/Customer';
import { changepassword } from 'src/app/Model/registerInterface';
import { ProfileService } from 'src/app/Service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  customerForm: FormGroup;
  customer: Customer = new Customer();
  isEditMode: boolean = false;

constructor(private profileService : ProfileService,
  private fb: FormBuilder, private router : Router)
{
  this.customerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
  });
}
ngOnInit()
{
  this.showProfile();
}

//profile component 
  showProfile()
  {
    const idString = localStorage.getItem('cId');
  
if (idString !== null) {
  const idNumber = parseInt(idString, 10); 
 this.profileService.showProfile(idNumber).subscribe((res)=>{
  console.log(res);
  this.customer = res;
  this.customerForm.setValue({
    email: this.customer.email,
    address: this.customer.address,
  });
 })
} else {
  console.error('Item with key "cId" not found in localStorage');
}
  }


  // update Profile component
  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  
  updateProfile( customerData: Customer) {
    const idString = localStorage.getItem('cId') || '0';
const customerId = parseInt(idString, 10);
    this.profileService.updateCustomer(customerId, customerData).subscribe(
      (updatedCustomer) => {
        // Handle the updated customer data here
        
        console.log('Customer updated:', updatedCustomer);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>{
          this.router.navigate(['profile']); 
        });
      }
    );
  }
  cancelEdit() {
    
    this.editMode = false;
  }


  // Change password
  changePasswordClicked : boolean = false;
  toggle()
  {
    this.changePasswordClicked= true;
  }

  // email: string = '';
  // oldPassword: string = '';
  // newPassword: string = '';
  // changePassword(email: string, oldPassword: string, newPassword: string) {
  //   this.profileService.changePassword(email, oldPassword, newPassword).subscribe(
  //     (response) => {
  //       // Password changed successfully, handle the response if needed
  //       console.log('Password changed successfully', response);
  //     },
  //     (error) => {
  //       // Handle any error that occurred during the password change process
  //       console.error('Error changing password', error);
  //     }
  //   );
  // }

  Logout()
  {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['register']);
  }
}
