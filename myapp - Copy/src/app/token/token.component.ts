import { Component } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
  username!:string;
  password!:string;
  jwt!:string;


  
  constructor(private tokenService: TokenService) {}

  onSubmit(): void {
    // Use the entered username and password for the token request
    this.tokenService.sendTokenReq(this.username, this.password).subscribe(
      (data) => {
        console.log(data);
        this.jwt = data.jwt; // Extract the JWT from the response
        this.tokenService.setToken(this.jwt); // Optional: Store the token in the service
        alert("User added successfully!");
      },
      (error) => {
        console.error('Error:', error);
        alert("Failed to authenticate.");
      }
    );
  }

  authorize(): void {
    // Send the authorization request using the obtained JWT
    this.tokenService.sendAuthReq(this.jwt).subscribe(
      (data) => {
        console.log(data);
        alert("Authorization successful!");
      },
      (error) => {
        console.error('Error:', error);
        alert("Authorization failed.");
      }
    );
  }

}
