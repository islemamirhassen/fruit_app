import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [HttpClient],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allFruits: Fruits[] = [];
 
  constructor(private fruitService: FruitsService) {}
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.fruitService.get().subscribe((data) => {
      this.allFruits = data;
    });
  }

}
