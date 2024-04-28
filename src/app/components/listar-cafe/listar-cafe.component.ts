import { Component } from '@angular/core';
import { Cafe } from '../../models/cafe';
import { CafeService } from '../../service/cafe.service';

@Component({
  selector: 'app-listar-cafe',
  standalone: true,
  imports: [],
  templateUrl: './listar-cafe.component.html',
  styleUrl: './listar-cafe.component.css'
})
export class ListarCafeComponent {

  cafes: Cafe[] = [];
  cafeOrigen: Cafe[] = [];
  cafeBlend: Cafe[] = [];

  constructor(private cafeService: CafeService) { }

  getAllCafes() {
    this.cafeService.getAllCafes().subscribe(data => {
      this.cafes = data;
      this.setCafesPerType(this.cafes);
    });
  }

  setOrigen(cafe: Cafe): void {
    this.cafeOrigen.push(cafe);
    
  }
  
  setBlend(cafe: Cafe): void {
    this.cafeBlend.push(cafe);
  }
  
  setCafesPerType(cafes: Cafe[]): void { 
    for (let i = 0; i < cafes.length; i++) {
      cafes[i].tipo == 'Blend' ? this.setBlend(cafes[i]) : this.setOrigen(cafes[i]);
    }
  }

  ngOnInit(): void {
    
    this.getAllCafes();
    

    
  }

}
